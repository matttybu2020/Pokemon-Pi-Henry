import style from "../Style/Navbar.module.css";
import { Link } from "react-router-dom";
import logo from '../Style/img/logo.png'


function Navbar() {
  return (
      <header id="navegador" className={style.nav}>
        <Link to="/">
        <h1 className={style.title}> Volver </h1>
        </Link>
        <h1 className={style.title}><img className={style.logo} src={logo} alt="" /> </h1>
       <div> 
        <Link to="/create"  >
        <h2 className={style.subtitle}> Crear Pokémon </h2>
            </Link></div>
        </header>
  );
}

export default Navbar;
