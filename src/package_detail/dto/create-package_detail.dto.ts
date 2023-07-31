import { ApiProperty } from '@nestjs/swagger';
import { Bill } from 'src/bill/entities/bill.entity';
import { Package } from 'src/package/entities/package.entity';

export class CreatePackageDetailDto {
  @ApiProperty({
    type: Number,
    default: 0.0,
  })
  totalPrice: number;

  @ApiProperty({
    type: Array<Package>,
    default: [{ id: '' }],
  })
  packages: Package[];

  @ApiProperty({
    type: Bill,
    default: { id: '' },
    required: true,
  })
  bill: Bill;
}
