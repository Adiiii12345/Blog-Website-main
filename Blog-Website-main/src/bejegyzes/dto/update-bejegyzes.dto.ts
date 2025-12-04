import { PartialType } from '@nestjs/mapped-types';
import { CreateBejegyzesDto } from './create-bejegyzes.dto';

export class UpdateBejegyzesDto extends PartialType(CreateBejegyzesDto) {}
