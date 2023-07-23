import { User } from 'src/embedded/user.class';
import { Package } from 'src/package/entities/package.entity';
import { Service } from 'src/service/entities/service.entity';
import { ChildEntity, JoinTable, ManyToMany } from 'typeorm';

@ChildEntity()
export class Customer extends User {
  @ManyToMany(() => Service)
  @JoinTable({ name: 'contrated_services' })
  services: Service[];

  @ManyToMany(() => Package)
  @JoinTable({ name: 'contrated_packages' })
  packages: Package[];
}
