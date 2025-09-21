import { IsNotEmpty } from 'class-validator';

export class SubCommunityDto {
  @IsNotEmpty()
  name: string;
  id: number;
  community_id: string;
  created_at: Date;
  updated_at: Date;
}
