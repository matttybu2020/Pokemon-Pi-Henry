import "./App.css";
import Landing from "./components/Landing/Landing.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
//import Home from "./components/Home/Home.jsx";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon.jsx";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail.jsx"
import { BrowserRouter, Route , Switch } from "react-router-dom";

import Pokemons from "./components/Pokemons/Pokemons";

/*function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Navbar />
          <Route path="/" component={<Landing />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/create" element={<Form />}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}*/


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route   exact path="/" component={Navbar}/>
      <Route  exact path="/home" component= { Pokemons } />
      <Route exact path="/create" component={CreatePokemon }/>
      <Route exact path="/home/:id" component={PokemonDetail} />
      </Switch>

    </div>
    </BrowserRouter>


);
}

export default App;
