import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @Length(6, 16)
  password: string;
}
