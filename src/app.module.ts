import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { UserController } from '@/user/user.controller';
import { UserModule } from '@/user/user.module';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [UserModule, CategoryModule],
  controllers: [AppController, UserController, CategoryController],
  providers: [AppService, CategoryService],
})
export class AppModule {}
