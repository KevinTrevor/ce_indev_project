import { ApiProperty } from '@nestjs/swagger';

export class CreateBillDto {
  @ApiProperty({
    type: Date,
    required: true,
  })
  purchasedAt: Date;

  @ApiProperty({
    type: Number,
    minimum: 0.0,
    default: 0.0,
  })
  totalPrice: number;
}
