import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Job } from '../job/job.entities';

@Entity()
export class JobApplication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Job, { nullable: false, onDelete: 'CASCADE' })
  job: Job;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  phone?: string;

  // store file paths or names as a comma-separated list
  @Column('simple-array', { nullable: true })
  cvFiles?: string[];

  @CreateDateColumn()
  createdAt: Date;
}
