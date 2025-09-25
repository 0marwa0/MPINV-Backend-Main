import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly repo: Repository<Category>,
  ) {}
  async findAll(): Promise<Category[]> {
    return this.repo.find();
  }

  async create(data: Partial<Category>): Promise<Category> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  async update(id: number, data: Partial<Category>): Promise<Category> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) throw new Error(`Category ${id} not found`);
    Object.assign(entity, data);
    return this.repo.save(entity);
  }

  async remove(id: number): Promise<void> {
    const result = await this.repo.delete(id);
    if (!result.affected) throw new Error(`Category ${id} not found`);
  }
}
