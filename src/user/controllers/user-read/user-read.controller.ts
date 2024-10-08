import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserReadController {

    constructor(
        private readonly userService: UserService
    ){}


    @Get()
    async findALl(){
        return await this.userService.findAll()
    }

    @Post()
    async create(@Body() fields: CreateUserInput){
        return await this.userService.create(fields)
    }

}
