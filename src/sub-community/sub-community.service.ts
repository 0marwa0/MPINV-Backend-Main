import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubCommunity } from './sub-community.entity';

@Injectable()
export class SubCommunityService {
  constructor(
    @InjectRepository(SubCommunity)
    private readonly repo: Repository<SubCommunity>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{
    data: SubCommunity[];
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

  async findByCommunityId(
    communityId: number,
    page: number = 1,
    limit: number = 10,
  ): Promise<{
    data: SubCommunity[];
    total: number;
    page: number;
    limit: number;
  }> {
    const take = Math.max(1, Math.min(100, Number(limit)));
    const currentPage = Math.max(1, Number(page));
    const skip = (currentPage - 1) * take;

    const [data, total] = await this.repo.findAndCount({
      where: { community_id: communityId },
      relations: ['community'], // Include community data in response
      order: { id: 'DESC' },
      take,
      skip,
    });

    return { data, total, page: currentPage, limit: take };
  }

  async create(
    data: Pick<SubCommunity, 'name' | 'community_id'>,
  ): Promise<SubCommunity> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  async update(id: number, data: Partial<SubCommunity>): Promise<SubCommunity> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) throw new NotFoundException(`Sub-community ${id} not found`);
    Object.assign(entity, data);
    return this.repo.save(entity);
  }

  async remove(id: number): Promise<void> {
    const result = await this.repo.delete(id);
    if (!result.affected)
      throw new NotFoundException(`Sub-community ${id} not found`);
  }
}
