import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/parent_entity/product.entity';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Service>,
  ) {}

  async create(createServiceDto: CreateServiceDto) {
    const service = this.productsRepository.create(createServiceDto);
    return await this.productsRepository.save(service);
  }

  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne(id: string) {
    return await this.productsRepository.findOneBy({ id: id });
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    return await this.productsRepository.update(id, updateServiceDto);
  }

  async remove(id: string) {
    return await this.productsRepository.delete({ id: id });
  }
}
