import { IsNotEmpty, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class GetTodosQueryDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  limit: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  offset: number;
}
