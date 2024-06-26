export const getCategories = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();
    return { data: data.categories, ok: true };
  } catch (error) {
    return { data: error, ok: false };
  }
};

export const getRecipesByCategory = async (category) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await response.json();
    return { data: data.meals, ok: true };
  } catch (error) {
    return { data: error, ok: false };
  }
};

export const getRecipeById = async (id) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    return { data: data.meals[0], ok: true };
  } catch (error) {
    return { data: error, ok: false };
  }
};
