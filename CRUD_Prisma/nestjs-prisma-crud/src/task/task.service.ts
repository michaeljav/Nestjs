/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

//define la conexion con la base de datos
@Injectable()
export class TaskService {
  //metodos para comunicar con la base de datos
  constructor(private prisma: PrismaService) {}

  async getAllTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }
  async getTaskById(id: number): Promise<Task> {
    return this.prisma.task.findUnique({
      where: {
        id: id,
      },
    });
  }
  async createTask(data: Task): Promise<Task> {
    return this.prisma.task.create({
      data: data,
    });
  }
  async updateTask(id: number, data: Task): Promise<Task> {
    return this.prisma.task.update({
      where: {
        id: id,
      },
      data: data,
    });
  }
  async deleteTask(id: number): Promise<Task> {
    return this.prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
}
