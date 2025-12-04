import { Module } from '@nestjs/common';
import { BejegyzesService } from './bejegyzes.service';
import { BejegyzesController } from './bejegyzes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BejegyzesController],
  providers: [BejegyzesService, PrismaService],
})
export class BejegyzesModule {}
