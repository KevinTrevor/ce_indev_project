import { User } from 'src/parent_entity/user.entity';
import { Category } from 'src/enums/category.enum';
import { ChildEntity, Column, JoinTable, ManyToMany } from 'typeorm';
import { Experience } from 'src/enums/experience.enum';
import { ProgrammingLanguage } from 'src/programming_language/entities/programming_language.entity';

@ChildEntity()
export class Developer extends User {
  @Column({
    type: 'varchar',
    length: 350,
  })
  description: string;

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

  @ManyToMany(() => ProgrammingLanguage)
  @JoinTable({ name: 'developer_knowledge' })
  programmingLanguages: ProgrammingLanguage[];
}
