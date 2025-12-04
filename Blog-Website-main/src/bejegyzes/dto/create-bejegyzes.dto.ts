import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBejegyzesDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  content: string

  @IsNumber()
  @IsNotEmpty()
  userId: number

  @IsDate()
  @IsOptional()
  createdAt: Date
}
