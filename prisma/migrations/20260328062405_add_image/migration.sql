/*
  Warnings:

  - Added the required column `image` to the `Caterory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Caterory" ADD COLUMN     "image" TEXT NOT NULL;
