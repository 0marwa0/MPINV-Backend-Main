import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('listed_property')
export class ListedProperty {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column()
  category_id: number;
  @Column()
  location: string;
  @Column()
  price: number;
  @Column()
  size: string;
  @Column()
  unit_number: string;
  @Column()
  beds: number;
  @Column()
  property_image: string;
  @Column()
  passport_or_id: string;
  @Column()
  title_deed: string;
}
