import { Test, TestingModule } from '@nestjs/testing';
import { OffPlanEnquiryService } from './off-plan-enquiry.service';

describe('OffPlanEnquiryService', () => {
  let service: OffPlanEnquiryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffPlanEnquiryService],
    }).compile();

    service = module.get<OffPlanEnquiryService>(OffPlanEnquiryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
