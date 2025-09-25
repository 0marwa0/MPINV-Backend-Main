// src/contact/contact.service.ts
import { Injectable } from '@nestjs/common';
import { ContactDto } from './contact.dto';
import { Contact } from './contact.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly repo: Repository<Contact>,
  ) {}
  async create(contactDto: ContactDto) {
    const contact = this.repo.create(contactDto as any);
    await this.repo.save(contact);
    return { success: true, message: 'Contact message received!' };
  }

  async findAll(page: number, limit: number) {
    const take = Math.max(1, Math.min(100, Number(limit)));
    const currentPage = Math.max(1, Number(page));
    const skip = (currentPage - 1) * take;
    const [data, total] = await this.repo.findAndCount({
      order: { id: 'DESC' },
      take,
      skip,
    });
    return { data, total, page: currentPage, limit: take };
  }
}
