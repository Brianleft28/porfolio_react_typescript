import { createContext, useEffect, useState } from "react";

export type Category = "all" | "backend" | "frontend" | '' ;

type CategoryContextType = {
  category: Category;
  setCategory: (category: Category) => void;
};

const CategoryContext = createContext<CategoryContextType>({
  category: "all",
  setCategory: () => {},
});

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<Category>(() => {
    const savedCategory = localStorage.getItem("category") as Category;
    return savedCategory || "all";
  });

  useEffect(() => {
    localStorage.setItem("category", category);
  }, [category]);
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, CategoryContext };