
import style from "../Style/Paginado.module.css";

function Paginado({ paginado, pokemonPorPagina, todosPokemons }) {
  const numPaginas = [];
  for (let i = 1; i <= Math.ceil(todosPokemons / pokemonPorPagina); i++) {
    numPaginas.push(i);
  }

  return (
    <nav>
      <ul className={style.paginado}>
        {numPaginas.map((number) => {
          return (
            <li className={style.numero} key="num">
              <button className={style.boton} onClick={() => paginado(number)}>
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Paginado;
