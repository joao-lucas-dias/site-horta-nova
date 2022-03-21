import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
