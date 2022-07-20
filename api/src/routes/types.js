const axios = require("axios");
const { Router } = require("express");
const { Type } = require ( "../db");
const router = Router();

//!  Get a types (me traigo todos los tipos)

    
    router.get("/", async ( req, res, next) => {
    try {
      const api = await axios.get("https://pokeapi.co/api/v2/type"); ///obtengo todo los tipos
      const types = await api.data ///traigo respuesta en data
      for (type of types.results) { //Entra a la propiedad results, a cada elemento..
        const find = await Type.findOne({ where: {name: type.name}}); // entra a prop.name y verifica si existe
        if (!find)  { 
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

  




























