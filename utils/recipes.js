const apiKey = '588a41dee0c440b0a634e47c06f82f6f';
function getRecipes(ingredients) {
  
      let api = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}`;
  
      fetch(api)
          .then((response) => response.json())
          .then((data) => {
          console.log(data);
      });
  }