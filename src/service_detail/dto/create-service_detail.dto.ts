import { ApiProperty } from '@nestjs/swagger';
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
}
