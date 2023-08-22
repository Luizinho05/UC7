/*
  Warnings:

  - You are about to drop the column `ingrediente` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `meio_fabricacao` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `fabricante` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produtos` DROP COLUMN `ingrediente`,
    DROP COLUMN `meio_fabricacao`,
    ADD COLUMN `fabricante` VARCHAR(191) NOT NULL,
    ADD COLUMN `preco` VARCHAR(191) NOT NULL,
    ADD COLUMN `quantidade` VARCHAR(191) NOT NULL;
