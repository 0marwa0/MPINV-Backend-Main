import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { Developer } from './developer.entities';
import { DeveloperService } from './developer.service';
import { DeveloperController } from './developer.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Developer]),
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          const uploadPath = join(process.cwd(), 'uploads', 'ads');
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath, { recursive: true });
          }
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const safe = file.originalname.replace(/\s+/g, '_');
          cb(null, `${Date.now()}-${safe}`);
        },
      }),
    }),
  ],
  providers: [DeveloperService],
  controllers: [DeveloperController],
})
export class DeveloperModule {}
