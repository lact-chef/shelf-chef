function getRecipes(ingredients) {
  //   event.preventDefault();
    const apiKey = '588a41dee0c440b0a634e47c06f82f6f';

    var api = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}`;

    fetch(api)
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
    });
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

// global array to hold ingredients 
let ingrArray = [];

// global variables 
let ingrBoard = document.getElementById('ingrBoard');
let addToList = document.getElementById('add-button');

// event listener to push the ingredient into the empty array 
addToList.addEventListener("click", () => {

  
  let ingredient = document.getElementById('addIngr').value.trim();
// if they enter a blank text field, it will do nothing
if (ingredient === "") {
  return;
} else {
  ingrArray.push(ingredient);
  console.log(ingrArray);
  addIngr.value = "";
}

// clears field to prevent appending old and new lists
ingrBoard.innerHTML = "";
  
  // this for loop will dynamically create li's 
  for (let i = 0; i < ingrArray.length; i++) {
    let list = ingrArray[i];

    // creates a li 
    let li = document.createElement("li");
    
    // set ingredient names to the list items 
    li.textContent = list;

    // appends the following elements to each other 
    ingrBoard.appendChild(li);
  }
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
let ingrList = "";

// iterate through array 
for (let i = 0; i < ingrArray.length; i++){
   ingrList += ingrArray[i] + ",+";
}

// invokes function with user input in proper syntax for api 
getRecipes(ingrList);

//    clears the input text field 
    addIngr.value = "";
});