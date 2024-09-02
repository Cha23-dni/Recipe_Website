// const API_KEY = ''; // TheMealDB does not require an API key
// const recipesList = document.querySelector("#recipe-list");
// const searchBar = document.querySelector("#search-bar");
// const addRecipeButton = document.querySelector("#add-recipe-button");
// const addRecipeFormContainer = document.querySelector("#add-recipe-form-container");
// const addRecipeForm = document.querySelector("#add-recipe-form");
// let recipes = [];

// // Function to display recipes
// function displayRecipes(recipes) {
//     recipesList.innerHTML = ""; // Clear the list

//     recipes.forEach((recipe, index) => { // Added `index` parameter
//         const recipeItem = document.createElement("li");
//         recipeItem.classList.add('recipe-item');
//         recipesList.appendChild(recipeItem);

//         const recipeImage = document.createElement("img");
//         recipeImage.src = recipe.strMealThumb; // Set the recipe image
//         recipeImage.alt = "recipe-image";
//         recipeItem.appendChild(recipeImage);
        
//         const recipeHeader = document.createElement("h2");
//         recipeHeader.innerText = recipe.strMeal; // Set the recipe title
//         recipeItem.appendChild(recipeHeader);
        
//         const recipeItemDiv = document.createElement("p");
//         recipeItemDiv.classList.add("recipe-item__ingredients-list");
//         recipeItemDiv.innerHTML = `<h2><strong>Ingredients:</strong></h2>`;

//         const recipeItemIngredients = document.createElement("ul");
//         recipeItemIngredients.classList.add("ingredients");
        
//         const ingredients = [
//             recipe.strIngredient1, recipe.strIngredient2, recipe.strIngredient3,
//             recipe.strIngredient4, recipe.strIngredient5, recipe.strIngredient6,
//             recipe.strIngredient7, recipe.strIngredient8, recipe.strIngredient9,
//             recipe.strIngredient10
//         ].filter(ingredient => ingredient);

//         ingredients.forEach((ingredient, idx) => {
//             const recipeItemIngredient = document.createElement("li");
//             recipeItemIngredient.classList.add("ingredients__ingredient");
//             recipeItemIngredient.innerText = `${ingredient} - ${recipe[`strMeasure${idx + 1}`] || ''}`;
//             recipeItemIngredients.appendChild(recipeItemIngredient);
//         });

//         recipeItemDiv.appendChild(recipeItemIngredients);
        
//         const recipeSourceLink = document.createElement("a");
//         recipeSourceLink.href = recipe.strSource || '#';
//         recipeSourceLink.target = "_blank";
//         recipeSourceLink.innerText = "View Recipe";

//         recipeItem.appendChild(recipeItemDiv);
//         recipeItem.appendChild(recipeSourceLink);

//         // Add a Remove button
//         const removeBtn = document.createElement("button");
//         removeBtn.classList.add("remove-btn");
//         removeBtn.innerText = "Remove Recipe";
//         recipeItem.appendChild(removeBtn);

//         // Add event listener to remove the recipe when the button is clicked
//         removeBtn.addEventListener("click", () => {
//             removeRecipe(index);
//         });
//     });
// }

// // Function to remove a recipe by its index
// function removeRecipe(index) {
//     recipes.splice(index, 1); // Remove the recipe from the array
//     displayRecipes(recipes); // Re-display the recipes
// }

// // Function to fetch recipes from TheMealDB API
// async function getRecipes() {
//     const response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?s=`
//     );

//     const data = await response.json();
//     return data.meals;
// }

// // Function to filter recipes based on search input
// function filterRecipes() {
//     const searchTerm = searchBar.value.toLowerCase();
    
//     const filteredRecipes = recipes.filter(recipe =>
//         recipe.strMeal.toLowerCase().includes(searchTerm)
//     );

//     displayRecipes(filteredRecipes);
// }

// // Show the Add Recipe form when the button is clicked
// addRecipeButton.addEventListener("click", () => {
//     addRecipeFormContainer.style.display = "block";
// });

// // Handle form submission to add a new recipe
// addRecipeForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const title = document.querySelector("#recipe-title").value;
//     const image = document.querySelector("#recipe-image").value;
//     const ingredients = document.querySelector("#recipe-ingredients").value.split(',');
//     const url = document.querySelector("#recipe-url").value;

//     // Create a new recipe object
//     const newRecipe = {
//         strMeal: title,
//         strMealThumb: image, // Ensure this is the correct image URL
//         strSource: url,
//         strIngredient1: ingredients[0] || '',
//         strIngredient2: ingredients[1] || '',
//         strIngredient3: ingredients[2] || '',
//         strIngredient4: ingredients[3] || '',
//         strIngredient5: ingredients[4] || '',
//         strIngredient6: ingredients[5] || '',
//         strIngredient7: ingredients[6] || '',
//         strIngredient8: ingredients[7] || '',
//         strIngredient9: ingredients[8] || '',
//         strIngredient10: ingredients[9] || ''
//     };

//     console.log('New Recipe:', newRecipe); // Debugging line

//     // Add the new recipe to the recipes array and display it
//     recipes.push(newRecipe);
//     displayRecipes(recipes);

