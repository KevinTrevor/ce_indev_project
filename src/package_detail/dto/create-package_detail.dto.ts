import { ApiProperty } from '@nestjs/swagger';
import { Package } from 'src/package/entities/package.entity';

export class CreatePackageDetailDto {
  @ApiProperty({
    type: Number,
    default: 0.0,
  })
  totalPrice: number;

  @ApiProperty({
    type: Array<Package>,
  })
  packages: Package[];
}
