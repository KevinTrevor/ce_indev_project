import { User } from 'src/user/entities/user.entity';

export class Chat {
  id: number;
  createdAt: Date;
  users: User[];
}
