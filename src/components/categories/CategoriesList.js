import { Fragment } from "react";
import CategoryItem from "./CategoryItem";

const CategoriesList = (props) => {
  return (
    <Fragment>
      <h2>Categorias</h2>
      <ul>
        {props.categories.map((category) => {
          return <CategoryItem category={category} />;
        })}
      </ul>
    </Fragment>
  );
};

export default CategoriesList;
