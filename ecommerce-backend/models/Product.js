const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  images: { type: [String], required: false } // Array för att spara bilder
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
