import { Controller, Get, Post, Body } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getAll() {
    return this.helloService.findAll();
  }

  @Post()
  createHello(@Body('message') message: string) {
    return this.helloService.create(message);
  }
}