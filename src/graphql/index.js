const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

const typeDefs = `
type Query {
  hello: String
  getPerson(name: String, age: Int): String
  getInt(age: Int): Int
  getFloat(price: Float): Float
  getString: String
  getBoolean: Boolean
  getId: ID
}
`;

const resolvers = {
  Query: {
    hello: () => 'Hola Mundo',
    getPerson: (_, args) =>
      `Mi name in ${args.name} and I'm ${args.age} years old`,
    getInt: () => 1,
    getFloat: () => 1.1,
    getString: () => 'Hola',
    getBoolean: () => true,
    getId: () => '123456',
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
