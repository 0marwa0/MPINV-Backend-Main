import { Test, TestingModule } from '@nestjs/testing';
import { ListedPropertyService } from './listed_property.service';

describe('ListedPropertyService', () => {
  let service: ListedPropertyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListedPropertyService],
    }).compile();

    service = module.get<ListedPropertyService>(ListedPropertyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
