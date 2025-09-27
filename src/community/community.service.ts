import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Community } from './community.entities';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(Community)
    private readonly repo: Repository<Community>,
  ) {}

  async findAll(
    page = 1,
    limit = 10,
  ): Promise<{
    data: Community[];
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

  async findByStateId(
    stateId: number,
    page = 1,
    limit = 10,
  ): Promise<{
    data: Community[];
    total: number;
    page: number;
    limit: number;
  }> {
    const take = Math.max(1, Math.min(100, Number(limit)));
    const currentPage = Math.max(1, Number(page));
    const skip = (currentPage - 1) * take;

    const [data, total] = await this.repo.findAndCount({
      where: { state_id: stateId },
      relations: ['state'],
      order: { id: 'DESC' },
      take,
      skip,
    });

    return { data, total, page: currentPage, limit: take };
  }

  async create(data: Partial<Community>): Promise<Community> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  async update(id: number, data: Partial<Community>): Promise<Community> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) throw new NotFoundException(`Community ${id} not found`);
    Object.assign(entity, data);
    return this.repo.save(entity);
  }

  async remove(id: number): Promise<void> {
    const result = await this.repo.delete(id);
    if (!result.affected)
      throw new NotFoundException(`Community ${id} not found`);
  }
}
