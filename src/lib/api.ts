// utils/api.js
export const fetchRecipes = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/recipes/");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
