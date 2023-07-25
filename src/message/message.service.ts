import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
  ) {}

  async create(createMessageDto: CreateMessageDto) {
    const message = this.messagesRepository.create(createMessageDto);
    return await this.messagesRepository.save(message);
  }

  async findAll() {
    return await this.messagesRepository.find();
  }

  async findOne(id: string) {
    return await this.messagesRepository.findOneBy({ id: id });
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    return await this.messagesRepository.update(id, updateMessageDto);
  }

  async remove(id: string) {
    return await this.messagesRepository.delete({ id: id });
  }
}
