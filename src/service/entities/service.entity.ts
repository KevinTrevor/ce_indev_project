import { Product } from 'src/parent_entity/product.entity';
import { Category } from 'src/enums/category.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(() => Product)
  product: Product;

  @Column({
    type: 'enum',
    enum: Category,
  })
  categories: Category;
}
