import { Test, TestingModule } from '@nestjs/testing';
import { OffPlanEnquiryController } from './off-plan-enquiry.controller';

describe('OffPlanEnquiryController', () => {
  let controller: OffPlanEnquiryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OffPlanEnquiryController],
    }).compile();

    controller = module.get<OffPlanEnquiryController>(OffPlanEnquiryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
