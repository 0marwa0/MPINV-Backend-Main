import { IsEmail, IsNotEmpty } from 'class-validator';

export class BrochureRequestDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  project: string;
}
