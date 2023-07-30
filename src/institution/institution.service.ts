import { Injectable } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Institution } from './entities/institution.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class InstitutionService {
  constructor(
    @InjectRepository(Institution)
    private institutionsRepository: Repository<Institution>,
  ) {}

  async create(createInstitutionDto: CreateInstitutionDto) {
    const institution =
      this.institutionsRepository.create(createInstitutionDto);
    return await this.institutionsRepository.save(institution);
  }

  async findAll() {
    return await this.institutionsRepository.find();
  }

  async findOne(id: string) {
    const findOptions: FindOneOptions<Institution> = { where: { id: id } };
    return await this.institutionsRepository.findOne(findOptions);
  }

  async update(id: string, updateInstitutionDto: UpdateInstitutionDto) {
    return await this.institutionsRepository.update(id, updateInstitutionDto);
  }

  async remove(id: string) {
    return await this.institutionsRepository.delete({ id: id });
  }
}
