import { Controller } from '@nestjs/common';
import { Get, Put, Body, Param } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { Settings } from './settings.entity';
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  async findAll(): Promise<Settings[]> {
    return this.settingsService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateData: Partial<Settings>,
  ): Promise<Settings> {
    return this.settingsService.update(id, updateData);
  }
}
