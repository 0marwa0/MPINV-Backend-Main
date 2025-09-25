import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Amenities } from './amenities.entitiy';
import { Repository } from 'typeorm';
@Injectable()
export class AmenitiesService {
  constructor(
    @InjectRepository(Amenities)
    private readonly repo: Repository<Amenities>,
  ) {}

  async findAll(): Promise<Amenities[]> {
    return this.repo.find();
  }
  async create(data: Partial<Amenities>): Promise<Amenities> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  async update(id: number, data: Partial<Amenities>): Promise<Amenities> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) throw new Error(`Amenities ${id} not found`);
    Object.assign(entity, data);
    return this.repo.save(entity);
  }

  async remove(id: number): Promise<void> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) throw new Error(`Amenities ${id} not found`);
    await this.repo.remove(entity);
  }
}
