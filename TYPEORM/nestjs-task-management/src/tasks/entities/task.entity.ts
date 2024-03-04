import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskStatus } from '../task-status.enum';
import { UserEntity } from '../../auth/entity/user.entity';

@Entity('task')
export class TaskEntity extends BaseEntity {
  /*me daba error al insertar*/
  // export class TaskEntity {
  // @Column({ primary: true, generated: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  // @Column()
  // migrationtest: string;

  // // @OneToOne(() => UserEntity)
  // @OneToOne(() => UserEntity, (user) => user.task)
  // user: UserEntity;

  @Column('int', { name: 'user_id' })
  userId: number;

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
