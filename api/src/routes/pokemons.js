const { Router } = require("express"); 
const getAllPokemon =require("../controller/controllers.js")
const express = require('express');
const router = Router();
const axios = require("axios")
const { Pokemon, Type } = require("../db");


//! Devuelvo Pokemon por "name"

router.get("/" , async(req,res, next) => {

    try {
        const errorBusqueda="El pokemon que ingresaste no se encuentra";

        let name = req.query.name;                   //Recibo la solicitud por la variable
        let pokemonsTotal = await getAllPokemon();  // guardo mi controlador que tiene todos los datos en la varible

        if(name){   //(!name) Probar
            let namePokemon = await pokemonsTotal.filter((el) => el.name.toLowerCase().includes(name.toLowerCase())
            );

            namePokemon.length
            ? res.status(200).send(namePokemon)
            : res.status(404).send(errorBusqueda); 

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


//! busqueda por "id"

router.get("/:id", async (req,res,next)=> {

    try {
        const id = req.params.id;
        const pokemonsTotal = await getAllPokemon();
        const errorBusquedaId ="No se encontro el Pokemon que tenga este Id";
        
        // si le pasan el id correspondiente lo devuelvo , si no un error
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

//! Creacion de "pokemon" 


router.post("/", async (req, res, next) => {
    try {
      const {  name , image , hp , attack , defense , speed , height , weight ,type } =req.body;
        //
      const newPokemon = await Pokemon.create({
        name,image , hp , attack , defense , speed , height , weight 
      });
  
      const consultaTipos = await Type.findAll({
        
        where: {
          name: type,
        },
      });
  
      const tipeId = consultaTipos?.map((e) => e.dataValues.id);
      await newPokemon.addType(tipeId)
      res.send(newPokemon);
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;



























