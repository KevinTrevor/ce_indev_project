import { Product } from 'src/embedded/product.class';
import { Service } from 'src/service/entities/service.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Package {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(() => Product)
  product: Product;

  @Column({
    type: 'varchar',
  })
  image: string;

  @ManyToMany(() => Service)
  @JoinTable({ name: 'included_services' })
  services: Service[];
}
