import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class CreateChatDto {
  @ApiProperty({
    type: Number,
  })
  id: number;

  @ApiProperty({
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    type: User,
  })
  users: User[];
}
