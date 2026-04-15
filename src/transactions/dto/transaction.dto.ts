import {
  IsDecimal,
  IsNumber,
  IsString,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

// Импортируем именно из @prisma/client
import type { TRansactionType } from '@prisma/client';

// Теперь вы можете использовать его как тип:
const type: TRansactionType = TRansactionType.INCOME;

export class TransactionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(TRansactionType)
  type: TRansactionType;

  @IsNotEmpty()
  // Для работы с Decimal в Prisma лучше принимать строку или число
  amount: number;

  @IsNumber()
  categoryId: number;
}
