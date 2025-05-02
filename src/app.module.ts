import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelloModule } from './hello/hello.module';
import { Hello } from './hello/hello.entity';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { User } from './user/user.entity';
import { Todo } from './todo/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',       // your MySQL username
      password: '',           // your MySQL password
      database: 'webprog',    // your database name
      entities: [Hello, User, Todo],      // ✅ Must include your entity here
      synchronize: true,      // ✅ Auto create table
    }),
    HelloModule,
    UserModule,
    TodoModule
  ],
})
export class AppModule {}
