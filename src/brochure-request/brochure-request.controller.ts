// src/brochure-request/brochure-request.controller.ts
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BrochureRequestDto } from './brochure-request.dto';
import { BrochureRequestService } from './brochure-request.service';

@Controller('brochure-requests')
export class BrochureRequestController {
  constructor(
    private readonly brochureRequestService: BrochureRequestService,
  ) {}

  @Post()
  async create(@Body() dto: BrochureRequestDto) {
    return await this.brochureRequestService.create(dto);
  }

  @Get()
  async findAll(@Query('page') page?: string, @Query('limit') limit?: string) {
    return await this.brochureRequestService.findAll(
      Number(page) || 1,
      Number(limit) || 10,
    );
  }
}
