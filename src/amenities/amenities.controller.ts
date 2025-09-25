import { Controller, Get, Post, Delete, Patch } from '@nestjs/common';
import { AmenitiesService } from './amenities.service';
import { Body, Param } from '@nestjs/common';
import { Amenities } from './amenities.entitiy';
@Controller('amenities')
export class AmenitiesController {
  constructor(private readonly amenitiesService: AmenitiesService) {}

  @Get()
  findAll() {
    return this.amenitiesService.findAll();
  }

  @Post()
  create(@Body() data: Partial<Amenities>): Promise<Amenities> {
    return this.amenitiesService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.amenitiesService.remove(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<Amenities>,
  ): Promise<Amenities> {
    return this.amenitiesService.update(+id, data);
  }
}
