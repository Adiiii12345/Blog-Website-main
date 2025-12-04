-- AddForeignKey
ALTER TABLE `Bejegyzes` ADD CONSTRAINT `Bejegyzes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Felhasznalo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
