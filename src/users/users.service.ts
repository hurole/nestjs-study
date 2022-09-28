import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  async findOne(email: string): Promise<undefined | User> {
    return await this.repository.findOne({
      where: {
        email,
      },
    });
  }

  async register(userInfo) {
    return await this.repository.save(userInfo);
  }
}
