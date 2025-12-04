import { Injectable } from '@nestjs/common';
import { CreateBejegyzesDto } from './dto/create-bejegyzes.dto';
import { UpdateBejegyzesDto } from './dto/update-bejegyzes.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BejegyzesService {
  constructor (private prisma: PrismaService) {}
  create(createBejegyzesDto: CreateBejegyzesDto) {
    return this.prisma.bejegyzes.create({
      data: createBejegyzesDto
    });
  }

  findAll() {
    return this.prisma.bejegyzes.findMany();
  }

  async findBySzerzo(userId: number) {
    return this.prisma.bejegyzes.findMany({
      where: { userId },
      include: {
        felhasznalo: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.bejegyzes.findUnique({
      where: {id}
    });
  }

  update(id: number, updateBejegyzesDto: UpdateBejegyzesDto) {
    return this.prisma.bejegyzes.update({
      where: {id},
      data: updateBejegyzesDto
    });
  }

  remove(id: number) {
    return this.prisma.bejegyzes.delete({
      where: {id}
    });
  }
}
