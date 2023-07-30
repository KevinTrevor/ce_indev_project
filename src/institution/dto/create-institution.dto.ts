import { ApiProperty } from '@nestjs/swagger';

export class CreateInstitutionDto {
  @ApiProperty({
    type: String,
    default: '',
  })
  name: string;
}
