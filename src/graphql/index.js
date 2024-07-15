const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

const typeDefs = `
  type Query {
    hello: String!
    getPerson(name: String, age: Int): String
    getInt(age: Int!): Int
    getFloat(price: Float): Float
    getString: String
    getBoolean: Boolean
    getId: ID
    getNumbers(numbers: [Int!]!): [Int]
    getProduct: Product
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
    image: String!
    createdAt: String!
  }
`;

// relation between REST and GQL
// Get -> query
// Post, Put, Delete -> mutation

// List on GQL
// [String]
// [Int]

const resolvers = {
  Query: {
    hello: () => null,
    getPerson: (_, args) =>
      `Mi name in ${args.name} and I'm ${args.age} years old`,
    getInt: () => 1,
    getFloat: () => 1.1,
    getString: () => 'Hola',
    getBoolean: () => true,
    getId: () => '123456',
    getNumbers: (_, args) => args.numbers,
    getProduct: () => {
      return {
        id: '123',
        name: 'Product-1',
        price: 11.3,
        description: 'This is the first product',
        image: 'http://image.png',
        createdAt: new Date().toISOString(),
      };
    },
  },
};

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });
  await server.start();
  server.applyMiddleware({ app });
};
module.exports = useGraphql;
