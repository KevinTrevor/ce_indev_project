import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoriesRepository.create(createCategoryDto);
    return await this.categoriesRepository.save(category);
  }

  async findAll() {
    return await this.categoriesRepository.find();
  }

  async findOne(id: string) {
    const findOptions: FindOneOptions = { where: { id: id } };
    return await this.categoriesRepository.findOne(findOptions);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoriesRepository.update(id, updateCategoryDto);
  }

  async remove(id: string) {
    return await this.categoriesRepository.delete({ id: id });
  }
}
