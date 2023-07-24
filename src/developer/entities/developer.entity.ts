import { User } from 'src/parent_entity/user.entity';
import { Category } from 'src/enums/category.enum';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity()
export class Developer extends User {
  @Column({
    type: 'enum',
    enum: Category,
    default: Category.ComputerSecurity,
  })
  category: Category;
}
