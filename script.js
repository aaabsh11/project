// Пример данных о рецептах (в реальном приложении данные будут получены с сервера или храниться в JSON-файле)
const recipes = [
  {
    id: 1,
    title: "Паста карбонара",
    ingredients: ["спагетти", "гуанчиале", "яйца", "пармезан"],
    instructions: "Готовим...",
  },
  {
    id: 2,
    title: "Куриный суп",
    ingredients: ["курица", "картофель", "морковь", "лук"],
    instructions: "Готовим...",
  },
  {
    id: 3,
    title: "Салат Цезарь",
    ingredients: ["куриное филе", "салат", "помидоры", "сыр", "гренки"],
    instructions: "Готовим...",
  },
];

function displayRecipes(recipes) {
  const recipesContainer = document.getElementById("recipes-container");
  recipesContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.innerHTML = `
            <h3>${recipe.title}</h3>
            <p>Ингредиенты: ${recipe.ingredients.join(", ")}</p>
            <button onclick="viewRecipe(${
              recipe.id
            })">Посмотреть рецепт</button>
        `;
    recipesContainer.appendChild(recipeCard);
  });
}

function viewRecipe(id) {
  const recipe = recipes.find((recipe) => recipe.id === id);
  if (recipe) {
    document.getElementById("recipe-title").textContent = recipe.title;
    document.getElementById("recipe-ingredients").innerHTML = recipe.ingredients
      .map((ingredient) => `<li>${ingredient}</li>`)
      .join("");
    document.getElementById("recipe-instructions").textContent =
      recipe.instructions;
  } else {
    alert("Рецепт не найден");
  }
}

document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = document
      .getElementById("search-input")
      .value.toLowerCase();
    const results = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm)
    );
    displayRecipes(results);
  });

displayRecipes(recipes);
