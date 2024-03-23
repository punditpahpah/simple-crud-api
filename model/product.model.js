

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        name: {
            type: String,
            require: [true, "please enter a product name "]
        },

        quantity: {
            type: Number,
            require: true,
            default: 0
        },

        price: {
            type: Number,
            require: true,
            default: 0
        },

        image: {
            type: Number,
            require: false,
            default: 0
        },
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
