import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';

import { UserModule } from '@/user/user.module';
import { CategoryModule } from './category/category.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [UserModule, CategoryModule, TransactionsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
