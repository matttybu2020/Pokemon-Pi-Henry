const axios = require ("axios");
const { Pokemon , Type } = require ("../db");


// realizamos un get a los datos de la Api

const getApiInformacion = async () => {
const respuesta = await axios
.get("https://pokeapi.co/api/v2/pokemon?limit=40")
.then((data)=> {return data.data.results;})
.then((data) => {return Promise.all(data.map((res) => axios.get(res.url))); }) //entra a cada elemnto && hace get a url
.then((data)=> {return data.map((res)=> res.data); //tengo los datos de cada pokemon en respuesta
})
let pokeArray = respuesta.map((result) => {
    return {
        id:result.id,
        name: result.name,
        types:result.types.map((t) => t.type.name),
        image: result.sprites.front_shiny_female,
        life:result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat,
        speed: result.stats[3].base_stat,
        height: result.height,
        weight: result.weight,
      };
    });
    return pokeArray;
  };

//realizamos un get a los datos de la base de datos

const getBasedeDatos = async () => {
     //me traigo todo de la tabla pokemon && relacion con type
    try {
        const resultadoPokeType = await Pokemon.findAll({      
            include:{
                model: Type,
                attribute: ['name'],
                through:{attribute:[]},
            }
        })
        return resultadoPokeType;

    } catch (error) {
        console.log(error);
    }
}

//realizamos la info total

const getAllPokemon = async () => {
    const apiInformacion = await getApiInformacion(); //  guardo datos de consulta Api
    const dbInformacion = await getBasedeDatos();// guardo datos de la consulta de Base de Datos
    const informacionTotal = apiInformacion.concat(dbInformacion);
    return informacionTotal;
}




module.exports = getAllPokemon;