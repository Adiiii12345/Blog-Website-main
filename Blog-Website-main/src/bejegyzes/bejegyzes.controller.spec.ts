import { Test, TestingModule } from '@nestjs/testing';
import { BejegyzesController } from './bejegyzes.controller';
import { BejegyzesService } from './bejegyzes.service';

describe('BejegyzesController', () => {
  let controller: BejegyzesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BejegyzesController],
      providers: [BejegyzesService],
    }).compile();

    controller = module.get<BejegyzesController>(BejegyzesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
