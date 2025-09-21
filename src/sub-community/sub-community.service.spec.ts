import { Test, TestingModule } from '@nestjs/testing';
import { SubCommunityService } from './sub-community.service';

describe('SubCommunityService', () => {
  let service: SubCommunityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubCommunityService],
    }).compile();

    service = module.get<SubCommunityService>(SubCommunityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
