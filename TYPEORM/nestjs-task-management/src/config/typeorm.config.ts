// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import * as config from 'config';
import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

const dbConfig = config.get('db');
// export const typeOrmConfig: TypeOrmModuleOptions = {
export const dataSourceOptions: DataSourceOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  // entities: [__dirname + '/../**/*.entity.ts'], //no working
  // entities: [`${__dirname}/**/*.entity{.ts,.js}`], //no working
  // entities: [`${__dirname}/../**/*.entity{.ts,.js}`], //yes
  // entities: [`src/**/entities/*.entity.{ts,js}`], //yes testing
  // entities: [`src/**/*.entity.{ts,js}`], //yes testing
  entities: ['src/**/*.entity.ts'],
  //aternative
  // autoLoadEntities: true,
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
  // synchronize: true,
  // migrations: [join(__dirname, '../**/*.migrations/*{.ts,js}')],
  // migrations: [join(__dirname, '../migrations/*{.ts,js}')],
  // migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  // migrations: ['dist/migrations/**'],
  // migrations: ['dist/migrations/*.js'],
  // migrations: ['dist/migrations/*{.ts,.js}'],
  // migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  // migrations: ['src/**/migrations/*{.ts,.js}'],//testing
  // migrations: ['src/db/migrations/*.ts'],
  // migrationsRun: true,
  migrations: ['src/database/migrations/*.ts'],
  // logging: true,
};
// console.log('michael ', [__dirname + '/../**/*.entity.ts'], [__dirname]);
// /../ son para subir o salir de la carpeta actual
// console.log(
//   'michael ',
//   [__dirname + '/../migrations/**/*{.ts,.js}'],
//   [__dirname + '/migrations/**/*{.ts,.js}'],
//   [__dirname],
// );
// console.log(
//   'michael ',
//   join(__dirname, '../**/*.migrations/*{.ts,js}'),
//   [join(__dirname, '../**/*.migrations/*{.ts,js}')],
//   [`${__dirname}/../**/*.entity{.ts,.js}`],
// );

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
