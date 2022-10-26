import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
    constructor( 
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>) {}

    async findAll(){
        return this.usersRepository.find({
            select: ['id', 'first_name', 'last_name', 'email'],
        });
    }

    async findOne(id: string) {
        return await this.usersRepository.findBy({id});
    }

    async findOneOrFail(email: string) {
        return await this.usersRepository.findOneByOrFail({email: email});
    }

    async create(data: CreateUserDto){
        return await this.usersRepository.save(data);
    }

    async update(id: string, data: UpdateUserDto){
        return await this.usersRepository.update(id, data);
    }

    async destroy(id: string) {
        return this.usersRepository.delete(id);
    }
}
