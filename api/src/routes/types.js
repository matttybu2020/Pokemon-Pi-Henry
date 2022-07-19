const axios = require("axios");
const { Router } = require("express");
const { Type } = require ( "../db");
const router = Router();

// types

/*
router.get("/", async (req, res, next) => {
    try {
      const typesAPI = await axios.get("https://pokeapi.co/api/v2/type");
      const contador = await Type.count();
  
      if(contador === 0) {
        const arrayTypes = typesAPI.data.results.map(e => e.name).map(e => {return {name:e}})
        await Type.bulkCreate(arrayTypes)
      }
      
      const traerTipos = await Type.findAll()
      res.send(traerTipos);
    } catch (error) {
      next(error);
    }
  });*/



















/*
router.get("/", async ( req, res, next) => {
    
    try {
        const api = await axios.get("https://pokeapi.co/api/v2/type"); //Trae todos los tipos
      const types = await api.data // trae la respuesta en data
      res.send(types)
    } catch (error) {
        next(error);
      }
    });

    module.exports = router;*/
    router.get("/", async ( req, res, next) => {
    try {
      const api = await axios.get("https://pokeapi.co/api/v2/type"); //Trae todos los tipos
      const types = await api.data // trae la respuesta en data
      for (type of types.results) { //Entra a la propiedad results, a cada elemento..
        const find = await Type.findOne({ where: {name: type.name}}); // Entra a la propiedad name y busca si ya existe 
        if (!find)  { // Si no lo encuentra..
          await Type.create({ name: type.name }); //Lo agrega a la base de datos
        } else {
          return res.json(await Type.findAll()) // Sino devuelve todos los tipos
        }
      }
      res.json(await Type.findAll()); //Finalmente devuelvo todos los tipos de la Db.
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;

  



























/*
router.get("/", async (req, res, next) => {
  try {
    const api = await axios.get("https://pokeapi.co/api/v2/type"); //obtengo todo los tipos
    const typesRespuesta = await api.data; //traigo respuesta en data

    for (type of typesRespuesta.results) {
      // entra a prop results, a cada elemento
      const encontroType = await Type.findOne({ where: { name: type.name } }); // entra a prop.name y verifica si existe

      if (!encontroType) {
        await Type.create({ name: type.name }); // lo agrega a db
      } else {
        return res.json(await Type.findAll()); // si no devuelvo todos los tipos
      }
      res.json(await Type.findAll()); // devuelvo en la base de datos
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;*/
