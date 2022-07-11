function getRecipes(ingredient) {
  //   event.preventDefault();
  const apiKey = '588a41dee0c440b0a634e47c06f82f6f';

  var api = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredient}`;

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  console.log('hi');
}
