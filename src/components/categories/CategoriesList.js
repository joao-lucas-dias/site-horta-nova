import CategoryItem from "./CategoryItem";

const CategoriesList = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "30vw" }}>
      <h2>Categorias</h2>
      <ul>
        {props.categories.map((category) => {
          return <CategoryItem category={category} />;
        })}
      </ul>
    </div>
  );
};

export default CategoriesList;
