import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FelhasznaloService } from './felhasznalo.service';
import { CreateFelhasznaloDto } from './dto/create-felhasznalo.dto';
import { UpdateFelhasznaloDto } from './dto/update-felhasznalo.dto';

@Controller('felhasznalo')
export class FelhasznaloController {
  constructor(private readonly felhasznaloService: FelhasznaloService) {}

  @Post()
  create(@Body() createFelhasznaloDto: CreateFelhasznaloDto) {
    return this.felhasznaloService.create(createFelhasznaloDto);
  }

  @Get()
  findAll() {
    return this.felhasznaloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.felhasznaloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFelhasznaloDto: UpdateFelhasznaloDto) {
    return this.felhasznaloService.update(+id, updateFelhasznaloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.felhasznaloService.remove(+id);
  }
}
