import { Module } from '@nestjs/common';
import { AmenitiesController } from './amenities.controller';
import { AmenitiesService } from './amenities.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amenities } from './amenities.entitiy';

@Module({
  imports: [TypeOrmModule.forFeature([Amenities])],
  controllers: [AmenitiesController],
  providers: [AmenitiesService],
})
export class AmenitiesModule {}
