import config from 'src/config/index.config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillModule } from './bill/bill.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { ServiceModule } from './service/service.module';
import { PackageModule } from './package/package.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DBConfig } from './config/db.config';
import { DeveloperModule } from './developer/developer.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { CustomerModule } from './customer/customer.module';
import { PackageDetailModule } from './package_detail/package_detail.module';
import { ServiceDetailModule } from './service_detail/service_detail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DBConfig,
    }),
    BillModule,
    ChatModule,
    MessageModule,
    ServiceModule,
    PackageModule,
    DeveloperModule,
    RecruiterModule,
    CustomerModule,
    PackageDetailModule,
    ServiceDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
