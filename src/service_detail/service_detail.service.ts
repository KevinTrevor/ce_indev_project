import { Injectable } from '@nestjs/common';
import { CreateServiceDetailDto } from './dto/create-service_detail.dto';
import { UpdateServiceDetailDto } from './dto/update-service_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceDetail } from './entities/service_detail.entity';
import { Repository } from 'typeorm';
import { Detail } from 'src/parent_entity/detail.entity';

@Injectable()
export class ServiceDetailService {
  constructor(
    @InjectRepository(Detail)
    private detailsRepository: Repository<ServiceDetail>,
  ) {}

  async create(createServiceDetailDto: CreateServiceDetailDto) {
    const serviceDetail = this.detailsRepository.create(createServiceDetailDto);
    return await this.detailsRepository.save(serviceDetail);
  }

  async findAll() {
    return await this.detailsRepository.find();
  }

  async findOne(id: string) {
    return await this.detailsRepository.findOneBy({ id: id });
  }

  async update(id: string, updateServiceDetailDto: UpdateServiceDetailDto) {
    return await this.detailsRepository.update(id, updateServiceDetailDto);
  }

  async remove(id: string) {
    return await this.detailsRepository.delete({ id: id });
  }
}
