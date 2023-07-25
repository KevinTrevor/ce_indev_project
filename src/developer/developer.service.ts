import { Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/parent_entity/user.entity';
import { Developer } from './entities/developer.entity';

@Injectable()
export class DeveloperService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<Developer>,
  ) {}

  async create(createDeveloperDto: CreateDeveloperDto) {
    const developer = this.usersRepository.create(createDeveloperDto);
    return await this.usersRepository.save(developer);
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: string) {
    return await this.usersRepository.findOneBy({ id: id });
  }

  async update(id: string, updateDeveloperDto: UpdateDeveloperDto) {
    return await this.usersRepository.update(id, updateDeveloperDto);
  }

  async remove(id: string) {
    return await this.usersRepository.delete(id);
  }
}
