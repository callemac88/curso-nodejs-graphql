const product = (_, { id }) => {
  return {
    id,
    name: 'Product-1',
    price: 11.3,
    description: 'This is the first product',
    image: 'http://image.png',
    createdAt: new Date().toISOString(),
  };
};

const products = () => {
  return [];
};

module.exports = { product, products };
