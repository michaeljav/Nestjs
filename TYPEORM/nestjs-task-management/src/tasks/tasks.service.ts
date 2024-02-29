import { Injectable, NotFoundException } from '@nestjs/common';
// import * as uuid from 'uuid/v1';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
// import { TaskRepository } from './entities/task.repository';
import { TaskEntity } from './entities/task.entity';
import { TaskStatus } from './task-status.enum';
import { UserEntity } from 'src/auth/entity/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  //injet our repository
  // constructor(
  //   @InjectRepository(TaskRepository) private taskRepository: TaskRepository,
  // ) {}
  // private tasks: Task[] = [];

  async getTasks(
    filterDto: GetTasksFilterDto,
    user: UserEntity,
  ): Promise<TaskEntity[]> {
    const { status, search } = filterDto;
    const query = this.taskRepository.createQueryBuilder('task');

    query.where('task.userId = :userId', { userId: user.id });

    if (status) {
      query.andWhere('task.status = :status', { status });
    }
    if (search) {
      query.andWhere(
        '(task.title LIKE :search OR task.description LIKE :search)',
        { search: `%${search}%` },
      );
    }
    const tasks = await query.getMany();
    return tasks;
  }

  async getAllTasks(): Promise<TaskEntity[]> {
    // this.createTask('title', 'escription');
    return await this.taskRepository.find();
  }

  async getTasksWithFilteres(
    filterDto: GetTasksFilterDto,
  ): Promise<TaskEntity[]> {
    const { status, search } = filterDto;
    const tasks = await this.taskRepository.find({
      where: [{ status: status }, { title: search }, { description: search }],
    });

    return tasks;
  }

  async getTaskById(id: number, user: UserEntity): Promise<TaskEntity> {
    // const found = await this.taskRepository.findOne(id);
    const found = await this.taskRepository.findOne({
      where: { id: id, userId: user.id },
    });
    // const found = new Promise<TaskEntity>((resolve, reject) => {
    //   return resolve({ id: 4, description: 'Descri' } as TaskEntity);
    // });
    if (!found) {
      // throw new NotFoundException();
      throw new NotFoundException(`Task with Id ${id} not found`);
    }
    return found;
  }

  async createTask(
    createTaskDto: CreateTaskDto,
    user: UserEntity,
  ): Promise<TaskEntity> {
    const { title, description } = createTaskDto;
    const task = new TaskEntity();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    task.user = user;
    const saved: TaskEntity = await this.taskRepository.save({ ...task }); //insert or update
    // const saved: InsertResult = await this.taskRepository.insert({ ...task }); //just to insert
    // console.log(saved);
    // return new Promise(() => {});
    //delete the user before sending back to the client
    delete saved.user;
    return saved;
  }

  async deleteTask(id: number, user: UserEntity): Promise<{ result: boolean }> {
    const result = await this.taskRepository.delete({ id, userId: user.id });

    if (result.affected === 0) {
      throw new NotFoundException(`Task ${id} not found`);
    }
    return { result: result.affected > 0 };
  }
  async updateTaskStatus(
    id: number,
    status: TaskStatus,
    user: UserEntity,
  ): Promise<TaskEntity> {
    const found: TaskEntity = await this.taskRepository.findOne({
      where: { id: id, userId: user.id },
    });
    if (found) {
      found.status = status;
      await this.taskRepository.save(found);
      return found;
    } else {
      throw new NotFoundException(`Task with Id ${id} not found`);
    }
  }
}
