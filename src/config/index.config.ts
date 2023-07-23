import { Bill } from 'src/bill/entities/bill.entity';
import { Chat } from 'src/chat/entities/chat.entity';
import { Detail } from 'src/detail/entities/detail.entity';
import { User } from 'src/embedded/user.class';
import { Message } from 'src/message/entities/message.entity';
import { Package } from 'src/package/entities/package.entity';
import { Service } from 'src/service/entities/service.entity';

export default async () => ({
  indev_db: {
    type: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
      Bill,
      Chat,
      Detail,
      Message,
      Package,
      Service,
      User,
    ],
    synchronize: true,
  },
});
