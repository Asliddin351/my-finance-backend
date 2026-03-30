import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto, UserDto } from '@/user/user.dto';
import { prisma } from '@lib/prisma';

@Controller('user')
export class UserController {
    @Post()
    async createUser(@Body() createUserDto: createUserDto) {
        console.log(createUserDto)
    }
}
