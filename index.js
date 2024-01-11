const ProductManager = require('./ProductManager');

const product = new ProductManager('./products.json');

product.addProduct('test product 1', 'this is a product test 1', 200, 'No Image', '#0001', 250);
product.addProduct('test product 2', 'this is a product test 2', 432, 'No Image', '#0002', 452);
product.addProduct('test product 3', 'this is a product test 3', 636, 'No Image', '#0003', 345);


console.log(product.getProducts());

product.getProductById(1);

product.updateProduct(2, { stock: 20 });

product.deleteProduct(3);


console.log(product.getProducts());