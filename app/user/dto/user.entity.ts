import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BusinessCard } from '../../businessCard/dto/businessCard.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ nullable: true })
    firstName?: string;

  @Column({ nullable: true })
    lastName?: string;

  @Column()
    email: string;

  @Column()
    password: string;

  @Column({ nullable: true })
    phone?: string;

  @Column({ nullable: true })
    profilePicture?: string;

  @OneToMany(() => BusinessCard, businessCard => businessCard.user)
    businessCards?: BusinessCard[];
}
