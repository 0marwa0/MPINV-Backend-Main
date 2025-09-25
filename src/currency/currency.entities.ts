import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('currency')
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lable: string;

  @Column()
  value: string;
  @Column()
  country: string;
}
