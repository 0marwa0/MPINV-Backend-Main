import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jobTitle: string;

  @Column({ nullable: true })
  location?: string;

  @Column({ nullable: true })
  jobLink?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  status?: string;

  @Column({ type: 'text', nullable: true })
  description?: string;
}
