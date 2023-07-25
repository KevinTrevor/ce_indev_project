import { Injectable } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Package } from './entities/package.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/parent_entity/product.entity';

@Injectable()
export class PackageService {
  constructor(
    @InjectRepository(Product)
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
    return await this.productsRepository.findOneBy({ id: id });
  }

  async update(id: string, updatePackageDto: UpdatePackageDto) {
    return await this.productsRepository.update(id, updatePackageDto);
  }

  async remove(id: string) {
    return await this.productsRepository.delete({ id: id });
  }
}
