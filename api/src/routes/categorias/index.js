const {Router} = require('express');
const Categorias = require('../../models/categorias/index');

const router = Router();

router.get('/categorias', async (req, res) => {

    const categoria = await Categorias.find()

    res.send(categoria)
})

router.post('/categorias', async (req, res) => {

    const {name} = req.body;

    const categoria = await Categorias.create({
        name: name
    })

    res.json(categoria)
})

module.exports = router;