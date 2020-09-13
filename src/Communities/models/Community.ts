import { Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

@Entity()
@ObjectType()
export class Community {
	@PrimaryGeneratedColumn('uuid')
	@Field(() => ID)
	id: string
}
