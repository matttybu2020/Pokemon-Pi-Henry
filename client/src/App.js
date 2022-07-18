import "./App.css";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar.jsx";
//import SearchBar from "./components/SearchBar/SearchBar";
//<Route exact patch="/Pokemons" component={SearchBar}/>
//import Home from "./components/Home/Home.jsx";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon.jsx";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail.jsx";
import { BrowserRouter, Route , Switch} from "react-router-dom";

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
      <Route exact path="/" component={Navbar} />
      
      <Route exact path="/Pokemons" component={Pokemons} />
      <Route exact path="/Pokemons/:id" component={PokemonDetail} />
      <Route  path="/create" component={CreatePokemon} />
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
