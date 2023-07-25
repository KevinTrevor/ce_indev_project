import { Module } from '@nestjs/common';
import { PackageDetailService } from './package_detail.service';
import { PackageDetailController } from './package_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Detail } from 'src/parent_entity/detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Detail])],
  controllers: [PackageDetailController],
  providers: [PackageDetailService],
})
export class PackageDetailModule {}
