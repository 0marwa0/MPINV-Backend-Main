import { Test, TestingModule } from '@nestjs/testing';
import { BrochureRequestService } from './brochure-request.service';

describe('BrochureRequestService', () => {
  let service: BrochureRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrochureRequestService],
    }).compile();

    service = module.get<BrochureRequestService>(BrochureRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
