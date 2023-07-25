import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/parent_entity/user.entity';

export class CreateChatDto {
  @ApiProperty({
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    type: Array<User>,
  })
  users: User[];
}
