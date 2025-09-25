import { Test, TestingModule } from '@nestjs/testing';
import { TrustedBrandsService } from './trusted-brands.service';

describe('TrustedBrandsService', () => {
  let service: TrustedBrandsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrustedBrandsService],
    }).compile();

    service = module.get<TrustedBrandsService>(TrustedBrandsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
