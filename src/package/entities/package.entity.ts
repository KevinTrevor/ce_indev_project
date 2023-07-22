import { Category } from 'src/enums/category.enum';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Package {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'double',
    default: 0.0,
  })
  price: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'enum',
    enum: Category,
  })
  categories: Category;
}
