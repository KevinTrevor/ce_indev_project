import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProgrammingLanguage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  image: string;
}
