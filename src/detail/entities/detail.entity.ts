import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Detail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'double',
    default: 0.0,
  })
  totalPrice: number;
}
