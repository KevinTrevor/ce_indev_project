import { Package } from 'src/package/entities/package.entity';
import { Detail } from 'src/parent_entity/detail.entity';
import { ChildEntity, JoinTable, ManyToMany } from 'typeorm';

@ChildEntity()
export class PackageDetail extends Detail {
  @ManyToMany(() => Package)
  @JoinTable({ name: 'purchased_packages' })
  packages: Package[];
}
