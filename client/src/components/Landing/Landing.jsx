import React, { Component } from "react";
import style from "../Style/Landing.module.css";
import { Link } from "react-router-dom";

export class Landing extends Component {
  render() {
    return (
      <div className={style.nada}>
        <div className={style.titleContainer}>
          <Link to="/home" className={style.title}>
            Pokémon
          </Link>
        </div>

        <br />

        <div className={style.mainContainer}></div>
      </div>
    );
  }
}

export default Landing;
