import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Author {
      name: String
      books: [Book]
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
  }

  type Mutation {
      addBook(title: String, author: String): Book
  }
`;

const books = [
    {
        title: "Awef",
        author: "awef"
    }
]

const resolvers = {
    Query: {
        books: () => books,
        book: (_, { id }) => {
            return books[id]
        }
    }
}

const server = new ApolloServer({
    resolvers,
    typeDefs
})

server.listen().then(({ url }) => {
    console.log("listening!")
    console.log("see", url)
})