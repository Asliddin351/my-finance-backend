import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDto, LoginDto } from '@/user/user.dto';
import { UserService } from './user.service';
import { Public } from '@/common/decorators/Public';
import { UserId } from '@/common/decorators/UserId';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Get()
  async getUsers() {
    return await this.userService.getAllUsers();
  }

  @Get('me')
  async getUserById(@UserId() userId: string) {
    return await this.userService.getUserById(userId);
  }

  @Public()
  @Post()
  async createUser(@Body() dto: createUserDto) {
    return await this.userService.createUser(dto);
  }

  @Public()
  @Post('login')
  async login(@Body() body: LoginDto) {
    const { email, password } = body;
    return await this.userService.login(email, password);
  }
}
