import { useContext } from "react";
import CategoriesList from "../components/Categories/CategoriesList";
import ProductsList from "../components/Products/ProductsList";

import CategoryContext from "../store/category-context";

// This is for development purposes only.
// Deploy app should get this file from database
import * as productsData from "../assets/lista_produtos.json";
import Cart from "../components/Cart/Cart";
const { data } = productsData;

const NewBasket = () => {
  const ctx = useContext(CategoryContext);

  const productsIndex = data.products.findIndex((categoryProducts) => {
    return categoryProducts.category === ctx.filteredCategory;
  });

  const filteredProducts = data.products[productsIndex].items.map((item) => {
    return {
      id: data.products[productsIndex].category + "_" + item.title,
      ...item
    }
  });

  return (
    <main style={{"display": "flex", "flexDirection": "row", "justifyContent": "space-between"}}>
      <section>
        <h1>Personalize o seu Cabaz</h1>
        <CategoriesList categories={data.categories} />
        <ProductsList products={filteredProducts} />
      </section>
      <aside style={{"width": "25rem"}}>
        <Cart />
      </aside>
    </main>
  );
};

export default NewBasket;
