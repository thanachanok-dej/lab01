import { Test, TestingModule } from '@nestjs/testing';
import { Converter2Controller } from './converter2.controller.js';
import { Converter2Service } from './converter2.service.js';

describe('Converter2Controller', () => {
  let controller: Converter2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Converter2Controller],
      providers: [Converter2Service],
    }).compile();

    controller = module.get<Converter2Controller>(Converter2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
