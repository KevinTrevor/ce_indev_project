import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
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
    const findOptions: FindOneOptions<Service> = {
      where: { id: id },
      relations: { categories: true },
    };
    return await this.productsRepository.findOne(findOptions);
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    return await this.productsRepository.update(id, updateServiceDto);
  }

  async remove(id: string) {
    return await this.productsRepository.delete({ id: id });
  }
}
