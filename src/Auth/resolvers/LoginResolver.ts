import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import { compare } from 'bcrypt'
import { Context } from '../../types/context/index'
import { User } from '../../Users/models/User'
import { LoginInput } from '../inputs/LoginInput'

@Resolver()
export class LoginResolver {
	@Mutation(() => User, { nullable: true })
	async login(
		@Arg('user') { email, password }: LoginInput,
		@Ctx() ctx: any
	): Promise<User | null> {
		if (!email) throw Error('No email or username was provided.')

		if (email) {
			const user = await User.findOne({ where: { email } })

			if (!user) return null

			const valid = await compare(password, user.password)

			if (!valid) return null

			ctx.req.session.userId = user.id

			return user
		}

		return null
	}
}
