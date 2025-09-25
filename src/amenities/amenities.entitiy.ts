import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('amenities')
export class Amenities {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  icon: string;

  @Column()
  code: string;
}
