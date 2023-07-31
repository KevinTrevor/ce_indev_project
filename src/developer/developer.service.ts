import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { Developer } from './entities/developer.entity';
import { Category } from 'src/category/entities/category.entity';
import { ProgrammingLanguage } from 'src/programming_language/entities/programming_language.entity';
import { Institution } from 'src/institution/entities/institution.entity';

@Injectable()
export class DeveloperService {
  constructor(
    @InjectRepository(Developer)
    private usersRepository: Repository<Developer>,
  ) {}

  async create(createDeveloperDto: CreateDeveloperDto) {
    const developer = this.usersRepository.create(createDeveloperDto);
    return await this.usersRepository.save(developer);
  }

  async findWithFilters(queryParams) {
    const findOptions: FindManyOptions = {
      relations: {
        programmingLanguages: true,
        studies: true,
        categories: true,
      },
    };

    if (queryParams.category) {
      findOptions.where = {
        ...findOptions.where,
        category: { name: queryParams.category },
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
        studies: true,
        categories: true,
      },
    };
    return await this.usersRepository.findOne(findOptions);
  }

  async addCategory(userId: string, categoryId: string) {
    const category = new Category();
    category.id = categoryId;

    const user = await this.findOne(userId);
    if (user === null) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    user.categories.push(category);

    return this.usersRepository.save(user);
  }

  async addLanguage(userId: string, languageId: string) {
    const programmingLanguage = new ProgrammingLanguage();
    programmingLanguage.id = languageId;

    const user = await this.findOne(userId);
    if (user === null) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    user.programmingLanguages.push(programmingLanguage);

    return this.usersRepository.save(user);
  }

  async addInstitution(userId: string, institutionId: string) {
    const institution = new Institution();
    institution.id = institutionId;

    const user = await this.findOne(userId);
    if (user === null) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    user.studies.push(institution);

    return this.usersRepository.save(user);
  }

  async update(id: string, updateDeveloperDto: UpdateDeveloperDto) {
    return await this.usersRepository.update(id, updateDeveloperDto);
  }

  async remove(id: string) {
    return await this.usersRepository.delete(id);
  }
}
