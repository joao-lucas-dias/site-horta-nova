import { Fragment } from "react";

const CategoriesList = (props) => {
  return (
    <Fragment>
      <h2>Categorias</h2>
      <ul>
        {props.categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default CategoriesList;
