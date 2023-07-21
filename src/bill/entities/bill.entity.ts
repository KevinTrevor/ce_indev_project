import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  purchasedAt: Date;

  @Column()
  totalPrice: number;
}
