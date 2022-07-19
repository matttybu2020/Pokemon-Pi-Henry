import React from "react";
import { useState} from "react";
import { useDispatch } from "react-redux";
import { buscarPokemon } from "../../store/actions/index"
//import  "../SearchBar.css"


export default function SearchBar(){

    const dispatch = useDispatch();
    const [name, setName] = useState("")
  
  
    
    const handleInputChange = (e) => {
      e.preventDefault()
      setName(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(buscarPokemon (name))
    }
  
    return (
      <div>
        <input class="search1" type="text" onChange= {(e) => handleInputChange(e)} placeholder="Buscar pokemon..."
        />
        <button class ="boton" type="submit" onClick= {(e) => handleSubmit(e)}> Buscar </button>
      </div>
    );
  }



