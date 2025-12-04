-- DropForeignKey
ALTER TABLE `bejegyzes` DROP FOREIGN KEY `Bejegyzes_userId_fkey`;

-- DropIndex
DROP INDEX `Bejegyzes_userId_fkey` ON `bejegyzes`;

-- AddForeignKey
ALTER TABLE `Bejegyzes` ADD CONSTRAINT `Bejegyzes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Felhasznalo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
