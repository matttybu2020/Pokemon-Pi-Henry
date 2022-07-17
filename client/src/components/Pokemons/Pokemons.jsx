import React from "react";
import CardPokemon from "../CardPokemon/CardPokemon.jsx";
import style from "../Style/CardPokemon.module.css";
import Paginado from "../Paginado/Paginado.jsx"
import Navbar from "../Navbar/Navbar.jsx";
//import SearchBar from '../SearchBar/SearchBar.jsx';
//<SearchBar className="search"/>
import { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import  getPokemons from '../../store/actions/index';
import { Link } from "react-router-dom";
import {filtrarPokemonAtaque,filtroCrear,filtrarPokemonTipo,Sort} from '../../store/actions/index'






function Pokemons(){

    const dispatch = useDispatch();


    const todosPokemons = useSelector((state) => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPorPagina ] = useState(12);
    const indUltPokemons = currentPage * pokemonPorPagina ;
    const primPokemons = indUltPokemons - pokemonPorPagina ;
    const pokemonsAct = todosPokemons.slice(primPokemons , indUltPokemons);
    



    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    
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
      }
    
return (
    <>
      <Navbar />
     
      <div className="home">
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
          </select>
          <Paginado
            pokemonsPerPage={pokemonPorPagina}
            allPokemons={todosPokemons.length}
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
        </div>
      </div>
    </>
  );
}



export default Pokemons;
