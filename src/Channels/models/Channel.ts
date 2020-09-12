import { BaseEntity, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { ChannelType } from './ChannelType';
import { Community } from '../../Communities/models/Community';
@Entity()
@ObjectType()
export class Channel extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn("rowid")
    id: string

    @Field(() => String)
    name: string

    @Field(() => ChannelType)
    type: ChannelType

    @ManyToMany(() => Community)
    @JoinTable({
        name: ""
    })
    communities: Community[]

    /*
    TODO:
    - [] Users
    - [] Admins
    */

}