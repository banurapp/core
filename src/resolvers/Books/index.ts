import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { Book } from '../../models/Book'
import { CreateBookInput } from './inputs/createBookInput'
import { UpdateBookInput } from './inputs/updateBookInput'

@Resolver()
export class BookResolver {
	@Query(() => String)
	hello() {
		return 'World'
	}

	@Query(() => [Book])
	books() {
		return Book.find()
	}

	@Mutation(() => Book)
	async createBook(@Arg('book') data: CreateBookInput) {
		const book = Book.create(data)

		await book.save()

		return book
	}

	@Query(() => Book)
	async book(@Arg('id') id: string) {
		return Book.findOne({
			where: {
				id,
			},
		})
	}

	@Mutation(() => Book)
	async updateBook(@Arg('id') id: string, @Arg('book') data: UpdateBookInput) {
		const book = await Book.findOne({
			where: {
				id,
			},
		})

		if (!book) throw new Error(`Could not find a book entry at ${id}`)

		Object.assign(book, data)

		await book.save()

		return book
	}
}
