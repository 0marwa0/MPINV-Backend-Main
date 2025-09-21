import { Test, TestingModule } from '@nestjs/testing';
import { BrochureRequestController } from './brochure-request.controller';

describe('BrochureRequestController', () => {
  let controller: BrochureRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrochureRequestController],
    }).compile();

    controller = module.get<BrochureRequestController>(BrochureRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
