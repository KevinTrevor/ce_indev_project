import { Detail } from 'src/parent_entity/detail.entity';
import { Service } from 'src/service/entities/service.entity';
import { ChildEntity, JoinTable, ManyToMany } from 'typeorm';

@ChildEntity()
export class ServiceDetail extends Detail {
  @ManyToMany(() => Service)
  @JoinTable({ name: 'purchased_services' })
  services: Service[];
}
