import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import LocationDetails from "./Components/LocationDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/location/:id" component={LocationDetails} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
