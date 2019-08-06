const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  infor: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
