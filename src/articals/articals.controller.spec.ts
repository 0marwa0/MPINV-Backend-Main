import { Test, TestingModule } from '@nestjs/testing';
import { ArticalsController } from './articals.controller';

describe('ArticalsController', () => {
  let controller: ArticalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticalsController],
    }).compile();

    controller = module.get<ArticalsController>(ArticalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
