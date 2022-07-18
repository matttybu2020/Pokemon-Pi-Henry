import React from "react";
import { useState} from "react";
import { useDispatch } from "react-redux";
import { buscarPokemon } from "../../store/actions/index"
//import style from "../Style/SearchBar.module.css"


function SearchBar(){

    const dispatch = useDispatch();
    const [name, setName] = useState("")


    const handleInputchange = (e) =>{ e.prevenDefault();
        setName(e.target.value);

    }
    const handleSubmit = (e) => { e.prevenDefault();
        dispatch(buscarPokemon(name))
    }

    return(
        <div>
            <input className="Buscar" tipe="text" onChange ={(e) => handleInputchange(e)} placeholder="Busca tu pokemon..."></input>
            <button className="boton" tipe ="submit" onClick={(e)=> handleSubmit(e)}>Buscar</button>
        </div>
    )





}
export default SearchBar;