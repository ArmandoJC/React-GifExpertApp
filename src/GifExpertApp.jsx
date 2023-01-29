import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories((categories) => {
    //   return [...categories, newCategory];
    // });
  };

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de Gif */}
      {
        categories.map((category) => {
          return(
            <GifGrid key={ category } category= { category }/>
          )
        })
      }

      {/* Gif Item */}



    </>
  );
};
