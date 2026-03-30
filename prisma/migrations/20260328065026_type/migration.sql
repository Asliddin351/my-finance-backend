-- CreateEnum
CREATE TYPE "TRansactionType" AS ENUM ('INCOME', 'OUTCOME');

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "type" "TRansactionType" NOT NULL DEFAULT 'OUTCOME';
