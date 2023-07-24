import { Injectable } from '@nestjs/common';
import { CreatePackageDetailDto } from './dto/create-package_detail.dto';
import { UpdatePackageDetailDto } from './dto/update-package_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PackageDetail } from './entities/package_detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PackageDetailService {
  constructor(
    @InjectRepository(PackageDetail)
    private packageDetailsRepository: Repository<PackageDetail>,
  ) {}

  create(createPackageDetailDto: CreatePackageDetailDto) {
    return 'This action adds a new packageDetail';
  }

  findAll() {
    return `This action returns all packageDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} packageDetail`;
  }

  update(id: number, updatePackageDetailDto: UpdatePackageDetailDto) {
    return `This action updates a #${id} packageDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} packageDetail`;
  }
}