//     // Clear the form and hide it
//     addRecipeForm.reset();
//     addRecipeFormContainer.style.display = "none";
// });

// // Initialize the app
// async function init() {
//     recipes = await getRecipes(); // Fetch recipes and store in `recipes` variable
//     displayRecipes(recipes);
// }

// // Add event listener to the search bar
// searchBar.addEventListener("input", filterRecipes);

// // Call init to fetch and display recipes
// init();



const API_KEY = ''; // TheMealDB does not require an API key
const recipesList = document.querySelector("#recipe-list");
const searchBar = document.querySelector("#search-bar");
const addRecipeButton = document.querySelector("#add-recipe-button");
const addRecipeFormContainer = document.querySelector("#add-recipe-form-container");
const addRecipeForm = document.querySelector("#add-recipe-form");
let recipes = [];

// Function to display recipes
function displayRecipes(recipes) {
    recipesList.innerHTML = ""; // Clear the list

    recipes.forEach((recipe, index) => {
        const recipeItem = document.createElement("li");
        recipeItem.classList.add('recipe-item');
        recipesList.appendChild(recipeItem);

        const recipeImage = document.createElement("img");
        recipeImage.src = recipe.strMealThumb;
        recipeImage.alt = "recipe-image";
        recipeItem.appendChild(recipeImage);
        
        const recipeHeader = document.createElement("h2");
        recipeHeader.innerText = recipe.strMeal;
        recipeItem.appendChild(recipeHeader);
        
        const recipeItemDiv = document.createElement("p");
        recipeItemDiv.classList.add("recipe-item__ingredients-list");
        recipeItemDiv.innerHTML = `<h2><strong>Ingredients:</strong></h2>`;

        const recipeItemIngredients = document.createElement("ul");
        recipeItemIngredients.classList.add("ingredients");
        
        const ingredients = [
            recipe.strIngredient1, recipe.strIngredient2, recipe.strIngredient3,
            recipe.strIngredient4, recipe.strIngredient5, recipe.strIngredient6,
            recipe.strIngredient7, recipe.strIngredient8, recipe.strIngredient9,
            recipe.strIngredient10
        ].filter(ingredient => ingredient);

        ingredients.forEach((ingredient, idx) => {
            const recipeItemIngredient = document.createElement("li");
            recipeItemIngredient.classList.add("ingredients__ingredient");
            recipeItemIngredient.innerText = `${ingredient} - ${recipe[`strMeasure${idx + 1}`] || ''}`;
            recipeItemIngredients.appendChild(recipeItemIngredient);
        });

        recipeItemDiv.appendChild(recipeItemIngredients);
        
        const recipeSourceLink = document.createElement("a");
        recipeSourceLink.href = recipe.strSource || '#';
        recipeSourceLink.target = "_blank";
        recipeSourceLink.innerText = "View Recipe";

        recipeItem.appendChild(recipeItemDiv);
        recipeItem.appendChild(recipeSourceLink);

        // Add a Remove button
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.innerText = "Remove Recipe";
        recipeItem.appendChild(removeBtn);

        removeBtn.addEventListener("click", () => {
            removeRecipe(index);
        });
    });
}

// Function to remove a recipe by its index
function removeRecipe(index) {
    recipes.splice(index, 1); // Remove the recipe from the array
    displayRecipes(recipes); // Re-display the recipes
}

// Function to fetch recipes from TheMealDB API
async function getRecipes() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const data = await response.json();
    return data.meals;
}

// Function to filter recipes based on search input
function filterRecipes() {
    const searchTerm = searchBar.value.toLowerCase();
    
    const filteredRecipes = recipes.filter(recipe =>
        recipe.strMeal.toLowerCase().includes(searchTerm)
    );

    displayRecipes(filteredRecipes);
}

// Show the Add Recipe form when the button is clicked
addRecipeButton.addEventListener("click", () => {
    addRecipeFormContainer.style.display = "block";
});

// Handle form submission to add a new recipe
addRecipeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#recipe-title").value;
    const image = document.querySelector("#recipe-image").value;
    const ingredients = document.querySelector("#recipe-ingredients").value.split(',');
    const url = document.querySelector("#recipe-url").value;

    // Create a new recipe object
    const newRecipe = {
        strMeal: title,
        strMealThumb: image,
        strSource: url,
        ...ingredients.reduce((acc, ingredient, idx) => {
            acc[`strIngredient${idx + 1}`] = ingredient.trim();
            acc[`strMeasure${idx + 1}`] = ''; // Optionally, you can add measurements if needed
            return acc;
        }, {})
    };

    console.log('New Recipe:', newRecipe); // Debugging line

    recipes.push(newRecipe);
    displayRecipes(recipes);

    addRecipeForm.reset();
    addRecipeFormContainer.style.display = "none";
});

// Initialize the app
async function init() {
    recipes = await getRecipes(); // Fetch recipes and store in `recipes` variable
    displayRecipes(recipes);
}

// Add event listener to the search bar
searchBar.addEventListener("input", filterRecipes);

// Call init to fetch and display recipes
init();
