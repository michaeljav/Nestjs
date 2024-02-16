/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  // BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';
//La ruta sera
//GET localhost:3000/taks
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  async getAllTasks() {
    return await this.taskService.getAllTasks();
  }
  @Post()
  async createTask(@Body() data: Task) {
    try {
      // console.log('MICHAEL',data.task
      // a);
      return await this.taskService.createTask(data);
    } catch (error) {
      throw new NotFoundException('Task does not exist');
    }
  }

  //http://localhost:3000/tasks/1
  //el decorador extrae el id y lo pasa a la variable id:string
  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    const taskFound = await this.taskService.getTaskById(Number(id));

    if (!taskFound) {
      // throw new BadRequestException('Task does not exist');
      throw new NotFoundException('Task does not exist');
    }
    return taskFound;
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    try {
      return await this.taskService.deleteTask(Number(id));
    } catch (error) {
      throw new NotFoundException('Task does not exist');
    }
  }
  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() data: Task) {
    try {
      return await this.taskService.updateTask(Number(id), data);
    } catch (error) {
      throw new NotFoundException('Task does not exist');
    }
  }
}
