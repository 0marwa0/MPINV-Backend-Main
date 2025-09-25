import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agent } from './agent.entities';

@Injectable()
export class AgentService {
  constructor(
    @InjectRepository(Agent)
    private readonly agentRepository: Repository<Agent>,
  ) {}

  async create(data: Partial<Agent>): Promise<Agent> {
    const agent = this.agentRepository.create(data);
    return await this.agentRepository.save(agent);
  }
  async findAll(): Promise<Agent[]> {
    return await this.agentRepository.find();
  }

  async findOne(id: number): Promise<Agent> {
    const agent = await this.agentRepository.findOne({ where: { id } });
    if (!agent) throw new NotFoundException(`Agent ${id} not found`);
    return agent;
  }

  async remove(id: number): Promise<void> {
    const result = await this.agentRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Agent ${id} not found`);
  }
}
