import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { FaqService } from './faq.service';
import { Faq } from './faq.entity';
@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @Get()
  findAll() {
    return this.faqService.findAll();
  }

  @Post()
  create(@Body() body: Partial<Faq>) {
    return this.faqService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: Partial<Faq>) {
    return this.faqService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.faqService.delete(id);
  }
}
