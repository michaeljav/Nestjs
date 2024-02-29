import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TaskEntity } from './entities/task.entity';
import { TaskStatus } from './task-status.enum';
import { AuthGuard } from '@nestjs/passport';
import { UserEntity } from '../auth/entity/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getTasks(
    @Query(ValidationPipe) filterDto: GetTasksFilterDto,
    @GetUser() user: UserEntity,
  ) {
    // : Promise<TaskEntity[]> {

    return this.tasksService.getTasks(filterDto, user);
  }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<TaskEntity> {
    return this.tasksService.getTaskById(id);
  }
  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: UserEntity,
  ): Promise<TaskEntity> {
    return this.tasksService.createTask(createTaskDto, user);
  }

  @Delete('/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id/status')
  // @Patch('/:id')
  updateTaskStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  ): Promise<TaskEntity> {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
