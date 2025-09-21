// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './contact/contact.module';
import { BrochureRequestModule } from './brochure-request/brochure-request.module';
import { OffPlanEnquiryModule } from './off-plan-enquiry/off-plan-enquiry.module';
import { AgentModule } from './agent/agent.module';
import { OffPlanProjectModule } from './off-plan-project/off-plan-project.module';
import { DeveloperModule } from './developer/developer.module';
import { CommunityModule } from './community/community.module';
import { JobModule } from './job/job.module';
import { JobApplicationModule } from './job-application/job-application.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SubCommunityController } from './sub-community/sub-community.controller';
import { SubCommunityModule } from './sub-community/sub-community.module';
import { AmenitiesModule } from './amenities/amenities.module';
import { StateModule } from './state/state.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // or your DB host
      port: 3306,
      username: 'root', // your MySQL username
      password: '', // your MySQL password
      database: 'mydb', // your DB name
      autoLoadEntities: true,
      synchronize: true, // auto-creates tables in dev (turn off in production)
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),
    ContactModule,
    BrochureRequestModule,
    OffPlanEnquiryModule,
    OffPlanProjectModule,
    AgentModule,
    DeveloperModule,
    CommunityModule,
    JobModule,
    JobApplicationModule,
    SubCommunityModule,
    AmenitiesModule,
    StateModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
