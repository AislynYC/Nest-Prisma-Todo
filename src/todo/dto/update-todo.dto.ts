import { IsNotEmpty } from 'class-validator';

export class UpdateTodoDto {
  @IsNotEmpty()
  id: number;

  title?: string;

  completed?: boolean;
}
