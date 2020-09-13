import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

@Entity()
@ObjectType()
export class User extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Field(() => String)
	@Column({ unique: true })
	username: string

	@Field(() => String)
	@Column()
	profileImage: string

	@Field(() => String)
	@Column()
	firstName: string

	@Field(() => String)
	@Column()
	lastName: string

	@Field(() => String)
	name: string
	// TODO: Parent FieldResolver

	@Field(() => String)
	@Column()
	avatar: string

	@Field(() => String)
	@Column({ unique: true })
	email: string

	@Field(() => String)
	@Column()
	birthday: string

	@Field(() => String)
	@Column()
	passwordHash: string

	// TODO: Authorization & Roles
	// @Field(() => )

	// TODO: Community connections

	// TODO: Channel connections

	//
}
