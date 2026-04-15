import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionDto } from './dto/transaction.dto';
import { UserId } from '@/common/decorators/UserId';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionsService) {}

  @Get()
  async getAllTransactions() {
    return await this.transactionService.getAllTransactions();
  }

  @Get()
  async getTransactionById(@Param() id: number) {
    return await this.transactionService.getTransactionById(id);
  }

  @Post()
  async createTransaction(@Body() data: TransactionDto, @UserId() userId: string) {
    return await this.transactionService.createTransaction(data, userId);
  }
}
