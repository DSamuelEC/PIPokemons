const { Router } = require('express');
const getTypes = require('../controllers/controlTypes');
const routerType = Router();

routerType.get('/', async (req, res) => {
    try {
        const typesInDb = await getTypes();
        return res.status(200).json(typesInDb)
    } catch (error) {
        return res.status(404).send(error.message)
    }
});

module.exports = routerType