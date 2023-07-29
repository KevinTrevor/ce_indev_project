import { Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
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

  async findWithFilters(queryParams) {
    const findOptions: FindManyOptions<Developer> = {};

    if (queryParams.category) {
      findOptions.where = {
        ...findOptions.where,
        category: queryParams.category,
      };
    }

    if (queryParams.experience) {
      findOptions.where = {
        ...findOptions.where,
        experience: queryParams.experience,
      };
    }

    if (queryParams.programmingLanguage) {
      findOptions.where = {
        ...findOptions.where,
        programmingLanguages: { name: queryParams.programmingLanguage },
      };
    }
    return await this.usersRepository.find(findOptions);
  }

  async findOne(id: string) {
    const findOptions: FindOneOptions<Developer> = {
      where: { id: id },
      relations: {
        programmingLanguages: true,
      },
    };
    return await this.usersRepository.findOne(findOptions);
  }

  async update(id: string, updateDeveloperDto: UpdateDeveloperDto) {
    return await this.usersRepository.update(id, updateDeveloperDto);
  }

  async remove(id: string) {
    return await this.usersRepository.delete(id);
  }
}
