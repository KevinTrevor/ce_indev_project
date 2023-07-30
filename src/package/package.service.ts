import { Injectable } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Package } from './entities/package.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class PackageService {
  constructor(
    @InjectRepository(Package)
    private productsRepository: Repository<Package>,
  ) {}

  async create(createPackageDto: CreatePackageDto) {
    const pack = this.productsRepository.create(createPackageDto);
    return await this.productsRepository.save(pack);
  }

  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne(id: string) {
    const findOptions: FindOneOptions<Package> = {
      where: { id: id },
      relations: { services: true },
    };
    return await this.productsRepository.findOne(findOptions);
  }

  async update(id: string, updatePackageDto: UpdatePackageDto) {
    return await this.productsRepository.update(id, updatePackageDto);
  }

  async remove(id: string) {
    return await this.productsRepository.delete({ id: id });
  }
}
