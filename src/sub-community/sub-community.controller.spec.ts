import { Test, TestingModule } from '@nestjs/testing';
import { SubCommunityController } from './sub-community.controller';

describe('SubCommunityController', () => {
  let controller: SubCommunityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubCommunityController],
    }).compile();

    controller = module.get<SubCommunityController>(SubCommunityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
