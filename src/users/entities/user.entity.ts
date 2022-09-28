import { Article } from 'src/articles/entities/article.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  uid: number;
  @Column({
    type: 'varchar',
    length: 64,
    unique: true,
  })
  email: string;
  @Column('varchar')
  password: string;
  @Column('varchar', { length: 18, nullable: true })
  nickName: string;
  @Column({ nullable: true })
  avatar: string;
  @Column({ type: 'varchar', length: 11, nullable: true })
  mobile: string;
  @CreateDateColumn()
  registerTime: Date;
  @OneToMany(() => Article, (article) => article.author)
  articles: Article[];
}
