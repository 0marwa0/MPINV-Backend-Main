// src/brochure-request/brochure-request.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrochureRequestDto } from './brochure-request.dto';
import { BrochureRequest } from './brochure.entity';

@Controller('brochure-requests')
export class BrochureRequestController {
  constructor(
    @InjectRepository(BrochureRequest)
    private readonly brochureRequestRepository: Repository<BrochureRequest>,
  ) {}

  @Post()
  async create(@Body() dto: BrochureRequestDto) {
    const brochure = this.brochureRequestRepository.create(dto);
    return await this.brochureRequestRepository.save(brochure);
  }

  @Get()
  async findAll() {
    return await this.brochureRequestRepository.find();
  }
}
