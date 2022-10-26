import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { hashSync } from 'bcrypt';

@Controller('/api/users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get()
    async index (){
        return this.usersService.findAll();
    }

    @Post()
    async store(@Body() body: CreateUserDto) {
        body.password = hashSync(body.password, 10);
        return this.usersService.create(body);
    }

    @Get(':id')
    async show(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.usersService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id', new ParseUUIDPipe()) id: string,
                @Body() body: UpdateUserDto) 
    {
        return this.usersService.update(id, body);
    }

    

    @Delete(':id')
    async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.usersService.destroy(id);
    }


}
