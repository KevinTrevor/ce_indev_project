import { Injectable } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bill } from './entities/bill.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(Bill)
    private billsRepository: Repository<Bill>,
  ) {}

  async create(createBillDto: CreateBillDto) {
    const bill = this.billsRepository.create(createBillDto);
    return await this.billsRepository.save(bill);
  }

  async findAll() {
    return await this.billsRepository.find();
  }

  async findOne(id: string) {
    return await this.billsRepository.findOneBy({ id: id });
  }

  async update(id: string, updateBillDto: UpdateBillDto) {
    return await this.billsRepository.update(id, updateBillDto);
  }

  async remove(id: string) {
    return await this.billsRepository.delete({ id: id });
  }
}
