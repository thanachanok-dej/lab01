import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Converter2Service } from './converter2.service.js';
import { CreateConverter2Dto } from './dto/create-converter2.dto.js';
import { UpdateConverter2Dto } from './dto/update-converter2.dto.js';

@Controller('converter2')
export class Converter2Controller {
  constructor(private readonly converter2Service: Converter2Service) {}

  @Post()
  create(@Body() createConverter2Dto: CreateConverter2Dto) {
    return this.converter2Service.create(createConverter2Dto);
  }

  @Get()
  findAll() {
    return this.converter2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.converter2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConverter2Dto: UpdateConverter2Dto) {
    return this.converter2Service.update(+id, updateConverter2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.converter2Service.remove(+id);
  }
}
