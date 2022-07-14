import { createContext, useState } from "react";

const CategoryContext = createContext({
  filteredCategory: "Aromáticas",
  onCategoryFilter: (category) => {}
});

export const CategoryContextProvider = (props) => {
  const [filteredCategory, setFilteredCategory] = useState("Aromáticas");

  const categoryFilterHandler = (category) => {
    setFilteredCategory(category);
  };

  return (
    <CategoryContext.Provider
      value={{
        filteredCategory: filteredCategory,
        onCategoryFilter: categoryFilterHandler
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
