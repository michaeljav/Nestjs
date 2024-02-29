import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { dataSourceOptions } from './config/typeorm.config';

//Decorator
@Module({
  // imports: [TypeOrmModule.forRoot(typeOrmConfig), TasksModule, AuthModule],
  imports: [TypeOrmModule.forRoot(dataSourceOptions), TasksModule, AuthModule],
})
export class AppModule {}
