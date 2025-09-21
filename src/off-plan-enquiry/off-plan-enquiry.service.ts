import { Injectable } from '@nestjs/common';
import { OffPlanEnquiryDto } from './off-plan-enquiry.dto';

@Injectable()
export class OffPlanEnquiryService {
  private enquiries: OffPlanEnquiryDto[] = [];

  create(enquiryDto: OffPlanEnquiryDto) {
    this.enquiries.push(enquiryDto);
    return { success: true, message: 'Off-plan enquiry received!' };
  }
  findAll() {
    return this.enquiries;
  }
}
