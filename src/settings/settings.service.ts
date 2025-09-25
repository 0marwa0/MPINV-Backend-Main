import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Settings } from './settings.entity';
@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Settings)
    private settingsRepository: Repository<Settings>,
  ) {}

  async findAll(): Promise<Settings[]> {
    return this.settingsRepository.find();
  }
  async update(id: number, updateData: Partial<Settings>): Promise<Settings> {
    const setting = await this.settingsRepository.findOne({ where: { id } });
    if (!setting) {
      throw new Error(`Settings with ID ${id} not found`);
    }

    Object.assign(setting, updateData);
    await this.settingsRepository.save(setting);
    return setting;
  }
}
