import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MerchantsService } from './merchants.service';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import { ValidateUpdateMerchantPipe } from './pipes/update-merchant.pipe';

@Controller('merchants')
export class MerchantsController {
  constructor(private readonly merchantsService: MerchantsService) {}

  @Post()
  create(@Body() createMerchantDto: CreateMerchantDto) {
    return this.merchantsService.create(createMerchantDto);
  }

  @Get()
  findAll() {
    return this.merchantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.merchantsService.findOne(+id);
  }

  @Get('email/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.merchantsService.findAll().find((merchant) => merchant.email === email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(ValidateUpdateMerchantPipe) updateMerchantDto: UpdateMerchantDto) {
  
    return this.merchantsService.update(+id, updateMerchantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.merchantsService.remove(+id);
  }
}
