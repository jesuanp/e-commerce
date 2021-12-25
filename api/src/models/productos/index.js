const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productoSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    nameProduct: String,
    price: Number,
    description: String,
    date: {
        type: Date,
    },
})

const Productos = model('productos', productoSchema);

module.exports = Productos
