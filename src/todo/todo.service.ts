import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find({ relations: ['user'] }); // load related user info
  }

  create(todoData: Partial<Todo>): Promise<Todo> {
    const todo = this.todoRepository.create(todoData);
    return this.todoRepository.save(todo);
  }

  async update(id: number, updateData: Partial<Todo>): Promise<Todo | null> {
    await this.todoRepository.update(id, updateData);
    return this.todoRepository.findOne({ where: { id }, relations: ['user'] });
  }

  async delete(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}