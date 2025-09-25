import { Test, TestingModule } from '@nestjs/testing';
import { ListedPropertyController } from './listed_property.controller';

describe('ListedPropertyController', () => {
  let controller: ListedPropertyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListedPropertyController],
    }).compile();

    controller = module.get<ListedPropertyController>(ListedPropertyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
