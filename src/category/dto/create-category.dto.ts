import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    type: String,
    default: '',
    required: true,
  })
  name: string;
}
