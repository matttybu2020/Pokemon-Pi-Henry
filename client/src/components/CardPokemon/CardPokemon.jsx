
import style from "../Style/CardPokemon.module.css";

function CardPokemon({ name, types, image }) {
  return (
    <div className={style.titulocard}>
      <h2 className={style.nombre}>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <img  src={image} alt="imagen"  className={style.imagen}  width="120px"  heigth="120px" />

      <ul className={style.tipos}>
        <li className="name">

          {
          typeof types[0] === "string"
            ? types[0].charAt(0).toUpperCase() + types[0].slice(1)
            : types[0]?.name.charAt(0).toUpperCase() + types[0].name.slice(1)}
          {
          typeof types[1] === "string" ? " - " + types[1] : types[1]?.name}
        </li>
      </ul>
    </div>
  );
}

export default CardPokemon;


