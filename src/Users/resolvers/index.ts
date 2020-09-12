import { Resolver, Subscription, Mutation, Arg, Query } from 'type-graphql';
import { User } from '../models/User';
import { MutateUserInput } from '../inputs/MutateUserInput';
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

    @Mutation(() => User)
    async updateUser(@Arg("id") id: string, @Arg("data") data: MutateUserInput) {
        const user = await User.findOneOrFail({ where: { id } })

        Object.assign(user, data)

        await user.save()

        return user
    }

}