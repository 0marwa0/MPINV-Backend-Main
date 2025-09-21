import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Developer } from './developer.entities';

@Injectable()
export class DeveloperService {
  constructor(
    @InjectRepository(Developer)
    private readonly repo: Repository<Developer>,
  ) {}

  async findAll(
    page = 1,
    limit = 10,
  ): Promise<{ data: Developer[]; total: number; page: number; limit: number }> {
    const take = Math.max(1, Math.min(100, Number(limit)));
    const currentPage = Math.max(1, Number(page));
    const skip = (currentPage - 1) * take;
    const [data, total] = await this.repo.findAndCount({ order: { id: 'DESC' }, take, skip });
    return { data, total, page: currentPage, limit: take };
  }

  async create(data: Pick<Developer, 'name' | 'logo'>): Promise<Developer> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  async update(id: number, data: Partial<Developer>): Promise<Developer> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) throw new NotFoundException(`Developer ${id} not found`);
    Object.assign(entity, data);
    return this.repo.save(entity);
  }

  async remove(id: number): Promise<void> {
    const result = await this.repo.delete(id);
    if (!result.affected) throw new NotFoundException(`Developer ${id} not found`);
  }
}
