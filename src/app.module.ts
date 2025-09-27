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
import { SettingsController } from './settings/settings.controller';
import { SettingsService } from './settings/settings.service';
import { SettingsModule } from './settings/settings.module';
import { CurrencyModule } from './currency/currency.module';
import { CategoryModule } from './category/category.module';
import { ListedPropertyController } from './listed_property/listed_property.controller';
import { ListedPropertyModule } from './listed_property/listed_property.module';
import { ArticalsService } from './articals/articals.service';
import { ArticalsController } from './articals/articals.controller';
import { ArticalsModule } from './articals/articals.module';
import { PartnersModule } from './partners/partners.module';
import { TrustedBrandsService } from './trusted-brands/trusted-brands.service';
import { TrustedBrandsController } from './trusted-brands/trusted-brands.controller';
import { TrustedBrandsModule } from './trusted-brands/trusted-brands.module';
import { FaqModule } from './faq/faq.module';
import { SubCommunityService } from './sub-community/sub-community.service';
import { ComponenyMembersService } from './componeny-members/componeny-members.service';
import { ComponenyMembersController } from './componeny-members/componeny-members.controller';
import { ComponenyMembersModule } from './componeny-members/componeny-members.module';
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
    // SettingsModule,
    CurrencyModule,
    CategoryModule,
    ListedPropertyModule,
    ArticalsModule,
    PartnersModule,
    TrustedBrandsModule,
    FaqModule,
    ComponenyMembersModule,
  ],
  providers: [ArticalsService, ArticalsService, TrustedBrandsService, ComponenyMembersService],
  controllers: [
    ArticalsController,
    ListedPropertyController,
    TrustedBrandsController,
    ComponenyMembersController,
  ],
})
export class AppModule {}
