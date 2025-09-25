import { Module } from '@nestjs/common';
import { ListedPropertyController } from './listed_property.controller';
import { ListedPropertyService } from './listed_property.service';

@Module({
  controllers: [ListedPropertyController],
  providers: [ListedPropertyService]
})
export class ListedPropertyModule {}
