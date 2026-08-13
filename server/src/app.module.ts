import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantsModule } from './merchants/merchants.module';

@Module({
  imports: [MerchantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
