import { Product } from 'src/parent_entity/product.entity';
import { Service } from 'src/service/entities/service.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Package extends Product {
  @Column({
    type: 'varchar',
  })
  image: string;

  @ManyToMany(() => Service)
  @JoinTable({ name: 'included_services' })
  services: Service[];
}
