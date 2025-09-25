import { Injectable } from '@nestjs/common';
import { Job } from './job.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly repo: Repository<Job>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ data: Job[]; total: number; page: number; limit: number }> {
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

  async create(
    data: Pick<
      Job,
      'jobTitle' | 'description' | 'location' | 'jobLink' | 'status'
    >,
  ): Promise<Job> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  async update(id: number, data: Partial<Job>): Promise<Job> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) throw new Error(`Job ${id} not found`);
    Object.assign(entity, data);
    return this.repo.save(entity);
  }

  async remove(id: number): Promise<void> {
    const result = await this.repo.delete(id);
    if (!result.affected) throw new Error(`Job ${id} not found`);
  }
}
