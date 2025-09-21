import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('state')
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  code: string;
}
