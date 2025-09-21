import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './state.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly repo: Repository<State>,
  ) {}

  async findAll(): Promise<State[]> {
    return this.repo.find({ order: { id: 'DESC' } });
  }

  async create(data: Pick<State, 'name' | 'code'>): Promise<State> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  async remove(id: number): Promise<void> {
    const result = await this.repo.delete(id);
    if (!result.affected) {
      throw new NotFoundException(`State ${id} not found`);
    }
  }
}
