import { User } from 'src/embedded/user.class';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity()
export class Recruiter extends User {
  @Column({
    type: 'boolean',
    default: false,
  })
  isAdmin: boolean;
}
