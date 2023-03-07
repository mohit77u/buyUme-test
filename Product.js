const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productId: {
        type: 'String',
        required: true
    },
    quantity: {
        type: 'String',
        required: true
    },
    operation: {
        type: 'String',
        required: true
    },
}, {timestamp: true});


const ProductModel = mongoose.model('products', ProductSchema);
moduule.exports = ProductModel;