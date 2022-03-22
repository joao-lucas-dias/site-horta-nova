import { Fragment, useContext } from "react";
import CategoriesList from "../components/categories/CategoriesList";
import ProductsList from "../components/products/ProductsList";

import CategoryContext from "../store/category-context";

// This is for development purposes only.
// Deploy app should get this file from database
import * as productsData from "../assets/lista_produtos.json";
const { data } = productsData;

const NewBasket = () => {
  const ctx = useContext(CategoryContext);

  const productsIndex = data.products.findIndex((categoryProducts) => {
    return categoryProducts.category === ctx.filteredCategory;
  });

  const filteredProducts = data.products[productsIndex].items;

  return (
    <Fragment>
      <h1>Personalize o seu Cabaz</h1>
      <CategoriesList categories={data.categories} />
      <ProductsList products={filteredProducts} />
    </Fragment>
  );
};

export default NewBasket;
