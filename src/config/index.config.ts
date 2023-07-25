import { Bill } from 'src/bill/entities/bill.entity';
import { Chat } from 'src/chat/entities/chat.entity';
import { Detail } from 'src/parent_entity/detail.entity';
import { User } from 'src/parent_entity/user.entity';
import { Message } from 'src/message/entities/message.entity';
import { Package } from 'src/package/entities/package.entity';
import { Service } from 'src/service/entities/service.entity';
import { ServiceDetail } from 'src/service_detail/entities/service_detail.entity';
import { PackageDetail } from 'src/package_detail/entities/package_detail.entity';
import { Developer } from 'src/developer/entities/developer.entity';
import { ProgrammingLanguage } from 'src/programming_language/entities/programming_language.entity';

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
      ServiceDetail,
      PackageDetail,
      Message,
      Package,
      Service,
      ProgrammingLanguage,
      User,
      Developer,
    ],
    synchronize: true,
  },
});
