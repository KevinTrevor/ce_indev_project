import { User } from 'src/parent_entity/user.entity';
import { ChildEntity, Column, JoinTable, ManyToMany } from 'typeorm';
import { Experience } from 'src/enums/experience.enum';
import { ProgrammingLanguage } from 'src/programming_language/entities/programming_language.entity';
import { Category } from 'src/category/entities/category.entity';
import { Institution } from 'src/institution/entities/institution.entity';

@ChildEntity()
export class Developer extends User {
  @Column({
    type: 'varchar',
    length: 350,
  })
  description: string;

  @Column({
    type: 'enum',
    enum: Experience,
    default: Experience.Junior,
  })
  experience: Experience;

  @ManyToMany(() => ProgrammingLanguage)
  @JoinTable({ name: 'developer_knowledge' })
  programmingLanguages: ProgrammingLanguage[];

  @ManyToMany(() => Category)
  @JoinTable({ name: 'developer_categories' })
  categories: Category[];

  @ManyToMany(() => Institution)
  @JoinTable({ name: 'developer_studies' })
  studies: Institution[];
}
