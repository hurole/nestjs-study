import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Article } from 'src/articles/entities/article.entity';
import { ArticlesModule } from 'src/articles/articles.module';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/users/entities/user.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  imports: [
    // 此处可以通过envFilePath加载指定的配置文件，并将该文件添加到git忽略名单中，避免将数据库信息上传到代码仓库
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      // 时区选择 UTC
      timezone: 'Z',
      synchronize: true,
      entities: [Article, User, Tag],
    }),
    ArticlesModule,
    AuthModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
