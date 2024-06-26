import React, { useEffect, useState } from "react";
import {
  obtenerFavoritos,
  eliminarFavorito,
  existeStorage,
  agregarFavorito,
} from "../utils/utils";
import RecetaModal from "./RecetaModal";

const Favoritos = ({ seleccionarReceta, recetaSeleccionada, cerrarModal }) => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosGuardados = obtenerFavoritos();
    setFavoritos(favoritosGuardados);
  }, []);

  const handleFavoritoClick = (idMeal) => {
    if (existeStorage(idMeal)) {
      eliminarFavorito(idMeal);
      setFavoritos(favoritos.filter((favorito) => favorito.id !== idMeal));
    } else {
      const favorito = favoritos.find((fav) => fav.id === idMeal);
      agregarFavorito({
        id: idMeal,
        titulo: favorito.titulo,
        img: favorito.img,
      });
    }
  };

  const actualizarFavoritos = (idMeal) => {
    setFavoritos(favoritos.filter((favorito) => favorito.id !== idMeal));
  };

  const seleccionarRecetaInterna = async (idMeal) => {
    await seleccionarReceta(idMeal);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mis Favoritos</h1>
      {favoritos.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoritos.map((favorito) => (
            <div
              key={favorito.id}
              className="flex flex-col justify-between mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full"
            >
              <div className="h-56 mx-4 mt-4 text-white shadow-lg rounded-xl">
                <img
                  src={favorito.img}
                  alt={`Imagen de la favorito ${favorito.strMeal}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h5 className="block mb-2 font-sans text-xl font-semibold text-center">
                  {favorito.titulo}
                </h5>
              </div>
              <div className="flex justify-between items-center p-6">
                <button
                  className="align-middle font-sans font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg"
                  onClick={() => {
                    seleccionarRecetaInterna(favorito.id);
                  }}
                >
                  Ver receta
                </button>
                <button
                  className="align-middle font-sans font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-red-900 text-white shadow-md shadow-red-900/10 hover:shadow-lg"
                  onClick={() => handleFavoritoClick(favorito.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay favoritos aún.</p>
      )}

      {recetaSeleccionada && (
        <RecetaModal
          receta={recetaSeleccionada}
          cerrarModal={cerrarModal}
          actualizarFavoritos={actualizarFavoritos}
        />
      )}
    </div>
  );
};

export default Favoritos;
