import { Route, Redirect, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NewBasket from "./pages/NewBasket";
import CartContextProvider from "./context/CartContext";
import { CategoryContextProvider } from "./context/CategoryContext";

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
        <CartContextProvider>
          <CategoryContextProvider>
            <NewBasket />
          </CategoryContextProvider>
        </CartContextProvider>
      </Route>
    </Switch>
  );
}

export default App;
