const {Router} = require('express');
const Productos = require('../../models/productos/index')

const router = Router();

router.get('/productos', async (req, res) => {

    const producto = await Productos.find()

    res.send(producto);
});

router.post('/productos', async (req, res) => {

    const {author, nameProduct, price, description} = req.body;

    const producto = await Productos.create({
        author: author,
        nameProduct: nameProduct,
        price: price,
        description: description,
        date: new Date
    })

    res.json(producto);
})

module.exports = router;