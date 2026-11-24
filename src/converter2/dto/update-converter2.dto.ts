import { PartialType } from '@nestjs/mapped-types';
import { CreateConverter2Dto } from './create-converter2.dto.js';

export class UpdateConverter2Dto extends PartialType(CreateConverter2Dto) {}
