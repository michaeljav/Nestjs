import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskStatus } from '../task-status.enum';
import { UserEntity } from '../../auth/entity/user.entity';

@Entity('task')
// export class TaskEntity extends BaseEntity {  /*me daba error al insertar*/
export class TaskEntity {
  // @Column({ primary: true, generated: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  // @ManyToOne((type) => UserEntity, (user) => user.tasks, { eager: false })
  @ManyToOne(() => UserEntity, (user) => user.tasks, { eager: false })
  user: UserEntity;
}
