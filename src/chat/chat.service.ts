import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private chatsRepository: Repository<Chat>,
  ) {}

  async create(createChatDto: CreateChatDto) {
    const chat = this.chatsRepository.create(createChatDto);
    return await this.chatsRepository.save(chat);
  }

  async findAll() {
    return await this.chatsRepository.find();
  }

  async findOne(id: string) {
    const findOptions: FindOneOptions<Chat> = {
      where: { id: id },
      relations: { messages: true },
    };
    return await this.chatsRepository.findOne(findOptions);
  }

  async update(id: string, updateChatDto: UpdateChatDto) {
    return await this.chatsRepository.update(id, updateChatDto);
  }

  async remove(id: string) {
    return await this.chatsRepository.delete({ id: id });
  }
}
