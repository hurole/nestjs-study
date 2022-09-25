import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './event.entity';

@Controller('/event')
export class EventController {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}
  @Get()
  async findAll() {
    Logger.debug('findAll');
    return await this.repository.find();
  }
  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.repository.findOne({
      where: {
        id,
      },
    });
  }
  @Post()
  async create(@Body() input: CreateEventDto) {
    return await this.repository.save({
      ...input,
      when: new Date(input.when),
    });
  }
  @Patch(':id')
  async update(@Param('id') id, @Body() input: UpdateEventDto) {
    const event = await this.repository.findOne({ where: { id } });
    this.repository.save({
      ...event,
      ...input,
      when: input.when ? new Date(input.when) : event.when,
    });
  }
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id) {
    return await this.repository.delete(id);
  }
}
