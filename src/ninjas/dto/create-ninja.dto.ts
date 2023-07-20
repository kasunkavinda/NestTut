import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateNinjaDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
