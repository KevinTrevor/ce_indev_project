import { Product } from 'src/parent_entity/product.entity';
import { Category } from 'src/enums/category.enum';
import { Column, Entity } from 'typeorm';

@Entity()
export class Service extends Product {
  @Column({
    type: 'enum',
    enum: Category,
  })
  categories: Category;
}
