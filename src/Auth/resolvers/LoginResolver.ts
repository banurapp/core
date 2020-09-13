import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import { compare, hash } from 'bcrypt'
import { Context } from '../../types/context/index'
import { User } from '../../Users/models/User'
import { LoginInput } from '../inputs/LoginInput'
import { environment } from '../../environment/index'

@Resolver()
export class LoginResolver {
	@Mutation(() => User, { nullable: true })
	async login(
		@Arg('user') { email, password }: LoginInput,
		@Ctx() ctx: Context
	): Promise<User | null> {
		if (!email) throw Error('No email or username was provided.')

		if (email) {
			const user = await User.findOne({ where: { email } })

			if (!user) return null

			const valid = await compare(
				await hash(password, environment.saltNum),
				user.passwordHash
			)

			if (!valid) return null

			ctx.user = user

			return user
		}

		return null
	}
}
