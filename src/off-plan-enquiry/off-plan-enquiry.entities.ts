import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OffPlanEnquiry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  project: string;
}
