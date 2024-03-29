import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
// import { TaskEntity } from 'src/tasks/entities/task.entity';//no funciona bien con la migracion por la forma de referenciar con src/...
import { TaskEntity } from '../../tasks/entities/task.entity';

@Entity('user')
@Unique(['username'])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;
  //
  // // @OneToMany((type) => TaskEntity, (task) => task.user, { eager: true })
  // @OneToMany(() => TaskEntity, (task) => task.user, { eager: true })
  // @OneToMany(() => TaskEntity, (task) => task.userId)
  // tasks: TaskEntity[];

  // //estoy haiendo referencia a la actual columna que esta en base de datos
  // //cuando le ponto el nombre igual
  // // @Column({})
  // @Column('int', { name: 'task_Id' })
  // taskId: number;

  //ONE TO ONE :
  // //1.la entidad a la cual hago referencia "TaskEntity"
  // //2. segundo parametro: en la tabla task buscar el campo user que pertenece a la tabla user "(task) => task.user""
  // //3.escribir la columna que tendra la referencia a la tabla task
  // // @OneToOne(() => TaskEntity)
  // @OneToOne(() => TaskEntity, (task) => task.user)
  // @JoinColumn({ name: 'task_Id', referencedColumnName: 'id' })
  // task: TaskEntity;

  //ONE TO MANY TASKS
  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks: TaskEntity[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    // console.log(password, hash, this.password, hash === this.password);
    return hash === this.password;
  }
}
