import { getRecipeById } from "../services/service-receta";

export const agregarFavorito = (receta) => {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
  localStorage.setItem("favoritos", JSON.stringify([...favoritos, receta]));
};

export const eliminarFavorito = (id) => {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const nuevosFavoritos = favoritos.filter((favorito) => favorito.id !== id);
  localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
};
export const obtenerFavoritos = () => {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  return favoritos;
};

export const existeStorage = (id) => {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
  return favoritos.some((favorito) => favorito.id === id);
};
