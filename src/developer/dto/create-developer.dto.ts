import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/category/entities/category.entity';
import { Experience } from 'src/enums/experience.enum';
import { Institution } from 'src/institution/entities/institution.entity';
import { ProgrammingLanguage } from 'src/programming_language/entities/programming_language.entity';

export class CreateDeveloperDto {
  @ApiProperty({
    type: String,
    default: '',
    minimum: 3,
  })
  name: string;

  @ApiProperty({
    type: String,
    default: '',
    minimum: 3,
  })
  lastname: string;

  @ApiProperty({
    type: String,
    default: '',
    minimum: 3,
    required: true,
  })
  username: string;

  @ApiProperty({
    type: String,
    default: '',
    minimum: 8,
    maximum: 16,
    required: true,
  })
  password: string;

  @ApiProperty({
    type: String,
    minimum: 8,
    default: 'someone@example.com',
    required: true,
  })
  email: string;

  @ApiProperty({
    type: String,
    default:
      'https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg',
  })
  image: string;

  @ApiProperty({
    type: String,
    minLength: 20,
    maxLength: 350,
    default:
      'Por favor, escribe una pequeña descripción de ti como profesional.',
  })
  description: string;

  @ApiProperty()
  experience: Experience;

  @ApiProperty({
    type: Array<ProgrammingLanguage>,
    default: [{ name: '' }],
  })
  programmingLanguages: ProgrammingLanguage[];

  @ApiProperty({
    type: Array<Category>,
    default: [{ name: '' }],
  })
  categories: Category[];

  @ApiProperty({
    type: Array<Institution>,
    default: [{ name: '' }],
  })
  studies: Institution[];
}
