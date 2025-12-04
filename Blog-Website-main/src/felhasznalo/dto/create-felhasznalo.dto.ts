import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateFelhasznaloDto {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  nev: string

  @IsDate()
  @IsOptional()
  createdAt: Date
}
