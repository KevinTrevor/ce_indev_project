import { ApiProperty } from '@nestjs/swagger';

export class CreateDetailDto {
  @ApiProperty({
    type: Number,
  })
  id: number;

  @ApiProperty({
    type: Number,
    minimum: 0.0,
    default: 0.0,
  })
  totalPrice: number;
}
