import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import { merchants } from './merchants.data';

@Injectable()
export class MerchantsService {
  create(createMerchantDto: CreateMerchantDto) {
    
  }

  findAll() {
    return merchants;
  }

  findOne(id: number) {
    return merchants.find((merchant) => merchant.id === id);
  }

  update(id: number, updateMerchantDto: UpdateMerchantDto) {
    const merchant = merchants.find((merchant) => merchant.id === id);
    if (!merchant) {
      throw new NotFoundException(`Merchant #${id} not found`);
    }
    Object.assign(merchant, updateMerchantDto);
    return merchant;
  }

  remove(id: number) {
    return `This action removes a #${id} merchant`;
  }
}
