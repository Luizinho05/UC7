/*
  Warnings:

  - Added the required column `pais` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clientes` ADD COLUMN `pais` VARCHAR(191) NOT NULL;
