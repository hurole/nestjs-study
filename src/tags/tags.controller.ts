import { Body, Controller, Post } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagServices: TagsService) {}
  @Post()
  async create(@Body('name') name: string) {
    return await this.tagServices.create(name);
  }
}
