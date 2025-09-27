import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { SubCommunityService } from './sub-community.service';
@Controller('sub-community')
export class SubCommunityController {
  constructor(private readonly service: SubCommunityService) {}
  @Get()
  getAll(
    @Query('community_id') community_id?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    // If community_id is provided, filter by community
    if (community_id) {
      const communityIdNum = Number(community_id);
      if (isNaN(communityIdNum)) {
        throw new Error('Invalid community_id parameter');
      }
      return this.service.findByCommunityId(
        communityIdNum,
        Number(page) || 1,
        Number(limit) || 10,
      );
    }

    // Otherwise return all sub-communities
    return this.service.findAll(Number(page) || 1, Number(limit) || 10);
  }

  @Post()
  create(@Body() body: { name: string; community_id: number }) {
    return this.service.create(body);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { name?: string; community_id?: number },
  ) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
