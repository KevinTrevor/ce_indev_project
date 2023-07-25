import { User } from 'src/parent_entity/user.entity';
import { Category } from 'src/enums/category.enum';
import { ChildEntity, Column } from 'typeorm';
import { Experience } from 'src/enums/experience.enum';

@ChildEntity()
export class Developer extends User {
  @Column({
    type: 'enum',
    enum: Category,
    default: Category.ComputerSecurity,
  })
  category: Category;

  @Column({
    type: 'enum',
    enum: Experience,
    default: Experience.Junior,
  })
  experience: Experience;
}
