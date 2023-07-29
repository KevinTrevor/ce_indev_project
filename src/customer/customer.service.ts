import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { User } from 'src/parent_entity/user.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = this.customersRepository.create(createCustomerDto);
    return await this.customersRepository.save(customer);
  }

  async findAll() {
    return await this.customersRepository.find();
  }

  async findOne(id: string) {
    const findOptions: FindOneOptions<Customer> = {
      where: { id: id },
      relations: {
        packages: true,
        services: true,
      },
    };
    return await this.customersRepository.findOne(findOptions);
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return await this.customersRepository.update(id, updateCustomerDto);
  }

  async remove(id: string) {
    return await this.customersRepository.delete({ id: id });
  }
}
