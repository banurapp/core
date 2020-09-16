import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	ManyToMany,
	JoinTable,
	Column,
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'
import { ChannelType } from './ChannelType'
import { Community } from '../../Communities/models/Community'
@Entity()
@ObjectType()
export class Channel extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('rowid')
	id: string

	@Field(() => String)
	@Column()
	name: string

	@Field(() => ChannelType)
	@Column()
	type: ChannelType

	@Field(() => String)
	@Column()
	topic: string

	@Field(() => String)
	@Column()
	description: string

	// @JoinTable({
	// 	name: '',
	// })
	// communities: Community[]

	/*
    TODO:
    - [] Users
    - [] Admins
    */
}
