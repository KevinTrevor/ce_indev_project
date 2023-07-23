import { Product } from 'src/embedded/product.class';
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
