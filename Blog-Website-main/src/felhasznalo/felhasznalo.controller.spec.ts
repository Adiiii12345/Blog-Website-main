import { Test, TestingModule } from '@nestjs/testing';
import { FelhasznaloController } from './felhasznalo.controller';
import { FelhasznaloService } from './felhasznalo.service';

describe('FelhasznaloController', () => {
  let controller: FelhasznaloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FelhasznaloController],
      providers: [FelhasznaloService],
    }).compile();

    controller = module.get<FelhasznaloController>(FelhasznaloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
