import { prisma } from '@lib/prisma';
import { Injectable } from '@nestjs/common';
import { TransactionDto } from './dto/transaction.dto';

@Injectable()
export class TransactionsService {
  async getAllTransactions() {
    const response = await prisma.transaction.findMany({
      select: { id: true, amount: true, type: true },
      skip: 0,
      take: 10
    });
    return response;
  }

  async getTransactionById(id: number) {
    const response = await prisma.transaction.findUnique({ where: { id } });
    return response;
  }

  async createTransaction(data: TransactionDto, userId: string) {
    const response = await prisma.transaction.create({
      data: {
        title: data.title,
        amount: data.amount,
        type: data.type, // Теперь типы совпадают (Enum)
        categoryId: data.categoryId,
        userId: userId,
        // Поле id передавать не нужно, так как стоит autoincrement()
      },
    });
    return response;
  }
}
