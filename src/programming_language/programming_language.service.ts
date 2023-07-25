import { Injectable } from '@nestjs/common';
import { CreateProgrammingLanguageDto } from './dto/create-programming_language.dto';
import { UpdateProgrammingLanguageDto } from './dto/update-programming_language.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgrammingLanguage } from './entities/programming_language.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProgrammingLanguageService {
  constructor(
    @InjectRepository(ProgrammingLanguage)
    private plRepository: Repository<ProgrammingLanguage>,
  ) {}

  async create(createProgrammingLanguageDto: CreateProgrammingLanguageDto) {
    const programmingLanguage = this.plRepository.create(
      createProgrammingLanguageDto,
    );
    return await this.plRepository.save(programmingLanguage);
  }

  async findAll() {
    return await this.plRepository.find();
  }

  async findOne(id: string) {
    return await this.plRepository.findOneBy({ id: id });
  }

  async update(
    id: string,
    updateProgrammingLanguageDto: UpdateProgrammingLanguageDto,
  ) {
    return await this.plRepository.update(id, updateProgrammingLanguageDto);
  }

  async remove(id: string) {
    return await this.plRepository.delete({ id: id });
  }
}
