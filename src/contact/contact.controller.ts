// src/contact/contact.controller.ts
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ContactDto } from './contact.dto';

import { ContactService } from './contact.service';
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() contactDto: ContactDto) {
    return this.contactService.create(contactDto);
  }

  @Get()
  getAll(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.contactService.findAll(Number(page) || 1, Number(limit) || 10);
  }
}
