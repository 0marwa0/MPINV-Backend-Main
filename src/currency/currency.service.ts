import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Currency } from './currency.entities';
import { Repository } from 'typeorm';
@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(Currency)
    private readonly repo: Repository<Currency>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{
    data: Currency[];
    total: number;
    page: number;
    limit: number;
  }> {
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

  async create(data: Partial<Currency>): Promise<Currency> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  async update(id: number, data: Partial<Currency>): Promise<Currency> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) throw new Error(`Currency ${id} not found`);
    Object.assign(entity, data);
    return this.repo.save(entity);
  }
  async remove(id: number): Promise<void> {
    const result = await this.repo.delete(id);
    if (!result.affected) throw new Error(`Currency ${id} not found`);
  }
}
