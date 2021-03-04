import {ObjectType, Field} from 'type-graphql'

import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  OneToOne,
} from 'typeorm'
import {UserStatus} from './UserStatus'

@ObjectType()
@Entity()
export class User extends BaseEntity {
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
  @Column({unique: true})
  email?: string

  @Column({select: false})
  password?: string

  // admin | moderador | usuario
  @Field()
  @Column()
  role?: string

  @Field({nullable: true})
  @Column({nullable: true, select: false})
  resetPasswordToken?: string

  @Field({nullable: true})
  @Column({nullable: true, select: false})
  activeAccountToken?: string

  @Field()
  @Column({select: false})
  register_ip?: string

  @Field()
  @Column({select: false})
  user_agent?: string

  @Field(() => UserStatus)
  @OneToOne(() => UserStatus, (status) => status.user, {
    onDelete: 'CASCADE',
  })
  status?: UserStatus
}
