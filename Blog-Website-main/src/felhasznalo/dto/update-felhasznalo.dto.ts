import { PartialType } from '@nestjs/mapped-types';
import { CreateFelhasznaloDto } from './create-felhasznalo.dto';

export class UpdateFelhasznaloDto extends PartialType(CreateFelhasznaloDto) {}
