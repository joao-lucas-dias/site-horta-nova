import { Route, Redirect, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NewBasket from "./pages/NewBasket";
import { CategoryContextProvider } from "./store/category-context";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/new-basket">
        <CategoryContextProvider>
          <NewBasket />
        </CategoryContextProvider>
      </Route>
    </Switch>
  );
}

export default App;
