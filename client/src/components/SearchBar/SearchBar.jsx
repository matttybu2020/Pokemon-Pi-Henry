import React from "react";
import { usestate} from "react";
import { useDispatch } from "react-redux";
import { buscarPokemon } from "../../store/actions/index"
import style from "../Style/SearchBar.module.css"


function SearchBar(){

    const dispatch = useDispatch();
    const [name, setName] = usestate("");


    const handleInputchange = (e) =>{ e.prevenDefault();
        setName(e.target.value);

    }
    const handleSubmit = (e) => { e.prevenDefault();
        dispatch(buscarPokemon(name))
    }

    return(
        <div>
            <input className={style.Buscar} tipe="text" onChange ={(e) => handleInputchange(e)} placeholder="Busca tu pokemon..."></input>
            <button className={style.boton} tipe ="submit" onClick={(e)=> handleSubmit(e)}>Buscar</button>
        </div>
    )





}
export default SearchBar;