import { Injectable } from '@nestjs/common';
import { CreateServiceDetailDto } from './dto/create-service_detail.dto';
import { UpdateServiceDetailDto } from './dto/update-service_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceDetail } from './entities/service_detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceDetailService {
  constructor(
    @InjectRepository(ServiceDetail)
    private servicesDetailsRepository: Repository<ServiceDetail>,
  ) {}

  create(createServiceDetailDto: CreateServiceDetailDto) {
    return 'This action adds a new serviceDetail';
  }

  findAll() {
    return `This action returns all serviceDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceDetail`;
  }

  update(id: number, updateServiceDetailDto: UpdateServiceDetailDto) {
    return `This action updates a #${id} serviceDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceDetail`;
  }
}
