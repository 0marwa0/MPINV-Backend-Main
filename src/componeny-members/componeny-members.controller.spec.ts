import { Test, TestingModule } from '@nestjs/testing';
import { ComponenyMembersController } from './componeny-members.controller';

describe('ComponenyMembersController', () => {
  let controller: ComponenyMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponenyMembersController],
    }).compile();

    controller = module.get<ComponenyMembersController>(ComponenyMembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
