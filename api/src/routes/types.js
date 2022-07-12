const axios = require("axios");
const { Router } = require("express");
const { Type } = require("../db.js");
const router = Router();

// types

router.get ("/", async (req,res,next)=> {

    try {
        const api = await axios.get("https://pokeapi.co/api/v2/type");//obtengo todo los tipos
        const typesRespuesta = await api.data;  //traigo respuesta en data
        
       
    for (type of typesRespuesta.results) {             // entra a prop results, a cada elemento
    const encontroType = await Type.findOne({ where: {name: type.name}}); // entra a prop.name y verifica si existe
    
if(!encontroType){
    await Type.create({ name: type.name}); // lo agrega a db
}else{
    return res.json(await Type.findAll())// si no devuelvo todos los tipos
}
res.json(await Type.findAll()); // devuelvo en la base de datos
}
} catch (error) {
        next(error);
    }
})




module.exports = router;