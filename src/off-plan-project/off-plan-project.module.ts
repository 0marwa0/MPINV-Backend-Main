import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { OffPlanProjectController } from './off-plan-project.controller';
import { OffPlanProjectService } from './off-plan-project.service';
import { OffPlanProject } from './off-plan-project.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OffPlanProject]),
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          const uploadPath = join(
            process.cwd(),
            'uploads',
            'off_plan_projects',
          );
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath, { recursive: true });
          }
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const name = file.originalname.replace(/\s+/g, '_');
          const timestamp = Date.now();
          const unique = `${timestamp}-${name}`;
          cb(null, unique);
        },
      }),
    }),
  ],
  controllers: [OffPlanProjectController],
  providers: [OffPlanProjectService],
})
export class OffPlanProjectModule {}
