import React from "react";
//import CardPokemon from "../CardPokemon/CardPokemon.jsx";
//import style from "../Style/CardPokemon.module.css";
import Navbar from "../Navbar/Navbar.jsx";
//import SearchBar from "../SearchBar/SearchBar.jsx";
//import { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import  getPokemons from '../../store/actions/index';
//import { Link } from "react-router-dom";
//import Navbar from "../Navbar/Navbar.jsx"
//import SearchBar from "../SearchBar/SearchBar.jsx"





function Pokemons(){

    /*const dispatch = useDispatch();

<div
    const todosPokemons = useSelector((state) => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPorPagina ] = useState(12);
    const indUltPokemons = currentPage * pokemonPorPagina ;
    const primPokemons = indUltPokemons - pokemonPorPagina ;
    const pokemonsAct = todosPokemons.slice(primPokemons , indUltPokemons);
    const paginado = (pageNumber) => {setCurrentPage(pageNumber);};

*/

/*let todoPokemons = useSelector(state => state.pokemons);
let dispatch= useDispatch();

useEffect(() =>{
    dispatch(getPokemons)
}, [dispatch]);*/


return (
    <>
<Navbar/>


<div>
    <h1>soy el home</h1>
</div>

</>

);
}










export default Pokemons;
