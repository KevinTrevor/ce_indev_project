import { ApiProperty } from '@nestjs/swagger';

export class CreateProgrammingLanguageDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  name: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  image: string;
}
