/*
  Warnings:

  - You are about to alter the column `name` on the `contacts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `email` on the `contacts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `company` on the `contacts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `budget` on the `contacts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `timeline` on the `contacts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "contacts" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "company" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "budget" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "timeline" SET DATA TYPE VARCHAR(100);
