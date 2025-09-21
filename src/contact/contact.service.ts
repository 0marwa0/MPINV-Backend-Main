// src/contact/contact.service.ts
import { Injectable } from '@nestjs/common';
import { ContactDto } from './contact.dto';

@Injectable()
export class ContactService {
  private messages: ContactDto[] = [];

  create(contactDto: ContactDto) {
    this.messages.push(contactDto);
    return { success: true, message: 'Contact message received!' };
  }

  findAll() {
    return this.messages;
  }
}
