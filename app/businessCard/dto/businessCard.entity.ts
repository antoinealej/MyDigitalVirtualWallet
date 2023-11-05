import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/dto/user.entity';

@Entity()
export class BusinessCard {
  @PrimaryGeneratedColumn('uuid')
    id?: string;

  @ManyToOne(() => User, user => user.id)
    user: User;

  @Column()
    firstName: string;

  @Column()
    lastName: string;

  @Column()
    email: string;

  @Column()
    phone: string;

  @Column()
    profilePicture: string;

  @Column()
    position: string;

  @Column()
    companyName: string;

  @Column()
    companyLogo: string;
}
