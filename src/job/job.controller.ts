import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Delete,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { JobService } from './job.service';
import { Job } from './job.entities';
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
      location: string;
      jobLink: string;
      status: string;
    },
  ) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Job>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
