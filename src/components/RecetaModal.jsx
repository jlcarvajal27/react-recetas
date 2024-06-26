import { useState, useEffect } from "react";
import {
  agregarFavorito,
  eliminarFavorito,
  existeStorage,
} from "../utils/utils";

const RecetaModal = ({ receta, cerrarModal, actualizarFavoritos }) => {
  const { idMeal, strMeal, strMealThumb, strInstructions, strYoutube } = receta;

  const [textButton, setTextButton] = useState("");

  useEffect(() => {
    if (existeStorage(idMeal)) {
      setTextButton("Eliminar de Carrito");
    } else {
      setTextButton("Guardar en Carrito");
    }
  }, [idMeal]);

  const handleFavoritoClick = () => {
    if (existeStorage(idMeal)) {
      eliminarFavorito(idMeal);
      setTextButton("Guardar en Carrito");
      actualizarFavoritos(idMeal);
      cerrarModal();
    } else {
      agregarFavorito({ id: idMeal, titulo: strMeal, img: strMealThumb });
      setTextButton("Eliminar de Carrito");
    }
  };

  return (
    <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white p-6 rounded-lg w-[30rem] max-h-[95vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{strMeal}</h2>
        <img
          className="w-[27rem] h-[15rem] mb-4 rounded-md"
          src={strMealThumb}
          alt={`Receta ${strMeal}`}
        />
        <h3 className="text-xl font-semibold mb-2">
          Ingredientes y Cantidades
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 list-disc pl-5">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
            const ingrediente = receta[`strIngredient${i}`];
            const cantidad = receta[`strMeasure${i}`];
            return (
              ingrediente && (
                <li
                  key={i}
                  className="mb-1"
                >{`${ingrediente} - ${cantidad}`}</li>
              )
            );
          })}
        </ul>
        <p>Link para ver la receta completa:</p>
        <a
          className="underline text-blue-500"
          target="_blank"
          href={strYoutube}
        >
          {strYoutube}
        </a>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleFavoritoClick}
            className="align-middle font-sans font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-red-900 text-white shadow-md shadow-red-900/10 hover:shadow-lg"
          >
            {textButton}
          </button>
          <button
            onClick={cerrarModal}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecetaModal;
