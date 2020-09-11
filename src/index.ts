import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { BookResolver } from './resolvers/Books';
import { buildSchema } from "type-graphql";


(async () => {
    const connection = createConnection()
    const schema = await buildSchema({
        resolvers: [
            BookResolver
        ]
    })

    const server = new ApolloServer({
        schema
    })

    await server.listen(process.env.PORT || 3639)

    console.log("Server has started!")
})()