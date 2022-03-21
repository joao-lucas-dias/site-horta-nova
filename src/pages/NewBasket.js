import { Fragment } from "react";
import CategoriesList from "../components/products/CategoriesList";
import ProductsList from "../components/products/ProductsList";

const NewBasket = () => {
  return (
    <Fragment>
      <h1>Personalize o seu Cabaz</h1>
      <CategoriesList />
      <ProductsList />
    </Fragment>
  );
};

export default NewBasket;
