import { IsEmail, IsNotEmpty } from 'class-validator';

export class OffPlanEnquiryDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  project: string;
}
