/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TaskModule], //importa toda la carpeta de TaskModule
  controllers: [],
  providers: [],
})
export class AppModule {}
