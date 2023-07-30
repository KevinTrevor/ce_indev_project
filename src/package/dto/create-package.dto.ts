import { ApiProperty } from '@nestjs/swagger';

export class CreatePackageDto {
  @ApiProperty({
    type: Number,
    required: true,
    minimum: 0.0,
    default: 150.0,
  })
  price: number;

  @ApiProperty({
    type: String,
    required: true,
    default: 'Nombre de servicio',
  })
  name: string;
}
