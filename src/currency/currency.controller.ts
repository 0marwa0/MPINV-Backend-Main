import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CurrencyService } from './currency.service';
@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}
  @Get()
  findAll(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.currencyService.findAll(Number(page) || 1, Number(limit) || 10);
  }

  @Post()
  create(@Body() body: { lable: string; value: string; country: string }) {
    return this.currencyService.create(body);
  }
  @Delete(':id')
  remove(@Body('id') id: number) {
    return this.currencyService.remove(id);
  }

  @Patch(':id')
  update(
    @Body('id') id: number,
    @Body() body: { lable?: string; value?: string; country?: string },
  ) {
    return this.currencyService.update(id, body);
  }
}
