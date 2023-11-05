import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/dto/user.entity';

@Entity()
export class Email {
  @PrimaryGeneratedColumn('uuid')
    id?: string;

  @ManyToOne(() => User, user => user.id)
    to: User;

  @Column()
    from: string;

  @Column()
    replyTo: string;

  @Column()
    subject: string;

  @Column({ nullable: true })
    html?: string;

  @Column({ nullable: true })
    text?: string;
}
