import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/enums/category.enum';
import { Experience } from 'src/enums/experience.enum';
import { ProgrammingLanguage } from 'src/programming_language/entities/programming_language.entity';

export class CreateDeveloperDto {
  @ApiProperty({
    type: String,
    minimum: 3,
  })
  name: string;

  @ApiProperty({
    type: String,
    minimum: 3,
  })
  lastname: string;

  @ApiProperty({
    type: String,
    minimum: 3,
    required: true,
  })
  username: string;

  @ApiProperty({
    type: String,
    minimum: 8,
    maximum: 16,
    required: true,
  })
  password: string;

  @ApiProperty({
    type: String,
    minimum: 8,
    required: true,
  })
  email: string;

  @ApiProperty({
    type: String,
  })
  image: string;

  @ApiProperty()
  category: Category;

  @ApiProperty()
  experience: Experience;

  @ApiProperty({
    type: Array<ProgrammingLanguage>,
  })
  programmingLanguages: ProgrammingLanguage[];
}
