     const ingredientInput = document.getElementById('ingredientInput');
    const cuisineSelect = document.getElementById('cuisineSelect');
    const searchBtn = document.getElementById('searchBtn');
    const recipesContainer = document.getElementById('recipesContainer');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');

    const API_KEY = '1';

    async function fetchRecipes() {
      const ingredients = ingredientInput.value.trim() || 'chicken';
      const cuisine = cuisineSelect.value;

      recipesContainer.innerHTML = '';
      error.textContent = '';
      loading.textContent = 'Loading recipes...';

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/${API_KEY}/filter.php?i=${ingredients}`
        );

        const data = await response.json();

        if (!data.meals) {
          loading.textContent = '';
          error.textContent = 'No recipes found.';
          return;
        }

        const detailedRecipes = await Promise.all(
          data.meals.slice(0, 12).map(async (meal) => {
            const detailResponse = await fetch(
              `https://www.themealdb.com/api/json/v1/${API_KEY}/lookup.php?i=${meal.idMeal}`
            );

            const detailData = await detailResponse.json();
            return detailData.meals[0];
          })
        );

        const filteredRecipes = cuisine === 'All'
          ? detailedRecipes
          : detailedRecipes.filter(recipe =>
              recipe.strArea.toLowerCase() === cuisine.toLowerCase()
            );

        loading.textContent = '';

        if (filteredRecipes.length === 0) {
          error.textContent = 'No recipes match the selected cuisine.';
          return;
        }

        filteredRecipes.forEach(recipe => {
          const card = document.createElement('div');
          card.classList.add('recipe-card');

          card.innerHTML = `
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">

            <div class="recipe-content">
              <div class="tags">
                <span class="tag">${recipe.strArea}</span>
                <span class="tag">${recipe.strCategory}</span>
              </div>

              <h3>${recipe.strMeal}</h3>

              <p>
                ${recipe.strInstructions.slice(0, 140)}...
              </p>

              <div class="recipe-buttons">
                <a class="btn" href="${recipe.strYoutube}" target="_blank">
                  Watch Video
                </a>

                <a class="btn secondary-btn" href="${recipe.strSource || recipe.strYoutube}" target="_blank">
                  View Recipe
                </a>
              </div>
            </div>
          `;

          recipesContainer.appendChild(card);
        });
      }

      catch (err) {
        loading.textContent = '';
        error.textContent = 'Failed to fetch recipes. Please try again.';
      }
    }

    searchBtn.addEventListener('click', fetchRecipes);

    window.addEventListener('load', fetchRecipes);