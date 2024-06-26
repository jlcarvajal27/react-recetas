import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecetaModal from "./components/RecetaModal";
import RecetasGrid from "./components/RecetasGrid";
import Favoritos from "./components/Favoritos";
import SelectReceta from "./components/SelectReceta";
import {
  getCategories,
  getRecipeById,
  getRecipesByCategory,
} from "./services/service-receta";

function App() {
  const [categorias, setCategorias] = useState([]);
  const [recetas, setRecetas] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

  useEffect(() => {
    const obtenerCategorias = async () => {
      const { data, ok } = await getCategories();
      if (ok) {
        setCategorias(data);
      } else {
        console.error("Error fetching categories:", data);
      }
    };

    obtenerCategorias();
  }, []);

  useEffect(() => {
    if (categoriaSeleccionada) {
      const obtenerRecetas = async () => {
        const { data, ok } = await getRecipesByCategory(categoriaSeleccionada);
        if (ok) {
          setRecetas(data);
        } else {
          console.error("Error fetching recipes:", data);
        }
      };

      obtenerRecetas();
    }
  }, [categoriaSeleccionada]);

  const manejarCambioCategoria = (e) => {
    setCategoriaSeleccionada(e.target.value);
  };

  const seleccionarReceta = async (id) => {
    const { data, ok } = await getRecipeById(id);
    if (ok) {
      setRecetaSeleccionada(data);
    } else {
      console.error("Error fetching recipe details:", data);
    }
  };

  const cerrarModal = () => {
    setRecetaSeleccionada(null);
  };

  return (
    <Router>
      <Navbar />
      <div className="bg-black text-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SelectReceta
                  manejarCambioCategoria={manejarCambioCategoria}
                  categorias={categorias}
                  recetas={recetas}
                />

                <RecetasGrid
                  recetas={recetas}
                  seleccionarReceta={seleccionarReceta}
                />
                {recetaSeleccionada && (
                  <RecetaModal
                    receta={recetaSeleccionada}
                    cerrarModal={cerrarModal}
                  />
                )}
              </>
            }
          />
          <Route
            path="/favoritos"
            element={
              <Favoritos
                seleccionarReceta={seleccionarReceta}
                recetaSeleccionada={recetaSeleccionada}
                recetas={recetas}
                cerrarModal={cerrarModal}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
