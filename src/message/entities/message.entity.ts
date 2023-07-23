import { Chat } from 'src/chat/entities/chat.entity';
import { MessageStatus } from 'src/enums/status.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  dateSent: Date;

  @Column()
  timeSent: Date;

  @Column({
    type: 'enum',
    enum: MessageStatus,
    default: MessageStatus.Sent,
  })
  status: MessageStatus;

  @Column({
    type: 'longtext',
  })
  content: string;
  chat: Chat;
}
