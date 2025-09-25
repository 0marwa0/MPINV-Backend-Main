import { Injectable } from '@nestjs/common';
import { BrochureRequestDto } from './brochure-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrochureRequest } from './brochure.entity';
@Injectable()
export class BrochureRequestService {
  constructor(
    @InjectRepository(BrochureRequest)
    private readonly repo: Repository<BrochureRequest>,
  ) {}

  create(brochureRequestDto: BrochureRequestDto) {
    const brochureRequest = this.repo.create(brochureRequestDto);
    return this.repo.save(brochureRequest);
  }

  async findAll(page: number, limit: number) {
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
}
