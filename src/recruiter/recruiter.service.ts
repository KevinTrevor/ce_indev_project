import { Injectable } from '@nestjs/common';
import { CreateRecruiterDto } from './dto/create-recruiter.dto';
import { UpdateRecruiterDto } from './dto/update-recruiter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recruiter } from './entities/recruiter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecruiterService {
  constructor(
    @InjectRepository(Recruiter)
    private usersRepository: Repository<Recruiter>,
  ) {}

  async create(createRecruiterDto: CreateRecruiterDto) {
    const recruiter = this.usersRepository.create(createRecruiterDto);
    return await this.usersRepository.save(recruiter);
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: string) {
    return await this.usersRepository.findOneBy({ id: id });
  }

  update(id: string, updateRecruiterDto: UpdateRecruiterDto) {
    return this.usersRepository.update(id, updateRecruiterDto);
  }

  remove(id: string) {
    return this.usersRepository.delete({ id: id });
  }
}
