import axios from "axios";

function getPokemons() {
    return async function (dispatch) {
        var json =await axios.get("/pokemons");
        dispatch({
            type: "OBTENER_POKEMONS",
            payload: json.data,
        });
    };
}




export default getPokemons