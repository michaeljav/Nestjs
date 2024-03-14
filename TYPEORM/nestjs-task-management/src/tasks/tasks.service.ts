import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
// import * as uuid from 'uuid/v1';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, InsertResult, Repository, getRepository } from 'typeorm';
// import { TaskRepository } from './entities/task.repository';
import { TaskEntity } from './entities/task.entity';
import { TaskStatus } from './task-status.enum';
import { UserEntity } from 'src/auth/entity/user.entity';
import { throws } from 'assert';

@Injectable()
export class TasksService {
  private logger = new Logger('TasksService');
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
    private readonly dataSource: DataSource,
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

    try {
      const tasks = await query.getMany();
      return tasks;
    } catch (error) {
      this.logger.error(
        `Failed to get tasks for user "${user.username}". Filter:${JSON.stringify(filterDto)}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
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

    const task2 = new TaskEntity();
    task2.title = 'Task ENTRADO HARD CODED';
    task2.description = 'Task ENTRADO HARD CODED';
    task2.status = TaskStatus.OPEN;
    // task2.user = user;
    task2.userId = 1;

    class t {
      nombre = 'sd';
    }

    const userl = new t();
    userl.nombre = 'password';

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    //open transaction
    // await queryRunner.startTransaction('SERIALIZABLE');
    await queryRunner.startTransaction();
    try {
      // const saved: TaskEntity = await this.taskRepository.save({ ...task }); //insert or update

      console.log('MICHAEL ', task);
      //do operation
      // const saved: TaskEntity =await queryRunner.manager.save({ ...task });
      const saved: TaskEntity = await queryRunner.manager.save(task);

      // //ESTO NO FUNCIONO PARA TIRAR UN ERROR PORQUE LO USO CON AWait Y POR ESO NO FUNCIONA
      // const a: number = 1;
      // const b: number = 0;
      // let c = 0;
      // c = a / b;
      // if (c !== 0) console.log(c);
      // else {
      //   throw new Error('Division by zero!');
      // }
      // await queryRunner.manager.save(task2);
      //este es para emitir un error y no guardar  el anterior tarea.
      // await queryRunner.manager.save(userl);

      // await queryRunner.manager.save(task2);
      // const saved: InsertResult = await this.taskRepository.insert({ ...task }); //just to insert
      // console.log(saved);
      // return new Promise(() => {});
      //delete the user before sending back to the client
      // delete saved.user;
      //COMMIT TRANSACTION
      await queryRunner.commitTransaction();
      return saved;
    } catch (error) {
      //since we have erros let's rollback the changes we made
      await queryRunner.rollbackTransaction();
      this.logger.error(
        `Failed to create task for user "${user.username}". Data:${JSON.stringify(createTaskDto)}`,
        error.stack,
      );
      throw new InternalServerErrorException('Probmae', error.stack);
    } finally {
      //you need to release query runner which is manully created
      await queryRunner.release();
    }
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
