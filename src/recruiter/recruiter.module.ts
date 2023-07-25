import { Module } from '@nestjs/common';
import { RecruiterService } from './recruiter.service';
import { RecruiterController } from './recruiter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/parent_entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [RecruiterController],
  providers: [RecruiterService],
})
export class RecruiterModule {}
