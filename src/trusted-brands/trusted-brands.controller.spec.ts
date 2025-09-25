import { Test, TestingModule } from '@nestjs/testing';
import { TrustedBrandsController } from './trusted-brands.controller';

describe('TrustedBrandsController', () => {
  let controller: TrustedBrandsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrustedBrandsController],
    }).compile();

    controller = module.get<TrustedBrandsController>(TrustedBrandsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
