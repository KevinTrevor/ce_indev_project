import { Category } from 'src/category/entities/category.entity';
import { Product } from 'src/parent_entity/product.entity';
import { Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Service extends Product {
  @ManyToMany(() => Category)
  @JoinTable({ name: 'service_categories' })
  categories: Category[];
}
