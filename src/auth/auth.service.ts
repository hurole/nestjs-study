import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      return { email: user.email, uid: user.uid };
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.uid };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
