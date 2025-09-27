import { Test, TestingModule } from '@nestjs/testing';
import { ComponenyMembersService } from './componeny-members.service';

describe('ComponenyMembersService', () => {
  let service: ComponenyMembersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponenyMembersService],
    }).compile();

    service = module.get<ComponenyMembersService>(ComponenyMembersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
