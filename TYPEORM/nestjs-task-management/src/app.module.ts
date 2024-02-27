import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

//Decorator
@Module({
  imports: [TasksModule],
})
export class AppModule {}
