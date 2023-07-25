import { Module } from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { DeveloperController } from './developer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/parent_entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [DeveloperController],
  providers: [DeveloperService],
})
export class DeveloperModule {}
