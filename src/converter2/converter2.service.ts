import { Injectable } from '@nestjs/common';
import { CreateConverter2Dto } from './dto/create-converter2.dto.js';
import { UpdateConverter2Dto } from './dto/update-converter2.dto.js';

@Injectable()
export class Converter2Service {
  create(createConverter2Dto: CreateConverter2Dto) {
    return 'This action adds a new converter2';
  }

  findAll() {
    return `This action returns all converter2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} converter2`;
  }

  update(id: number, updateConverter2Dto: UpdateConverter2Dto) {
    return `This action updates a #${id} converter2`;
  }

  remove(id: number) {
    return `This action removes a #${id} converter2`;
  }
}
