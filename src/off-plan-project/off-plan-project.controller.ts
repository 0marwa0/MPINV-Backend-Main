import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { OffPlanProjectService } from './off-plan-project.service';
import { OffPlanProject } from './off-plan-project.entity';

@Controller('off_plan_projects')
export class OffPlanProjectController {
  constructor(private readonly service: OffPlanProjectService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'bg_img', maxCount: 1 },
      { name: 'bg_img_mobile', maxCount: 1 },
      { name: 'right_side_image', maxCount: 1 },
      { name: 'location_image', maxCount: 1 },
      { name: 'payment_pdf', maxCount: 1 },
      { name: 'types_pdf', maxCount: 1 },
      { name: 'broucher', maxCount: 1 },
      { name: 'gallery', maxCount: 20 },
    ]),
  )
  create(@UploadedFiles() files: any, @Body() body: any) {
    // Handle JSON arrays if provided as JSON strings
    if (Array.isArray(body.project_highlights)) {
      body.project_highlights = JSON.stringify(body.project_highlights);
    }
    if (Array.isArray(body.property_details)) {
      body.property_details = JSON.stringify(body.property_details);
    }

    // File mappings
    const base = 'uploads/off_plan_projects';
    const firstPath = (x?: any[]) =>
      x?.[0] ? `${base}/${x[0].filename}` : undefined;

    const gallery = files?.gallery as any[] | undefined;
    if (gallery?.length) {
      body.gallery_images = JSON.stringify(
        gallery.map((g) => `${base}/${g.filename}`),
      );
    }

    const mappings: Record<string, string | undefined> = {
      bg_img: firstPath(files?.bg_img),
      bg_img_mobile: firstPath(files?.bg_img_mobile),
      right_side_image: firstPath(files?.right_side_image),
      location_image: firstPath(files?.location_image),
      payment_pdf: firstPath(files?.payment_pdf),
      types_pdf: firstPath(files?.types_pdf),
      broucher: firstPath(files?.broucher),
    };
    for (const [key, val] of Object.entries(mappings)) {
      if (val) (body as any)[key] = val;
    }

    return this.service.create(body as Partial<OffPlanProject>);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'bg_img', maxCount: 1 },
      { name: 'bg_img_mobile', maxCount: 1 },
      { name: 'right_side_image', maxCount: 1 },
      { name: 'location_image', maxCount: 1 },
      { name: 'payment_pdf', maxCount: 1 },
      { name: 'types_pdf', maxCount: 1 },
      { name: 'broucher', maxCount: 1 },
      { name: 'gallery', maxCount: 20 },
    ]),
  )
  update(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFiles() files: any,
    @Body() body: any,
  ) {
    if (typeof body.project_highlights !== 'undefined') {
      if (Array.isArray(body.project_highlights)) {
        body.project_highlights = JSON.stringify(body.project_highlights);
      }
    }
    if (typeof body.property_details !== 'undefined') {
      if (Array.isArray(body.property_details)) {
        body.property_details = JSON.stringify(body.property_details);
      }
    }

    const base = 'uploads/off_plan_projects';
    const firstPath = (x?: any[]) =>
      x?.[0] ? `${base}/${x[0].filename}` : undefined;
    const gallery = files?.gallery as any[] | undefined;
    if (gallery?.length) {
      body.gallery_images = JSON.stringify(
        gallery.map((g) => `${base}/${g.filename}`),
      );
    }
    const mappings: Record<string, string | undefined> = {
      bg_img: firstPath(files?.bg_img),
      bg_img_mobile: firstPath(files?.bg_img_mobile),
      right_side_image: firstPath(files?.right_side_image),
      location_image: firstPath(files?.location_image),
      payment_pdf: firstPath(files?.payment_pdf),
      types_pdf: firstPath(files?.types_pdf),
      broucher: firstPath(files?.broucher),
    };
    for (const [key, val] of Object.entries(mappings)) {
      if (val) (body as any)[key] = val;
    }

    return this.service.update(id, body as Partial<OffPlanProject>);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
