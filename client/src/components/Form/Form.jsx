import style from "../Style/Form.module.css"
import { Link } from "react-router-dom"

function Form() {
  return (
    <>

    <div className={style.create}>
        <h1 >Crear aqui tu Pokémon</h1>
    <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="">Name: </label>
        <input type="text" placeholder="crea aqui tu Pokemon..." />
        <label htmlFor=""></label>
        <button className="buttoncrear">Crear Tu Pokémon</button>
        <Link to="/home"> <button className="buttonvolver">Volver </button> 
        </Link>

      </form>

    </div>
      
    </>
  );
}

export default Form;
