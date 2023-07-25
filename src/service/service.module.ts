import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/parent_entity/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
