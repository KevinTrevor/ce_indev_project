import { Injectable } from '@nestjs/common';
import { CreatePackageDetailDto } from './dto/create-package_detail.dto';
import { UpdatePackageDetailDto } from './dto/update-package_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PackageDetail } from './entities/package_detail.entity';
import { Repository } from 'typeorm';
import { Detail } from 'src/parent_entity/detail.entity';

@Injectable()
export class PackageDetailService {
  constructor(
    @InjectRepository(Detail)
    private detailsRepository: Repository<PackageDetail>,
  ) {}

  async create(createPackageDetailDto: CreatePackageDetailDto) {
    const packageDetail = this.detailsRepository.create(createPackageDetailDto);
    return await this.detailsRepository.save(packageDetail);
  }

  async findAll() {
    return await this.detailsRepository.find();
  }

  async findOne(id: string) {
    return await this.detailsRepository.findOneBy({ id: id });
  }

  async update(id: string, updatePackageDetailDto: UpdatePackageDetailDto) {
    return await this.detailsRepository.update(id, updatePackageDetailDto);
  }

  async remove(id: string) {
    return await this.detailsRepository.delete({ id: id });
  }
}
