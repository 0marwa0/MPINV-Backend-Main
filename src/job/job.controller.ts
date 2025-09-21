import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { JobService } from './job.service';
@Controller('job')
export class JobController {
  constructor(private readonly service: JobService) {}

  @Get()
  getAll(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.service.findAll(Number(page) || 1, Number(limit) || 10);
  }

  @Post()
  create(
    @Body()
    body: {
      jobTitle: string;
      description: string;
      country: string;
      state: string;
      status: string;
    },
  ) {
    return this.service.create(body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
