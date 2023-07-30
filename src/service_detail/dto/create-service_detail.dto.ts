import { ApiProperty } from '@nestjs/swagger';
import { Bill } from 'src/bill/entities/bill.entity';
import { Service } from 'src/service/entities/service.entity';

export class CreateServiceDetailDto {
  @ApiProperty({
    type: Number,
    default: 0.0,
  })
  totalPrice: number;

  @ApiProperty({
    type: Array<Service>,
  })
  services: Service[];

  @ApiProperty({
    type: Bill,
    default: { id: '' },
    required: true,
  })
  bill: Bill;
}
