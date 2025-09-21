import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OffPlanProject } from './off-plan-project.entity';

@Injectable()
export class OffPlanProjectService {
  constructor(
    @InjectRepository(OffPlanProject)
    private readonly repo: Repository<OffPlanProject>,
  ) {}

  async create(payload: Partial<OffPlanProject>): Promise<OffPlanProject> {
    const entity = this.repo.create(payload);
    return await this.repo.save(entity);
  }

  async findAll(): Promise<OffPlanProject[]> {
    return await this.repo.find({ order: { id: 'DESC' } });
  }

  async findOne(id: number): Promise<OffPlanProject> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) throw new NotFoundException(`Off-plan project ${id} not found`);
    return entity;
  }

  async update(id: number, payload: Partial<OffPlanProject>): Promise<OffPlanProject> {
    const entity = await this.findOne(id);
    Object.assign(entity, payload);
    return await this.repo.save(entity);
  }

  async remove(id: number): Promise<void> {
    const result = await this.repo.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Off-plan project ${id} not found`);
  }
}

