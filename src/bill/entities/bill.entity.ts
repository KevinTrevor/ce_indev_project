import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'date',
  })
  purchasedAt: Date;

  @Column({
    type: 'double',
    default: 0.0,
  })
  totalPrice: number;
}
