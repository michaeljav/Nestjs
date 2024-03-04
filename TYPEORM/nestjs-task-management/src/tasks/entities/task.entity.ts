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

  // @ManyToOne((type) => UserEntity, (user) => user.tasks, { eager: false })
  // @ManyToOne(() => UserEntity, (user) => user.tasks, { eager: false })
  // @ManyToOne(() => UserEntity, (user) => user.tasks)
  // user: UserEntity;

  // @Column()
  // userId: number;

  // @OneToOne(() => UserEntity)
  @OneToOne(() => UserEntity, (user) => user.task)
  // @JoinColumn({ name: 'user_Id' })
  user: UserEntity;
}
