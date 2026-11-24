import { Module } from '@nestjs/common';
import { Converter2Service } from './converter2.service.js';
import { Converter2Controller } from './converter2.controller.js';

@Module({
  controllers: [Converter2Controller],
  providers: [Converter2Service],
})
export class Converter2Module {}
