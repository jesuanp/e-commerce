const {Router} = require('express');

const router = Router();

// Ruta para buscar todos los productos
const rutaProductos = require('./productos/index');

// Ruta para buscar todas las categorias
const rutaCategorias = require('./categorias/index');


router.use('/', rutaProductos)
router.use('/', rutaCategorias)

module.exports = router
