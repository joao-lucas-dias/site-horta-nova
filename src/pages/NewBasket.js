import { useContext } from "react";
import CategoriesList from "../components/categories/CategoriesList";
import ProductsList from "../components/products/ProductsList";
import Cart from "../components/cart/Cart";

import CategoryContext from "../context/CategoryContext";
import { CartContext } from "../context/CartContext";

// This is for development purposes only.
// Deploy app should get this file from database
import * as productsData from "../data/products_data.json";

const { data } = productsData;

const NewBasket = () => {
  const categoryContext = useContext(CategoryContext);
  const cartContext = useContext(CartContext);

  const productsIndex = data.products.findIndex((categoryProducts) => {
    return categoryProducts.category === categoryContext.filteredCategory;
  });

  const filteredProducts = data.products[productsIndex].items.map((item) => {
    return {
      id: data.products[productsIndex].category + "_" + item.title,
      ...item
    };
  });

  const toggleCartHandler = () => {
    cartContext.toggleCart();
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
    >
      <div>
        <h1>Personalize o seu Cabaz</h1>
        <CategoriesList categories={data.categories} />
        <ProductsList products={filteredProducts} />
      </div>
      <div style={{ width: "25rem" }}>
        <div>
          <button onClick={toggleCartHandler}>O meu Cabaz</button>
          {cartContext.items.length}
        </div>
        {cartContext.cartVisibility && <Cart onBackdropClick={toggleCartHandler} />}
      </div>
    </div>
  );
};

export default NewBasket;
