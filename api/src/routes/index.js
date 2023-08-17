const { Router } = require('express');
const routerPoke = require('./poke.js');
const routerType = require('./types.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', routerPoke);
router.use('/types', routerType);

module.exports = router;