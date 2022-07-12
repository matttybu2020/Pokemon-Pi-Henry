const { Router } = require("express"); 
const getAllPokemon =require("../controller/controllers.js")
const express = require('express');
const router = express.Router();
const { Pokemon, Type } = require("../db");


// Devuelvo Pokemon por "name"

router.get("/" , async(req,res, next) => {

    try {
        const errorBusqueda="El pokemon que ingresaste no se encuentra";
        let name = req.query.name;                   //Recibo la solicitud por la variable
        let pokemonsTotal = await getAllPokemon();  // guardo mi controlador que tiene todos los datos en la varible

        if(name){   //(!name) Probar
            let namePokemon = await pokemonsTotal.filter((el) => el.name.toLowerCase().include(name.toLowerCase())
            );

            namePokemon.length
            ?res.status(200).send(namePokemon)
            :res.status(404).send(errorBusqueda); 

           /* if(namePokemon.length){
            res.status(200).send(namePokemon) // si se encuentra lo devuelvo
            }         
            res.status(404).send(errorBusqueda) */ // devuelvo texto con el error de la busqueda


            }else{
                res.status(200).send(pokemonsTotal)
            }
    } catch (error) {
        next(error);
    }
})

// busqueda por "id"

router.get("/:id", async (req,res,next)=> {

    try {
        const id = req.params.id;
        const pokemonsTotal = await getAllPokemon();
        const errorBusquedaId ="No se encontro el Pokemon que tenga este Id";
        
        // si em pasan el id correspondiente lo devuelvo , si no un error
        if(id){
            let idPokemon = pokemonsTotal.filter((el) => el.id == id)
            idPokemon.length
            ?res.status(200).json(idPokemon)
            :res.status(404).send(errorBusquedaId)
            
            
           /* if(idPokemon){
                res.status(200).json(idPokemon)
                
            }else{
                res.status(404).send(errorBusquedaId)
            }*/
        }
     
    } catch (error) {
        next(error);
    }
});

// Creacion de "pokemon"

router.post ("/", async (req,res,next)=> {

try{
    const datoOblig=({Infomacion : "El nombre es Obligatorio Por favor"});
    const pokemonCreadoExito = "Ah terminado de crear su nuevo Pokemon";
    //const errorData = "Tiene un error en data";

    let { name , img , hp , str , def , agi , height , weight , type} = req.body 

    const pokemonCreado = await Pokemon.create({ name , img , hp , str , def , agi , height , weight});

    if (!name) return res.json(datoOblig);

//consulto si loque tengo en type es un arreglo y verifico si tine algo adentro
    if (Array.isArray(type) && type.length){
        
//creo una varible (promesa) realizo un map para poder verificar qeu cada elem existe en nuestra de tabla(tipos)        
        let agregaType = await Promise.all (
            type.map((e) => {
                return Type.findOne({where:{ name:e}})
            })
        )
        await pokemonCreado.setTypes(agregaType)
        return res.send(pokemonCreadoExito);
    }
} catch (err){
    res.status(400).send("Tiene un error en data");
}
});







module.exports = router;