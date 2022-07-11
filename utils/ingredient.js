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

//--------------------------------------
// global variable 
let searchBtn = document.getElementById('start-button');
//-----

searchBtn.addEventListener("click", function() {

    // variable to hold concatenated search list 
let ingrList;

// iterate through array 
for (let i = 0; i < ingrArray; i++){
   ingrList += ingrArray[i] + ",+";
}

  // if they enter a blank text field, it will do nothing
  if (ingredient === "") {
    return;
  } else {
    getRecipes(ingredient)
  } 
 // Pushes the text into the array
//  for whatever reason if i need an array as a solution to push the value into
//  searchArray.push(ingredient);

//    clears the input text field 
  citySearch.value = "";
 
 
  // invoking all these functions 
  // if i need to call it here or keep if conditional statement 
  // getRecipes();
});