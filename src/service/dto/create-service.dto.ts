import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/category/entities/category.entity';

export class CreateServiceDto {
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

  @ApiProperty({
    type: Array<Category>,
    default: [{ name: '' }],
  })
  categories: Category[];
}
