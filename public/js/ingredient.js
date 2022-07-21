// global array to hold ingredients 
let ingrArray = [];

//=============Add Ingredient Button===============
// event listener to push the ingredient into the empty array 
const addToList = async () => {

  let ingredient = document.getElementById('ingredientName').value.trim();
  // if they enter a blank text field, it will do nothing
  if (ingredient === "") {
    return;
  } else {
    ingrArray.push(ingredient);
    console.log(ingrArray);
    ingredientName.value = "";
  }

  createLi();
}
//=======================================

//=============Create Ingredient==============
const createLi = async () => {

  ingrBoard.innerHTML = "";
  
  // this for loop will dynamically create li's 
  for (let i = 0; i < ingrArray.length; i++) {
    let list = ingrArray[i];

    // creates a li 
    let li = document.createElement("li");
    
    // creates attributes to append to the li 
    li.setAttribute("data-index", i);
    li.setAttribute("class", "flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded");
    li.textContent = list;
    
    // creates buttons 
    let button = document.createElement("button");
    button.setAttribute("class", "rounded-md bg-red-600 py-3 px-3")

    // set the text of the button to be equal to the setItem 
    button.textContent = 'Delete';
  

    // appends the following elements to each other 
    li.appendChild(button);
    ingrBoard.appendChild(li);
    }
}
//=======================================

//============Search Recipe Button================
// search button feature to invoke api function
const searchBtn = async () => {
     // variable to hold concatenated search list 
let ingrList = "";

// iterate through array 
for (let i = 0; i < ingrArray.length; i++){
   ingrList += ingrArray[i] + ",+";
}

// invokes function with user input in proper syntax for api 
getRecipes(ingrList);

//    clears the input text field 
ingredientName.value = "";
}
//=======================================

//=========Delete Ingredient Button==============
// delete button feature
const deleteIngr = async (event) => {
  let element = event.target;
    
    if (element.matches("button") === true) {
      let index = element.parentElement.getAttribute("data-index");
      ingrArray.splice(index, 1);
  
    //   reinvoke function to create list again 
      createLi();
    }
}
//=======================================


//===========Clear Button=============== 
// clears array and list 
const clearBtn = async () => {
  ingrArray = [];
  ingrBoard.innerHTML = "";
}
//=======================================

// button add ingredient
document
.getElementById('add-button')
.addEventListener("click", addToList);

//button to get recipes
document
.getElementById('start-button')
.addEventListener("click", searchBtn);

//button to delete ingredients
document
.getElementById('ingrBoard')
.addEventListener("click", deleteIngr);

document
.getElementById('clear-button')
.addEventListener("click", clearBtn);