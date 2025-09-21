import { Module } from '@nestjs/common';
import { BrochureRequestController } from './brochure-request.controller';
import { BrochureRequestService } from './brochure-request.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrochureRequest } from './brochure.entity';
@Module({
  imports: [TypeOrmModule.forFeature([BrochureRequest])],
  controllers: [BrochureRequestController],
  providers: [BrochureRequestService],
})
export class BrochureRequestModule {}
