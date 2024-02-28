import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: '12345678',
  database: 'taskdb',
  // entities: [__dirname + '/../**/*.entity.ts'],
  entities: [`${__dirname}/**/*.entity{.ts,.js}`], //no working
  autoLoadEntities: true,
  synchronize: true,
};
console.log('michael ', [__dirname + '/../**/*.entity.ts'], [__dirname]);
