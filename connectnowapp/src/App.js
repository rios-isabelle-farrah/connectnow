import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">

      <Router>
          <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={AboutUs} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
