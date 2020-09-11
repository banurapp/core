import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Book extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => String)
    @Column()
    title: string

    @Column()
    @Field(() => String)
    author: string

    @Field(() => Boolean)
    @Column({ default: false })
    isPublished: boolean
}