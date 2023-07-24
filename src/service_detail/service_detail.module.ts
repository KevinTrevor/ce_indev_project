import { Module } from '@nestjs/common';
import { ServiceDetailService } from './service_detail.service';
import { ServiceDetailController } from './service_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceDetail } from './entities/service_detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceDetail])],
  controllers: [ServiceDetailController],
  providers: [ServiceDetailService],
})
export class ServiceDetailModule {}
