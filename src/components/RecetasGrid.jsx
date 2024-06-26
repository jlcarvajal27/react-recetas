import React from "react";
import RecetaCard from "./RecetaCard";

const RecetasGrid = ({ recetas, seleccionarReceta }) => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-2">
      {recetas.map((receta) => (
        <RecetaCard
          key={receta.idMeal}
          receta={receta}
          seleccionarReceta={seleccionarReceta}
        />
      ))}
    </div>
  );
};

export default RecetasGrid;
