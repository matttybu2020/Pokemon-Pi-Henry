import axios from "axios";



export function postPokemon(payload) {
  return async function () {
    const response = await axios.post(
      "http://localhost:3001/pokemons",
      payload
    );
    return response;
  };
}


export function buscarPokemon(name) {
  return async function (dispatch) {
    try {
      var buscarPoke = await axios.get(
        "http://localhost:3001/pokemons?name=" + name
      );
      //var buscarPoke = await axios.get(`http://localhost:3001/pokemons?name="+ ${name}`);
      // console.log(json)
      return dispatch({
        type: "SEARCH_NAME",
        payload: buscarPoke.data,
      });
    } catch {
      return alert("No se pudo encontrar el pokemon");
    }
  };
}


export function filtrarPokemonTipo(payload) {
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
}


export function Sort(order) {
  return {
    type: "SORT",
    paylaod: order,
  };
}


export function filtroCrear(payload) {
  return {
    type: "FILTER_CREATED",
    payload
  };
}


export function filtrarPokemonAtaque(payload) {
  return {
    type: "FILTER_BY_ATTACK",
    payload,
  };
}


export default function getPokemons() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/pokemons");
    console.log(json.data);
    dispatch({
      type: "GET_POKEMONS",
      payload: json.data,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/pokemons/${id}`);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}


export function getType() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/types");
    return dispatch({
      type: "GET_TYPE",
      payload: json.data,
    });
  };
}


