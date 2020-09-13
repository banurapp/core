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
	email: string

	@Field(() => String)
	@Column()
	birthday: string

	// TODO: Encrypt this column | priority ULTRA
	@Field(() => String)
	@Column()
	password: string

	// TODO: Authorization & Roles
	// @Field(() => )
}
