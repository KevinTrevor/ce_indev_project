import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProgrammingLanguageService } from './programming_language.service';
import { CreateProgrammingLanguageDto } from './dto/create-programming_language.dto';
import { UpdateProgrammingLanguageDto } from './dto/update-programming_language.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('programming_languages')
@Controller('programming-language')
export class ProgrammingLanguageController {
  constructor(
    private readonly programmingLanguageService: ProgrammingLanguageService,
  ) {}

  @Post()
  create(@Body() createProgrammingLanguageDto: CreateProgrammingLanguageDto) {
    return this.programmingLanguageService.create(createProgrammingLanguageDto);
  }

  @Get()
  findAll() {
    return this.programmingLanguageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programmingLanguageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProgrammingLanguageDto: UpdateProgrammingLanguageDto,
  ) {
    return this.programmingLanguageService.update(
      id,
      updateProgrammingLanguageDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programmingLanguageService.remove(id);
  }
}
