import { Body, Controller, Get, Post } from '@nestjs/common';
import { OffPlanEnquiryService } from './off-plan-enquiry.service';
import { OffPlanEnquiryDto } from './off-plan-enquiry.dto';
@Controller('off-plan-enquiry')
export class OffPlanEnquiryController {
  constructor(private readonly offPlanEnquiryService: OffPlanEnquiryService) {}

  @Post()
  create(@Body() dto: OffPlanEnquiryDto) {
    return this.offPlanEnquiryService.create(dto);
  }

  @Get()
  findAll() {
    return this.offPlanEnquiryService.findAll();
  }
}
