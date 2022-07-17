
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../store/actions";
import { Link } from "react-router-dom";
//import  ball  from '../Style/img/ball.png'
import { style } from "../Style/PokemonDetail.module.css";




function PokemonDetail(props) {

   const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
    }, []);

let detalles = useSelector ((state) => state.detalles);
console.log(detalles) 
return(
    <div className={style.contenedor}>
        <div className={style.volver}>
            <Link to="/home" className={style.carta}> Volver </Link> </div>
            <div>
                { detalles.length ? (
                     detalles.map((p) => (
                     <Link to= {`/home/${p.id}`}>

                    <div>
                        <h1 className={style.name} >{p.name.toUpperCase()} </h1>
                        <h2 className={style.id} > #{p.id} </h2>
                    </div>

                    <div>
                        <img  className={style.imagen} src={p.image} alt="" width="250px" heigth="250px"/>
                        {p.types.length === 2 ?(

                    <div> 
                        <h3 className={style.type1}>
                        <ul className={style.type2}>

                            <li>
                                {typeof p.types[0] === 'string' ? p.types[0] : p.types[0]?.name}
                                -
                                {typeof p.types[1] === 'string' ? p.types[1] : p.types[1]?.name}
                                
                            </li>
                            </ul>
                            </h3>
                            </div>  

            ) : (
                <div>
                    <h3 className={style.type2}>{typeof p.types[0] === 'string' ? p.types[0] : p.types[0]?.name}

                    </h3>
                </div>
            )}

            <div>
                <h4>
                    <ul>
                        <li className={style.lista}>
                            Vida:{p.life} Ps -
                            Fuerza:{p.attack} % -
                            defensa :{p.defense} %-
                            Velocidad:{p.speed} %-
                            Altura: {p.heigth} Mt-
                            Peso: {p.weight} KG
                         </li>
                    </ul>
                </h4>

        </div>
    </div> 
    </Link>     
))
):(
    <img src={"https://c.tenor.com/8sTMqGWjYAQAAAAC/ball-pokemon.gif"} width="250px" height="300px"
    alt="Not found"
    />
)}
</div>
</div>

);
}

export default PokemonDetail;