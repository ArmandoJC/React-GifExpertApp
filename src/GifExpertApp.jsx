import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon ball"]);

  const onAddCategory = (event) => {
    //Valorant
    console.log("Entré a la función");
    const newCategory = "Valorant";

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

      {/* Listado de Gif */}
      <button onClick={onAddCategory}>Agregar</button>
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
