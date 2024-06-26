import React from "react";

const SelectReceta = ({ manejarCambioCategoria, categorias, recetas }) => {
  return (
    <>
      <div className="p-6">
        <h1>Selecciona una Categoría</h1>
        <select className="bg-black" onChange={manejarCambioCategoria}>
          <option value="">-- Selecciona una categoría --</option>
          {categorias.map((categoria) => (
            <option key={categoria.idCategory} value={categoria.strCategory}>
              {categoria.strCategory}
            </option>
          ))}
        </select>
      </div>
      <h2 className="text-center text-white font-bold text-xl my-5">
        {recetas.length ? "Resultados" : "No Hay Resultados"}
      </h2>
    </>
  );
};

export default SelectReceta;
