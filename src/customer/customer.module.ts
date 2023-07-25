import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/parent_entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
