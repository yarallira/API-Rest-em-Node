const mongoose = require('../../database');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

//
