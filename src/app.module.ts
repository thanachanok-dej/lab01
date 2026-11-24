import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConverterModule } from './converter/converter.module.js';
import { Converter2Module } from './converter2/converter2.module.js';
import { ShippingModule } from './shipping/shipping.module.js';

@Module({
  imports: [ConverterModule, Converter2Module, ShippingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
