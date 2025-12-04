  import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BejegyzesService } from './bejegyzes.service';
import { CreateBejegyzesDto } from './dto/create-bejegyzes.dto';
import { UpdateBejegyzesDto } from './dto/update-bejegyzes.dto';

@Controller('bejegyzes')
export class BejegyzesController {
  constructor(private readonly bejegyzesService: BejegyzesService) {}

  @Post()
  create(@Body() createBejegyzesDto: CreateBejegyzesDto) {
    return this.bejegyzesService.create(createBejegyzesDto);
  }

  @Get()
  findAll() {
    return this.bejegyzesService.findAll();
  }

  @Get('szerzok/:id')
  async findBySzerzo(@Param('id') id: string) {
    return this.bejegyzesService.findBySzerzo(parseInt(id, 10));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bejegyzesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBejegyzesDto: UpdateBejegyzesDto) {
    return this.bejegyzesService.update(+id, updateBejegyzesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bejegyzesService.remove(+id);
  }
}
