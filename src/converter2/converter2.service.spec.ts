import { Test, TestingModule } from '@nestjs/testing';
import { Converter2Service } from './converter2.service.js';

describe('Converter2Service', () => {
  let service: Converter2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Converter2Service],
    }).compile();

    service = module.get<Converter2Service>(Converter2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
