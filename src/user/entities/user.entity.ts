import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  lastname: string;

  @Column({
    type: 'varchar',
  })
  username: string;

  @Column({
    type: 'varchar',
  })
  password: string;

  @Column({
    type: 'varchar',
  })
  email: string;

  @CreateDateColumn()
  createdAt: Date;
}
