import { Module } from '@nestjs/common';
import { FelhasznaloService } from './felhasznalo.service';
import { FelhasznaloController } from './felhasznalo.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FelhasznaloController],
  providers: [FelhasznaloService, PrismaService],
})
export class FelhasznaloModule {}
