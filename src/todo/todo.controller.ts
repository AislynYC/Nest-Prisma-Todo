import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo as TodoModel } from '@prisma/client';
import {
  CreateTodoDto,
  GetTodosQueryDto,
  GetOneParamsDto,
  UpdateTodoDto,
} from './dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // GET
  @Get()
  async getAll(): Promise<TodoModel[]> {
    return this.todoService.getAllTodos();
  }
  @Get('/examples')
  getExample() {
    return [{ id: 1, title: 'Buy flower', completed: false }];
  }

  @Get('/page')
  async getByPage(@Query() getTodosQueryDto: GetTodosQueryDto) {
    return this.todoService.getTodosByPage(getTodosQueryDto);
  }

  @Get(':id')
  async getById(@Param() params: GetOneParamsDto): Promise<TodoModel> {
    return this.todoService.getTodoById(params);
  }

  // POST
  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto): Promise<TodoModel> {
    return this.todoService.createTodo({ ...createTodoDto, completed: false });
  }

  // PATCH
  @Patch()
  async updateTodo(@Body() updateTodoDto: UpdateTodoDto): Promise<TodoModel> {
    return this.todoService.updateTodo(updateTodoDto);
  }
}
