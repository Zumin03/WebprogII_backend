import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  createTodo(@Body() todoData: Partial<Todo>): Promise<Todo> {
    return this.todoService.create(todoData);
  }

  @Patch(':id')
  updateTodo(@Param('id') id: number, @Body() updateData: Partial<Todo>): Promise<Todo | null> {
    return this.todoService.update(id, updateData);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number): Promise<void> {
    return this.todoService.delete(id);
  }
}