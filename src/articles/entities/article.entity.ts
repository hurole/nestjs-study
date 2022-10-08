import { Tag } from 'src/tags/entities/tag.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 32,
    comment: '文章标题',
  })
  title: string;
  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;
  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;
  @ManyToOne(() => User, (user) => user.articles)
  @JoinColumn({ name: 'user_uid' })
  author: User;
  @Column({ type: 'text', comment: '文章内容' })
  content: string;
  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}
