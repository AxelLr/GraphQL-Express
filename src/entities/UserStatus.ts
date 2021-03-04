import {type} from 'os'
import {ObjectType, Field} from 'type-graphql'

import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  JoinColumn,
  OneToOne,
} from 'typeorm'
import {User} from './User'

@ObjectType()
@Entity()
export class UserStatus extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  @CreateDateColumn({type: 'timestamptz', select: false})
  created_at?: Date

  @Column()
  @UpdateDateColumn({type: 'timestamptz', select: false})
  updated_at?: Date

  // 0 === 'disabled' | 1 === 'active' | 2 === 'banned' | 3 === 'deleted'
  @Field()
  @Column({default: 0})
  status?: number

  @Field()
  @Column({nullable: true, default: null, type: 'text'})
  ban_reason?: string

  @Field()
  @Column({type: 'timestamptz', nullable: true, default: null})
  ban_expiration?: Date

  @Field(() => User)
  @OneToOne(() => User, (user) => user.status, {onDelete: 'CASCADE'})
  @JoinColumn()
  user?: User
}

// DEVICES
//  LOGIN FROM OTHER DEVICES
