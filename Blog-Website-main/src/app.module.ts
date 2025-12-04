import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FelhasznaloModule } from './felhasznalo/felhasznalo.module';
import { BejegyzesModule } from './bejegyzes/bejegyzes.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), FelhasznaloModule, BejegyzesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
