import { Bill } from 'src/bill/entities/bill.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Detail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'double',
    default: 0.0,
  })
  totalPrice: number;

  @ManyToOne(() => Bill, (bill) => bill.details)
  bill: Bill;
}
