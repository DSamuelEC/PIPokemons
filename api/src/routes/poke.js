const { Router } = require('express');
const routerPoke = Router();
const { getAllInfo, getPokeByIdApi, getPokeByIdDb, createPkDb } = require('../controllers/controlPoke.js');
const { Pokemons, Types } = require('../db');

//ruta get donde trae todos y tambien donde trae lo que esté por query
routerPoke.get('/', async (req, res) => {
    const { name } = req.query;
    const pokeTotal = await getAllInfo();
    try {
      if( name ){ //significa que me mandaron el name
        const pkName = pokeTotal.filter(pk => pk.name.toLowerCase().includes(name.toLowerCase()))
        //uso el includes para hacer una busqueda mas global, porque si uso === en el lado del front que mandarle el nombre completo
        //if(pkName.length) res.status(200).send(pkName)
        if(pkName.length) {
          return res.status(200).json(pkName)
        } else {
          return res.status(404).json({ error: `Pokemon with name: ${name} not found`})
        }
      } 
      else { 
        return res.status(200).json(pokeTotal)
      }
    } catch (error) {
      return res.status(404).send(error.message)
    }
  });

//ruta get donde trae por ID en API y en DB (ESTA RUTA YA SIRVE, DA ERROR CUANDO ESTÁ MAL Y DA CORRECTO CUANDO SI ENCUENTRA EL POKEMON)
routerPoke.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    let pkmn = null
    if(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/.test(id)){
      pkmn = await getPokeByIdDb(id)
    } else {
      pkmn = await getPokeByIdApi(id)
    }
    if(pkmn) return res.status(200).json(pkmn)
    //res.status(404).send({error: `Pokemonn with id: ${id} not found`})
  } catch (error) {
    return res.status(404).send(error.message)
  }
})

//ruta post 

routerPoke.post('/', async (req, res) =>{
  try {
    let {
      name,
      image,
      health,
      attack,
      defense,
      createdInDb,
      types,
      dueño
    } = req.body;
    
    let typeDb = await Types.findAll({ where: {name: types}});
  
    let pkCreate = await Pokemons.create({
      name,
      image,
      health,
      attack,
      defense,
      createdInDb,
      dueño
    });
  
    await pkCreate.addTypes(typeDb)
    return res.status(200).json({
      message: "Pokemon created!",
      pkCreate
    })
  } catch (error) {
    return res.status(400).send(error.message)
  }
});

module.exports = routerPoke;