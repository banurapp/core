import { Resolver, Subscription, Mutation, Arg, Query } from 'type-graphql';
import { User } from '../models/User';
@Resolver()
export class UserResolver {

    @Query(() => User)
    async getUser(@Arg("id") id: string) {
        return await User.findOne({where: { id }})
    }

    @Query(() => [User])
    async getUsers() {
        return await User.find()
    }
}