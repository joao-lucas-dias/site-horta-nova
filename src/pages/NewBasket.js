import { Fragment } from "react";
import CategoriesList from "../components/products/CategoriesList";
import ProductsList from "../components/products/ProductsList";

// This is for development purposes only. Deploy app should get this file from database
import data from "../assets/lista_produtos.json";

const productsInfo = JSON.parse(data);

console.log(productsInfo);

const NewBasket = () => {
  return (
    <Fragment>
      <h1>Personalize o seu Cabaz</h1>
      <CategoriesList categories={data.categories}/>
      <ProductsList products={data.products}/>
    </Fragment>
  );
};

export default NewBasket;
