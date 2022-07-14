import { useContext } from "react";
import CategoriesList from "../components/categories/CategoriesList";
import ProductsList from "../components/products/ProductsList";
import Navbar from "../components/layout/Navbar";

import CategoryContext from "../context/CategoryContext";

import "../components/layout/Navbar.css";

// This is for development purposes only.
// Deploy app should get this file from database
import * as productsData from "../data/products_data.json";


const { data } = productsData;

const NewBasket = () => {
  const categoryContext = useContext(CategoryContext);

  const productsIndex = data.products.findIndex((categoryProducts) => {
    return categoryProducts.category === categoryContext.filteredCategory;
  });

  const filteredProducts = data.products[productsIndex].items.map((item) => {
    return {
      id: data.products[productsIndex].category + "_" + item.title,
      ...item
    };
  });

  return (
    <div
      style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
    >
      <Navbar />
      <div style={{ marginTop: "6rem", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <CategoriesList categories={data.categories} />
        <ProductsList products={filteredProducts} />
      </div>
    </div>
  );
};

export default NewBasket;
