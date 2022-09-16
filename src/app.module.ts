import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventController } from './event.controller';
import { Event } from './event.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '47.105.134.91',
      port: 3306,
      username: 'root',
      password: 'root123456',
      database: 'test',
      synchronize: true,
      entities: [Event],
    }),
    TypeOrmModule.forFeature([Event]),
  ],
  controllers: [AppController, EventController],
  providers: [AppService],
})
export class AppModule {}
