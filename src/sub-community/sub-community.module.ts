import { Module } from '@nestjs/common';
import { SubCommunityService } from './sub-community.service';
import { SubCommunityController } from './sub-community.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCommunity } from './sub-community.entity';
@Module({
  imports: [TypeOrmModule.forFeature([SubCommunity])],
  providers: [SubCommunityService],
  controllers: [SubCommunityController],
})
export class SubCommunityModule {}
