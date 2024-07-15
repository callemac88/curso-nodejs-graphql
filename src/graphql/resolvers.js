const {
  product,
  products,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('./product.resolvers');

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
    product,
    products,
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
  },
};

module.exports = resolvers;
