import { Injectable } from '@nestjs/common';
import { Faq } from './faq.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class FaqService {
  constructor(
    @InjectRepository(Faq)
    private faqRepository: Repository<Faq>,
  ) {}

  async findAll(): Promise<Faq[]> {
    return this.faqRepository.find();
  }
  async create(data: Partial<Faq>): Promise<Faq> {
    const entity = this.faqRepository.create(data);
    return this.faqRepository.save(entity);
  }

  async update(id: number, data: Partial<Faq>): Promise<Faq> {
    const entity = await this.faqRepository.findOneBy({ id });
    if (!entity) {
      throw new Error('FAQ not found');
    }
    Object.assign(entity, data);
    return this.faqRepository.save(entity);
  }

  async delete(id: number): Promise<void> {
    await this.faqRepository.delete(id);
  }
}
