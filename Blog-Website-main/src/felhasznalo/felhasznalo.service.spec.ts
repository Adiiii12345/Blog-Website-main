import { Test, TestingModule } from '@nestjs/testing';
import { FelhasznaloService } from './felhasznalo.service';

describe('FelhasznaloService', () => {
  let service: FelhasznaloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FelhasznaloService],
    }).compile();

    service = module.get<FelhasznaloService>(FelhasznaloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
