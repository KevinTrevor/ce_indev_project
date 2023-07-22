import { Chat } from 'src/chat/entities/chat.entity';
import { MessageStatus } from 'src/enums/status.enum';
import { User } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  emissor: User;

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
