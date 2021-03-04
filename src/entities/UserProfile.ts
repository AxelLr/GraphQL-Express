import {ObjectType, Field} from 'type-graphql'

import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from 'typeorm'
import {User} from './User'

@ObjectType()
@Entity()
export class UserProfile extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @CreateDateColumn({type: 'timestamptz', select: false})
  created_at?: Date

  @Field()
  @UpdateDateColumn({type: 'timestamptz', select: false})
  updated_at?: Date

  @Field()
  @Column()
  username?: string

  @Field()
  @Column()
  fullname?: string

  @Field()
  @Column({nullable: true})
  avatar_url?: string

  @Field()
  @Column({default: false})
  is_private?: boolean

  @Field()
  @Column({nullable: true})
  avatar_key?: string

  @Field()
  @Column({nullable: true, type: 'text'})
  bio?: string

  @Field()
  @OneToOne((type) => User, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'user'})
  user?: User
}
