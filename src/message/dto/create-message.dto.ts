import { ApiProperty } from '@nestjs/swagger';
import { Chat } from 'src/chat/entities/chat.entity';
import { MessageStatus } from 'src/enums/status.enum';

export class CreateMessageDto {
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
    default: { id: '' },
  })
  chat: Chat;
}
