import { Test, TestingModule } from '@nestjs/testing';
import { BejegyzesService } from './bejegyzes.service';

describe('BejegyzesService', () => {
  let service: BejegyzesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BejegyzesService],
    }).compile();

    service = module.get<BejegyzesService>(BejegyzesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
