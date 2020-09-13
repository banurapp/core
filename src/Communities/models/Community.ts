import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'
import { User } from '../../Users/models/User'

@Entity()
@ObjectType()
export class Community {
	@PrimaryGeneratedColumn('uuid')
	@Field(() => ID)
	id: string

	@Column()
	@Field(() => String)
	name: string

	@Column()
	@Field(() => String)
	imageUrl: string

	@Column()
	@Field(() => String)
	logoUrl: string

	@Column()
	@Field(() => String)
	description: string

	// TODO: User connections

	// TODO: Channel connections

	// TODO:
}
