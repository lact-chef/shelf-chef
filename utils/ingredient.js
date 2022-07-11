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

// notes for feature
// have a clear button to remove unnecessary recipes searched
// also clears api search--could refresh whole page? 
//have the initial page be the search bar only
//after submission new 'path' for recipes and search bar on same screen
// item history and recipes attached to new path
// filter button with vegan and gluten free
// changes page with new filter path?
// empty array on return


// create an add to search button to individually add ingredients
// once user is done adding ingredients, they hit search
// have all items pushed into an array
// create for loop to iterate through array
// create new variable to hold user input concatenated properly 
// invoke getRecipes with proper search

let ingrArray = [];

list.addEventListener("click", (ingredient) => {
//push each added ingredient into empty array
// if they enter a blank text field, it will do nothing
if (ingredient === "") {
  return;
} else {
  ingrArray.push(ingredient);
}
// how to move new list made into the search button
})

// create a remove button 
// takes from global ingrArray and removes selected item from index
// figure out how to use the same new list to call search

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