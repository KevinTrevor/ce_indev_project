import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammingLanguageController } from './programming_language.controller';
import { ProgrammingLanguageService } from './programming_language.service';

describe('ProgrammingLanguageController', () => {
  let controller: ProgrammingLanguageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgrammingLanguageController],
      providers: [ProgrammingLanguageService],
    }).compile();

    controller = module.get<ProgrammingLanguageController>(ProgrammingLanguageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
