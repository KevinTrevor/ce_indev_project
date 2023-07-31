import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('developers')
@Controller('developer')
export class DeveloperController {
  constructor(private readonly developerService: DeveloperService) {}

  @Post()
  create(@Body() createDeveloperDto: CreateDeveloperDto) {
    return this.developerService.create(createDeveloperDto);
  }
  /*
  @Get()
  findAll() {
    return this.developerService.findAll();
  }
  */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.developerService.findOne(id);
  }

  @Get()
  findWithFilters(@Query() queryParams) {
    return this.developerService.findWithFilters(queryParams);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeveloperDto: UpdateDeveloperDto,
  ) {
    return this.developerService.update(id, updateDeveloperDto);
  }

  @Put(':developerId/category/:categoryId')
  addCategory(
    @Param('userId') userId: string,
    @Param('categoryId') categoryId: string,
  ) {
    return this.developerService.addCategory(userId, categoryId);
  }

  @Put(':developerId/programming_language/:languageId')
  addLanguage(
    @Param('userId') userId: string,
    @Param('languageId') languageId: string,
  ) {
    return this.developerService.addLanguage(userId, languageId);
  }

  @Put(':developerId/institution/:institutionId')
  addInstitution(
    @Param('userId') userId: string,
    @Param('institutionId') institutionId: string,
  ) {
    return this.developerService.addLanguage(userId, institutionId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.developerService.remove(id);
  }
}
