import { Module } from '@nestjs/common';
import { ServiceDetailService } from './service_detail.service';
import { ServiceDetailController } from './service_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Detail } from 'src/parent_entity/detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Detail])],
  controllers: [ServiceDetailController],
  providers: [ServiceDetailService],
})
export class ServiceDetailModule {}
