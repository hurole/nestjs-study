import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private readonly repository: Repository<Article>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(article) {
    const user = await this.userRepository.findOne({
      where: { uid: article.uid },
    });
    const item = new Article();
    item.title = article.title;
    item.content = article.content;
    item.author = user;
    return await this.repository.save(item);
  }

  async findAll() {
    return await this.repository.find();
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
