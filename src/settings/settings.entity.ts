import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  site_name: string;
  @Column()
  site_description: string;
  @Column()
  site_keywords: string;
  @Column()
  site_tagline: string;
  @Column()
  copyright_text: string;
  @Column()
  default_currency: string;
  @Column()
  support_phone: string;
  @Column()
  support_email: string;
  @Column()
  list_property_email: string;
  @Column()
  contact_email: string;
  @Column()
  contact_phone: string;
  @Column()
  telephone: string;
  @Column()
  contact_fax: string;
  @Column()
  office_timing: string;
  @Column()
  whatsapp_phone: string;
  @Column()
  facebook_url: string;
  @Column()
  twitter_url: string;
  @Column()
  telegram_url: string;
  @Column()
  youtube_url: string;
  @Column()
  google_map_api_key: string;
  @Column()
  review_points: number;
  @Column()
  about_us: string;
  @Column()
  instgram_url: string;
  @Column()
  tiktok_url: string;
  @Column()
  linkedin_url: string;
  @Column()
  calendly_url: string;
  @Column()
  careers_email: string;
  @Column()
  alt_phone: string;
  @Column()
  alt_telephone: string;
  @Column()
  office_address: string;
}
