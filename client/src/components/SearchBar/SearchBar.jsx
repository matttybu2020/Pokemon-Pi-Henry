import { usestate} from "react";
import {useDispach} from "react-redux";
import { searchPokemon } from "./"
import style from "../Style/SearchBar.module.css"


function SearchBar(){

    const dispatch = useDispach();
    const [name, setName] = usestate("")


    const handleInputchange = (e) =>{ e.prevenDefault();
        setName(e.target.value);

    }
    const handleSubmit = (e) => { e.prevenDefault();
        dispatch(searchPokemon(name))
    }

    return(
        <div>
            <input className={style.Buscar} tipe="text" onChange ={(e) => handleInputchange(e)} placeholder="Busca tu pokemon..."></input>
            <button className={style.boton} tipe ="submit" onClick={(e)=> handleSubmit(e)}>Buscar</button>
        </div>
    )





}
export default SearchBar;