import { Resolver, Subscription, Mutation, Arg, Query } from 'type-graphql'
import { User } from '../models/User'
import { MutateUserInput } from '../inputs/MutateUserInput'
@Resolver()
export class UserResolver {
	@Query(() => User)
	getUser(@Arg('id') id: string): Promise<User> {
		return User.findOneOrFail({ where: { id } })
	}

	@Query(() => [User])
	async getUsers(): Promise<User[]> {
		return User.find()
	}

	@Mutation(() => User)
	async updateUser(
		@Arg('id') id: string,
		@Arg('data') data: MutateUserInput
	): Promise<User> {
		const user = await User.findOneOrFail({ where: { id } })

		Object.assign(user, data)

		await user.save()

		return user
	}
}
