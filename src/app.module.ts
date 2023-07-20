import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BillModule } from './bill/bill.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { DetailModule } from './detail/detail.module';
import { ServiceModule } from './service/service.module';
import { PackageModule } from './package/package.module';

@Module({
  imports: [UserModule, BillModule, ChatModule, MessageModule, DetailModule, ServiceModule, PackageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
