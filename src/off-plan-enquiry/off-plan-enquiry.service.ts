import { Injectable } from '@nestjs/common';
import { OffPlanEnquiryDto } from './off-plan-enquiry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OffPlanEnquiry } from './off-plan-enquiry.entities';
@Injectable()
export class OffPlanEnquiryService {
  constructor(
    @InjectRepository(OffPlanEnquiry)
    private readonly repo: Repository<OffPlanEnquiry>,
  ) {}

  create(enquiryDto: OffPlanEnquiryDto) {
    const enquiry = this.repo.create(enquiryDto);
    return this.repo.save(enquiry);
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
