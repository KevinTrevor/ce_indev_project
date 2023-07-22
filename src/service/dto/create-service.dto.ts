import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/enums/category.enum';

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
    enum: Category,
  })
  categories: Category;
}
