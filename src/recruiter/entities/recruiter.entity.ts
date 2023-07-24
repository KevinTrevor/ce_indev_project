import { User } from 'src/parent_entity/user.entity';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity()
export class Recruiter extends User {
  @Column({
    type: 'boolean',
    default: false,
  })
  isAdmin: boolean;
}
