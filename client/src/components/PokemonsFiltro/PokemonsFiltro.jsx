
import {filtrarPokemonAtaque,filtroCrear,filtrarPokemonTipo,Sort} from '../../store/actions/index'
//import '../PokemonsFiltro.css';
import  getPokemons from '../../store/actions/index';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function PokemonsFiltro(){

    const dispatch = useDispatch();

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

return(
    <>
    <div className="home">
        <div>
          <select name="select" onChange={onSelectsChange} className="a-z">
            <option value="Filtro"> A-Z:</option>
            <option value="ASCENDENTE">Ascendente</option>
            <option value="DESCENDENTE">Descendente</option>
          </select>
          <select
            name="select"
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
          </div>
          </div>
          </>
)
}
export default PokemonsFiltro;

