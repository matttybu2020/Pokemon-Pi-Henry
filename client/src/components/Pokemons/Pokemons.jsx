import React from 'react';
import CardPokemon from '../CardPokemon/CardPokemon.jsx';
//import style from '../Style/CardPokemon.module.css';
import Paginado from '../Paginado/Paginado.jsx';
import Navbar from "../Navbar/Navbar.jsx";
import SearchBar from '../SearchBar/SearchBar.jsx';
import { useState } from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PokemonsFiltro from '../PokemonsFiltro/PokemonsFiltro.jsx';


function Pokemons(){

    const todosPokemons = useSelector((state) => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPorPagina ] = useState(12);
    const indUltPokemons = currentPage * pokemonPorPagina ;
    const primPokemons = indUltPokemons - pokemonPorPagina ;
    const pokemonsAct = todosPokemons.slice(primPokemons , indUltPokemons);
    
    const paginado = (numPaginas) => {
        setCurrentPage(numPaginas);
      };
  return (
    <>
      <Navbar />
      
      <SearchBar className="search"/>
      <PokemonsFiltro className="filtro" />
          <Paginado
            pokemonPorPagina={pokemonPorPagina}
            todosPokemons={todosPokemons.length}
            paginado={paginado}
          />
          {pokemonsAct?.map((e) => {
              return (
                <fragment>
                  <Link to={"/Pokemons/" + e.id}>
                    <CardPokemon
                      name={e.name}
                      image={e.image}
                      types={e.types}
                    />
                  </Link>
                </fragment>
              );
            })} 
       </>
  );
}



export default Pokemons;
