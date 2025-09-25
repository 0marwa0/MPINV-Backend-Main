// src/agent/entities/agent.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Agent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  status: boolean;

  @Column('simple-array', { nullable: true })
  languages: string[]; // stored as comma-separated values
}
