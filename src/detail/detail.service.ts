import { Injectable } from '@nestjs/common';
import { CreateDetailDto } from './dto/create-detail.dto';
import { UpdateDetailDto } from './dto/update-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Detail } from './entities/detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetailService {
  constructor(
    @InjectRepository(Detail)
    private detailsRepository: Repository<Detail>,
  ) {}

  create(createDetailDto: CreateDetailDto) {
    return 'This action adds a new detail';
  }

  findAll() {
    return `This action returns all detail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detail`;
  }

  update(id: number, updateDetailDto: UpdateDetailDto) {
    return `This action updates a #${id} detail`;
  }

  remove(id: number) {
    return `This action removes a #${id} detail`;
  }
}
