import { BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from '@/app.service';



@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get/:id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    if(id < 1) {
      throw new BadRequestException('Id должен быть больше 0');
    }
    return id;
  }


}
