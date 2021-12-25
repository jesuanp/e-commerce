const { Schema, model } = require('mongoose');

const categoriasSchema = new Schema({
    name: {
        type: String,
        unique: true
    }
})

const Categorias = model('categorias', categoriasSchema)

module.exports = Categorias;
