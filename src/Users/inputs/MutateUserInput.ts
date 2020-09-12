import { InputType, Field } from "type-graphql";
import { User } from '../models/User';

@InputType()
export class MutateUserInput {
    

    @Field({nullable: true})
    username?: string

    @Field({nullable: true})
    profileImage?: string

    @Field({nullable: true})
    email?: string
}