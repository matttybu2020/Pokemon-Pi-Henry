import "../Paginado/Paginado.css"
//import style from "../Style/Paginado.module.css";

function Paginado({ paginado, pokemonPorPagina, todosPokemons }) {
  const numPaginas = [];
  for (let i = 1; i <= Math.ceil(todosPokemons / pokemonPorPagina); i++) {
    numPaginas.push(i);
  }

  return (
    <nav>
      <ul className="pagina">
        {numPaginas.map((number) => {
          return (
            <li className="numero" key="num">
              <button className="boton1" onClick={() => paginado(number)}>
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
