import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DeveloperService } from './developer.service';

@Controller('developer')
export class DeveloperController {
  constructor(private readonly service: DeveloperService) {}

  @Get()
  getAll(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.service.findAll(Number(page) || 1, Number(limit) || 10);
  }

  @Post()
  @UseInterceptors(FileInterceptor('logo'))
  create(
    @UploadedFile() file: any,
    @Body() body: { name: string },
  ) {
    const payload: { name: string; logo?: string } = { name: body.name };
    if (file?.filename) payload.logo = `uploads/ads/${file.filename}`;
    return this.service.create(payload);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('logo'))
  update(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: any,
    @Body() body: { name?: string },
  ) {
    const payload: { name?: string; logo?: string } = {};
    if (typeof body.name !== 'undefined') payload.name = body.name;
    if (file?.filename) payload.logo = `uploads/ads/${file.filename}`;
    return this.service.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
