import {ObjectType, Field} from 'type-graphql'

import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  JoinColumn,
  ManyToOne,
} from 'typeorm'
import {User} from './User'

@ObjectType()
@Entity()
export class UserDevice extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  @CreateDateColumn({type: 'timestamptz', select: false})
  created_at?: Date

  @Column()
  @UpdateDateColumn({type: 'timestamptz', select: false})
  updated_at?: Date

  @Field()
  @Column()
  OS_name?: string

  @Field()
  @Column({nullable: true, default: null})
  brand?: string

  @Field()
  @Column({nullable: true, default: null})
  model?: string

  @Field()
  @Column()
  client_type?: string

  @Field()
  @Column()
  device_type?: string

  @Field()
  @Column()
  device_net_ip?: string

  @Field()
  @ManyToOne((type) => User, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'user'})
  user?: User
}
