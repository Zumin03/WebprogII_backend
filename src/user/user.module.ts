import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Connect User entity to repository
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Optional: export if you want to use UserService in other modules
})
export class UserModule {}