import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('off_plan_project')
export class OffPlanProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 250 })
  project_title: string;

  @Column({ type: 'text', nullable: true })
  project_short_doc: string;

  @Column({ type: 'longtext', nullable: true })
  project_highlights: string; // JSON array of strings

  @Column({ type: 'varchar', length: 150, nullable: true })
  bg_img: string; // desktop image path

  @Column({ type: 'varchar', length: 150, nullable: true })
  bg_img_mobile: string; // phone image path

  @Column({ type: 'longtext', nullable: true })
  gallery_images: string; // JSON array of image paths

  @Column({ type: 'decimal', precision: 14, scale: 2, nullable: true })
  price: number;

  @Column({ type: 'text', nullable: true })
  long_description: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  right_side_image: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  location_image: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  construction_status: string;

  @Column({ type: 'int', nullable: true })
  completion_year: number;

  @Column({ type: 'int', nullable: true })
  no_of_units: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  developer_id: string;

  @Column({ type: 'text', nullable: true })
  payment_plan: string; // text value

  @Column({ type: 'varchar', length: 150, nullable: true })
  payment_pdf: string; // uploaded file path

  @Column({ type: 'longtext', nullable: true })
  property_details: string; // JSON array of property detail objects

  @Column({ type: 'varchar', length: 150, nullable: true })
  types_pdf: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  broucher: string; // brochure file path

  @Column({ type: 'text', nullable: true })
  brochure_url: string;

  @Column({ type: 'text', nullable: true })
  youtube_url: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  amenities_id: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  state_id: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  community_id: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  sub_community_id: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  status: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  agent_id: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  meta_title: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  meta_description: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  meta_keywords: string;

  @Column({ type: 'int', nullable: true })
  madhmoun_permit_number: number;

  @Column({ type: 'varchar', length: 15, nullable: true })
  ded: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  rera: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  brn: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  trakheesi_permit: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  map_location: string;
}

