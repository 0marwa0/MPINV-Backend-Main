// src/contact/dto/contact.dto.ts
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class ContactDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(10)
  message: string;
}
