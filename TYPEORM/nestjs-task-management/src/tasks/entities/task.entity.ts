import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from '../task-status.enum';

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
}
