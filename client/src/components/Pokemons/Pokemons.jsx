import React from 'react';
import CardPokemon from '../CardPokemon/CardPokemon.jsx';
//import style from '../Style/CardPokemon.module.css';
import Paginado from '../Paginado/Paginado.jsx';
import Navbar from "../Navbar/Navbar.jsx";
import SearchBar from '../SearchBar/SearchBar.jsx';
// <SearchBar className="search"/>
import { useState} from "react";
import {  useSelector } from "react-redux";
//import  getPokemons from '../../store/actions/index';
//import { buscarPokemon } from "../../store/actions/index"
import { Link } from "react-router-dom";
//import {filtrarPokemonAtaque,filtroCrear,filtrarPokemonTipo,Sort} from '../../store/actions/index'
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
    
      /* const dispatch = useDispatch();
      
      
      useEffect(() => {
        dispatch(getPokemons());
      }, [dispatch]);
    
      function handleFiltrarPokemonTipo(e) {
        dispatch(filtrarPokemonTipo(e.target.value));
      }
    
      function handlefiltroCrear(e) {
        dispatch(filtroCrear(e.target.value));
      }
    
      function handlefiltrarPokemonAtaque(e) {
        dispatch(filtrarPokemonAtaque(e.target.value));
      }
    
      function onSelectsChange(e) {
        dispatch(Sort(e.target.value));
      }*/
    
//Prueba beta buscar Pokemon

   
    /*  const dispatch = useDispatch();
    const [name, setName] = useState("")
    const handleInputchange = (e) =>{ e.prevenDefault();
      setName(e.target.value);

  }
  const handleSubmit = (e) => { e.prevenDefault();
      dispatch(buscarPokemon(name))
  }
  <div>
  <input className="Buscar" tipe="text" onChange ={(e) => handleInputchange(e)} placeholder="Busca tu pokemon..."></input>
  <button className="boton" tipe ="submit" onClick={(e)=> handleSubmit(e)}>Buscar</button>
</div>*/















return (
    <>
      <Navbar />
      
      <SearchBar className="search"/>
      <PokemonsFiltro className="filtro" />

      {/*<div className="home">
        <div>
          <select name={style.select} onChange={onSelectsChange} className="a-z">
            <option value="Filtro"> A-Z:</option>
            <option value="ASCENDENTE">Ascendente</option>
            <option value="DESCENDENTE">Descendente</option>
          </select>
          <select
            name={style.select}
            onChange={handlefiltrarPokemonAtaque}
            className="attack"
          >
            <option value="Fuerza"> Fuerza </option>
            <option value="Mayor fuerza">Mayor fuerza</option>
            <option value="Menor fuerza">Menor fuerza</option>
          </select>
          <select onChange={handleFiltrarPokemonTipo}>
            <option value="type"> Tipo </option>
            <option value="normal"> Normal </option>
            <option value="flying"> Flying </option>
            <option value="poison"> Poison </option>
            <option value="ground"> Ground </option>
            <option value="bug"> Bug </option>
            <option value="fire"> Fire </option>
            <option value="water"> Water </option>
            <option value="grass"> Grass </option>
            <option value="electric"> Electric </option>
            <option value="fairy"> Fairy </option>
          </select>
          <select onChange={handlefiltroCrear}>
            <option value="Todos"> Todos </option>
            <option value="Creados"> Creados </option>
            <option value="Existentes"> Existentes </option>
          </select>*/}

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
           
        {/*</div>
      </div>*/}
    </>
  );
}



export default Pokemons;
