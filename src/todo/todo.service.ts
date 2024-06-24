import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Todo, Prisma } from '@prisma/client';
import { GetOneParamsDto } from './dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    });
  }

  async getAllTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async getTodoById({ id }: GetOneParamsDto): Promise<Todo | null> {
    return this.prisma.todo.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async getTodosByPage({ limit, offset }: { limit: number; offset: number }) {
    return this.prisma.todo.findMany({
      skip: offset,
      take: limit,
    });
  }

  async updateTodo({ id, title, completed }: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: { id },
      data: { title, completed },
    });
  }
}
