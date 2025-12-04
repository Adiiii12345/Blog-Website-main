import { Injectable } from '@nestjs/common';
import { CreateFelhasznaloDto } from './dto/create-felhasznalo.dto';
import { UpdateFelhasznaloDto } from './dto/update-felhasznalo.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FelhasznaloService {
  constructor (private prisma: PrismaService) {}
    create(createFelhasznaloDto: CreateFelhasznaloDto) {
      return this.prisma.felhasznalo.create({
        data: createFelhasznaloDto
      });
    }
  
    findAll() {
      return this.prisma.felhasznalo.findMany();
    }
  
    findOne(id: number) {
      return this.prisma.felhasznalo.findUnique({
        where: {id}
      });
    }
  
    update(id: number, updateFelhasznaloDto: UpdateFelhasznaloDto) {
      return this.prisma.felhasznalo.update({
        where: {id},
        data: updateFelhasznaloDto
      });
    }
  
    remove(id: number) {
      return this.prisma.felhasznalo.delete({
        where: {id}
      });
    }
}
