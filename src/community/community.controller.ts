import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CommunityService } from './community.service';

@Controller('community')
export class CommunityController {
  constructor(private readonly service: CommunityService) {}

  @Get()
  getAll(
    @Query('state_id') state_id?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    console.log('Received state_id:', state_id);
    console.log('Type of state_id:', typeof state_id);

    // If state_id is provided, filter by state
    if (state_id && state_id.trim() !== '') {
      const stateIdNum = Number(state_id);
      console.log('Parsed state_id as number:', stateIdNum);

      if (isNaN(stateIdNum)) {
        throw new Error('Invalid state_id parameter');
      }

      console.log('Calling findByStateId with:', stateIdNum);
      return this.service.findByStateId(
        stateIdNum,
        Number(page) || 1,
        Number(limit) || 10,
      );
    }

    console.log('No valid state_id provided, returning all communities');
    // Otherwise return all communities
    return this.service.findAll(Number(page) || 1, Number(limit) || 10);
  }

  @Post()
  @UseInterceptors(FileInterceptor('logo'))
  create(
    @UploadedFile() file: any,
    @Body() body: { name: string; state_id?: number },
  ) {
    const payload: { name: string; logo?: string; state_id?: number } = {
      name: body.name,
      state_id: body.state_id,
    };
    if (file?.filename) payload.logo = `uploads/ads/${file.filename}`;
    return this.service.create(payload);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('logo'))
  update(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
  ) {
    const payload: { name?: string; logo?: string; state_id?: number } = {};
    if (body.name) payload.name = body.name;
    if (body.state_id) {
      const parsed = Number(body.state_id);
      if (!isNaN(parsed)) payload.state_id = parsed;
    }
    if (file?.filename) {
      payload.logo = `uploads/ads/${file.filename}`;
    }
    return this.service.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
