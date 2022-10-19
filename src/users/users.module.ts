import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersEntity } from './users.entity';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersEntity],
  exports: [UsersService],
})
export class UsersModule {}
