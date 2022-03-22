import { useContext } from "react";
import CategoryContext from "../../store/category-context";

const CategoryItem = (props) => {
  const ctx = useContext(CategoryContext);

  const onClickHandler = (event) => {
    ctx.onCategoryFilter(event.target.innerText);
  };

  return (
    <li key={props.category}>
      <button onClick={onClickHandler}>{props.category}</button>
    </li>
  );
};

export default CategoryItem;
