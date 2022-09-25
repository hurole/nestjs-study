import {
  Column,
  CreateDateColumn,
  Entity,
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
  @Column({ type: 'varchar', length: 16, comment: '作者' })
  author: string;
  @Column({ type: 'text', comment: '文章内容' })
  content: string;
}
