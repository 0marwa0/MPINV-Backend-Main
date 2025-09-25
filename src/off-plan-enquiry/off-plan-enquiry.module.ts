import { Module } from '@nestjs/common';
import { OffPlanEnquiryController } from './off-plan-enquiry.controller';
import { OffPlanEnquiryService } from './off-plan-enquiry.service';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { OffPlanEnquiry } from './off-plan-enquiry.entities';

@Module({
  imports: [TypeOrmModule.forFeature([OffPlanEnquiry])],
  controllers: [OffPlanEnquiryController],
  providers: [OffPlanEnquiryService],
})
export class OffPlanEnquiryModule {}
