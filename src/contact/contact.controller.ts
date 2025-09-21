// src/contact/contact.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactDto } from './contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
@Controller('contact')
export class ContactController {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  @Post()
  create(@Body() contactDto: ContactDto) {
    const contact = this.contactRepository.create(contactDto);
    return this.contactRepository.save(contact);
  }

  @Get()
  findAll() {
    return this.contactRepository.find();
  }
}
