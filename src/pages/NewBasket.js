import { Fragment } from "react";
import CategoriesList from "../components/products/CategoriesList";
import ProductsList from "../components/products/ProductsList";

const productsInfo = JSON.parse(data);

console.log(productsInfo);

const NewBasket = () => {
  return (
    <Fragment>
      <h1>Personalize o seu Cabaz</h1>
    </Fragment>
  );
};

export default NewBasket;
