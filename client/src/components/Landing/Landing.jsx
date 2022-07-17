import  { Component } from "react";
import style from "../Style/Landing.module.css";
import { Link } from "react-router-dom";
import logo from "../Style/img/logo.png";

export class Landing extends Component {
  render() {
    return (
      <div className={style.nada}>
        <div className={style.titleContainer}>
          
          <Link to="/Pokemons"><img className={style.logo} src={logo} alt="" /></Link>
        </div>

        <br />

        <div className={style.mainContainer}></div>
      </div>
    );
  }
}

export default Landing;
