import { Injectable } from '@nestjs/common';

type User = {
  id: number;
  user: string;
  password: string;
};
@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor() {
    this.users = [
      { id: 1, user: 'zhangsan@qq.com', password: 'q123456' },
      { id: 2, user: 'lisi@qq.com', password: '112233' },
      { id: 3, user: 'wang5@qq.com', password: '654321' },
    ];
  }
  async findOne(userAcount: string): Promise<undefined | User> {
    return this.users.find((user) => user.user === userAcount);
  }
}
