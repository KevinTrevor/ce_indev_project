import { Chat } from 'src/chat/entities/chat.entity';
import { MessageStatus } from 'src/enums/status.enum';
import { User } from 'src/user/entities/user.entity';

export class Message {
  id: number;
  emissor: User;
  dateSent: Date;
  timeSent: Date;
  status: MessageStatus;
  content: string;
  chat: Chat;
}
