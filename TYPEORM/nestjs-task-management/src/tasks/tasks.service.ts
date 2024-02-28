import { Injectable, NotFoundException } from '@nestjs/common';
// import * as uuid from 'uuid/v1';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { TaskRepository } from './entities/task.repository';
import { TaskEntity } from './entities/task.entity';
import { TaskStatus } from './task-status.enum';

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

  async getTaskById(id: number): Promise<TaskEntity> {
    // const found = await this.taskRepository.findOne(id);
    const found = await this.taskRepository.findOne({ where: { id: id } });
    // const found = new Promise<TaskEntity>((resolve, reject) => {
    //   return resolve({ id: 4, description: 'Descri' } as TaskEntity);
    // });
    if (!found) {
      // throw new NotFoundException();
      throw new NotFoundException(`Task with Id ${id} not found`);
    }
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const { title, description } = createTaskDto;
    const task: TaskEntity = {
      // id: uuid(),
      // id: -1,
      // id: ,
      title,
      description,
      status: TaskStatus.OPEN,
    };
    const saved: TaskEntity = await this.taskRepository.save({ ...task });
    // const saved:TaskEntity = await this.taskRepository.insert({ ...task });
    return saved;
  }

  async deleteTask(id: number): Promise<boolean> {
    const result = await this.taskRepository.delete(id);
    return result.affected > 0;
  }
  async updateTaskStatus(id: number, status: TaskStatus): Promise<TaskEntity> {
    const found: TaskEntity = await this.taskRepository.findOne({
      where: { id: id },
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
