import { ApiProperty } from '@nestjs/swagger';
import { Package } from 'src/package/entities/package.entity';
import { Service } from 'src/service/entities/service.entity';

export class CreateCustomerDto {
  @ApiProperty({
    type: String,
    minimum: 3,
  })
  name: string;

  @ApiProperty({
    type: String,
    minimum: 3,
  })
  lastname: string;

  @ApiProperty({
    type: String,
    minimum: 8,
    required: true,
  })
  username: string;

  @ApiProperty({
    type: String,
    minimum: 8,
    maximum: 16,
    required: true,
  })
  password: string;

  @ApiProperty({
    type: String,
    minimum: 8,
    required: true,
  })
  email: string;

  @ApiProperty({
    type: String,
  })
  image: string;

  @ApiProperty({
    type: Array<Package>,
  })
  packages: Package[];

  @ApiProperty({
    type: Array<Service>,
  })
  services: Service[];
}
