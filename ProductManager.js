
const fs= require('fs');

class ProductManager {
    constructor(path) {
      this.path=path;
      this.products = [];
      this.getProductsFromFile();
    }

    getProductsFromFile(){
      if(fs.existsSync('./products.json')){
      const products=JSON.parse(fs.readFileSync('products.json','utf8'));
    this.products=products;
    console.log('Products loaded from the file');
    }
    else {
      console.log('Products file was not found')}
    }

    saveProductsInFile() {
      fs.writeFileSync('products.json', JSON.stringify(this.products));
      console.log('Products file was not found')
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
      const id = this.generateUniqueId();
      const newProduct1 = { id, title, description, price, thumbnail, code, stock };
      this.products.push(newProduct1);
      return newProduct1;
    }

    
  
    generateUniqueId() {
      return Math.floor(Math.random()*(9999999-100000+1))+1000000;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    }
  
    updateProduct(id, product) {
      const index = this.products.findIndex(p => p.id === id);
      if (index !== -1) {
        this.products[index]= {...this.products[index], ...product};
        console.log(`Product ID ${id} has been updated`);
      } else {
        throw new Error('Product not found');
      }
      this.saveProductsInFile();
    }
  
    deleteProduct(id) {
      const index = this.products.findIndex(p => p.id === id);
      if (index !== -1) {
        this.products.splice(index, 1);
        console.log(`Product with ID ${id} has been deleted`);
      } else {
        throw new Error('Product not found');
      }
      this.saveProductsInFile();
    }
  }
  
  module.exports= ProductManager;