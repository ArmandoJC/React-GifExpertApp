import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon ball"]);

  const onAddCategory = (newCategory) => {
    //Valorant
    console.log(newCategory);
    // const newCategory = "Valorant";

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
        // setCategories={ setCategories} 
        onNewCategory={ (value) => onAddCategory(value)}
      />


      {/* Listado de Gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          // return <li>Hola</li>
          return <li key={category}>{category}</li>;
        })}
        {/* <li>ABC</li> */}
      </ol>

      {/* Gif Item */}
    </>
  );
};
