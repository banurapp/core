import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { BookResolver } from './resolvers/Books'

;

(async () => {
	const connection = createConnection({
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'postgres',
		database: 'postgres',
		synchronize: true,
		entities: [
			'./src/models/**/*.ts',
			'./src/models/*.ts',
			'./src/**/models/*.ts',
			'./**/models/*.ts',
			'./**/models/**/*.ts',
		],
	})
	const schema = await buildSchema({
		resolvers: [BookResolver],
	})

	const server = new ApolloServer({
		schema,
	})

	await server.listen(process.env.PORT || 3639)

	console.log('Server has started!')
})()
