import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "../Style/CreatePokemon.module.css";
import { getType, postPokemon } from "../../store/actions/index";


//! validar parametros de ingreso "attack","heigh"

function validar(pokemon) {
  let errors = {};
  if (!pokemon.name) {
    errors.name = "Por favor ingrese un nombre";
  }
  if (!pokemon.life > 255 ) {
    errors.life = 'Valor de vida Superado';
}
  return errors;
}

//!Funtion crear Pokemon

function CreatePokemon() {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);

  const [errors, setErrors] = useState({});

  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    type: [],
  });

  useEffect(() => {
    dispatch(getType());
  }, []);

  function handleSelect(e) {
    setPokemon({
      ...pokemon,
      type: [...pokemon.type, e.target.value],
    });
  }

  //cambio de contenido

  function onInputChange(e) {
    e.preventDefault();
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validar({
        ...pokemon,
        [e.target.name]: e.target.value,
      })
    );
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(pokemon));
    alert("Personaje creado correctamente");
    setPokemon({
      name: "",
      image: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      type:[],
    });
    history.push("/Pokemons");
  }

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <h3 className={style.title}> Crea Tu Pokemon !!!</h3>

      <label for="name"> Nombre: </label>
      <input
        onChange={onInputChange}
        id="name"
        name="name"
        type="text"
        value={pokemon.name}
        required
        className="input"
      />{" "}
      {errors.name && <p className="error"> {errors.name}</p>}

      <label htmlFor="">Imagen: </label>
      <input
        onChange={onInputChange}
        name="image"
        type="text"
        value={pokemon.image}
        className="input"
      />{" "}

      <label htmlFor="">Vida: </label>
      <input
        onChange={onInputChange}
        name="hp"
        type="number"
        value={pokemon.hp}
        className="input"
      />{" "}

      <label htmlFor="">Fuerza: </label>
      <input
        onChange={onInputChange}
        name="attack"
        type="number"
        value={pokemon.attack}
        className="input"
      />{" "}

      <label htmlFor="">Defensa: </label>
      <input
        onChange={onInputChange}
        name="defense"
        type="number"
        value={pokemon.defense}
        className="input"
      />{" "}

      <label htmlFor="">Velocidad: </label>
      <input
        onChange={onInputChange}
        name="speed"
        type="number"
        value={pokemon.speed}
        className="input"
      />{" "}

            <label htmlFor="">Altura: </label>
      <input
        onChange={onInputChange}
        name="height"
        type="number"
        value={pokemon.height}
        className="input"
      />{" "}

      <label htmlFor="">Peso: </label>
      <input
        onChange={onInputChange}
        name="weight"
        type="number"
        value={pokemon.weight}
        className="input"
      />{" "}

      <p className="types-s">
        <select onChange={handleSelect}>
          {types.map((e) => (
            <option value={e.name}>{e.name}</option> //filtramos los tipos que vienen por get
          ))}{" "}

        </select>
        <ul>
          <li>{pokemon.type.map((e) => e + " , ")}</li>
        </ul>
      </p>
      <Link to="/Pokemons">
        <button type="submit" className={style.atras}>
          Volver
        </button>
      </Link>
      <button type="submit" className={style.bottom}>
        Crear !!
      </button>
    </form>
  );
}

export default CreatePokemon;
