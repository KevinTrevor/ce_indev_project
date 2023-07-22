import { ApiProperty } from '@nestjs/swagger';
import { Chat } from 'src/chat/entities/chat.entity';
import { MessageStatus } from 'src/enums/status.enum';
import { User } from 'src/user/entities/user.entity';

export class CreateMessageDto {
  @ApiProperty({
    type: User,
    required: true,
  })
  emissor: User;

  @ApiProperty({
    type: Date,
    required: true,
  })
  dateSent: Date;

  @ApiProperty({
    type: Date,
    required: true,
  })
  timeSent: Date;

  @ApiProperty({
    enum: MessageStatus,
  })
  status: MessageStatus;

  @ApiProperty({
    type: String,
    minimum: 1,
    maximum: 800,
    required: true,
  })
  content: string;

  @ApiProperty({
    type: Chat,
    required: true,
  })
  chat: Chat;
}
