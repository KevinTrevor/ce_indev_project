import { Module } from '@nestjs/common';
import { PackageDetailService } from './package_detail.service';
import { PackageDetailController } from './package_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageDetail } from './entities/package_detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PackageDetail])],
  controllers: [PackageDetailController],
  providers: [PackageDetailService],
})
export class PackageDetailModule {}
