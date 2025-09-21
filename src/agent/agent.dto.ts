import { IsEmail, IsNotEmpty } from 'class-validator';

export class AgentDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  phone: string;

  image: string;

  city: string;

  status: boolean;

  languages: string[];
}
