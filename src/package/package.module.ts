import { Module } from '@nestjs/common';
import { PackageService } from './package.service';
import { PackageController } from './package.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/parent_entity/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [PackageController],
  providers: [PackageService],
})
export class PackageModule {}
