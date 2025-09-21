import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('developer')
export class Developer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  logo?: string; // image path or URL
}
