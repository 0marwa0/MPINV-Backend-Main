import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Community } from '../community/community.entities';

@Entity('sub_community')
export class SubCommunity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'int' })
  community_id: number;

  @ManyToOne(() => Community, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'community_id' })
  community?: Community;

  @Column({ type: 'date', nullable: true })
  created_at: Date;

  @Column({ type: 'date', nullable: true })
  updated_at: Date;
}
