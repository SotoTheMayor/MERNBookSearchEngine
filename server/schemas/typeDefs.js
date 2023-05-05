const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Books]!
    }

    type Book {
        _id: ID

    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        books(username: String): [Book]
        book(bookId: ID!): Book
        me: User
    }

    type Mutations {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addBook(bookId: ID!): Book
        removeBook(bookId: ID!): Book
    }
`;

module.exports = typeDefs;