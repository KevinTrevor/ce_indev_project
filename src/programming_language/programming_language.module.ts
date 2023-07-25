import { Module } from '@nestjs/common';
import { ProgrammingLanguageService } from './programming_language.service';
import { ProgrammingLanguageController } from './programming_language.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgrammingLanguage } from './entities/programming_language.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProgrammingLanguage])],
  controllers: [ProgrammingLanguageController],
  providers: [ProgrammingLanguageService],
})
export class ProgrammingLanguageModule {}
