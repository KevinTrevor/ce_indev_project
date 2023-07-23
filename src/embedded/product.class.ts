import { Column } from 'typeorm';

export class Product {
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
    type: 'float',
    default: 0.0,
  })
  discount: number;
}