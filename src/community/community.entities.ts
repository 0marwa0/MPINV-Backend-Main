import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { State } from '../state/state.entity';

@Entity('community')
export class Community {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150, nullable: true })
  logo?: string;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'int', nullable: true })
  state_id?: number;

  @ManyToOne(() => State, {
    nullable: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'state_id' })
  state?: State;
}
