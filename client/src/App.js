import "./App.css";
import Landing from "./components/Landing/Landing.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Form from "./components/Form/Form.jsx";
import { Route } from "react-router-dom";

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
    <div className="App">

      <Route exact path="/" component={Landing } />
      <Route exact path="/home" component={Navbar}/>
      <Route exact path="/home" component={ Home } />
      <Route exact path="/create" component={ Form }/>

    </div>



);
}

export default App;
