import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/tags/entities/tag.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private readonly repository: Repository<Article>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Tag) private readonly tagsRepository: Repository<Tag>,
  ) {}
  async create(article) {
    const user = await this.userRepository.findOne({
      where: { uid: article.uid },
    });
    const tags = await this.tagsRepository.find({
      where: [
        article.tags.map((item) => {
          return { id: item };
        }),
      ],
    });
    const item = new Article();
    item.title = article.title;
    item.content = article.content;
    item.author = user;
    item.tags = tags;
    return await this.repository.save(item);
  }

  async findAll() {
    return await this.repository.find({
      relations: ['author', 'tags'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
