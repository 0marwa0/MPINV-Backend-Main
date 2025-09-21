import { Module } from '@nestjs/common';
import { OffPlanEnquiryController } from './off-plan-enquiry.controller';
import { OffPlanEnquiryService } from './off-plan-enquiry.service';

@Module({
  controllers: [OffPlanEnquiryController],
  providers: [OffPlanEnquiryService],
})
export class OffPlanEnquiryModule {}
