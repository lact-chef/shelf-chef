
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

// global variables ======================================
let ingrBoard = document.getElementById('ingrBoard');
let addToList = document.getElementById('add-button');
let searchBtn = document.getElementById('start-button');
let clearBtn = document.getElementById('clear-button');
//========================================================

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

createLi();
})

function createLi(){

    ingrBoard.innerHTML = "";
  
  // this for loop will dynamically create li's 
  for (let i = 0; i < ingrArray.length; i++) {
    let list = ingrArray[i];

    // creates a li 
    let li = document.createElement("li");
    
    // creates attributes to append to the li 
    li.setAttribute("data-index", i);
    li.textContent = list;

    // creates buttons 
    let button = document.createElement("button");

    // set the text of the button to be equal to the setItem 
    button.textContent = 'Delete';
  

    // appends the following elements to each other 
    li.appendChild(button);
    ingrBoard.appendChild(li);
    }
}

// search button feature to invoke api function
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

// delete button feature
ingrBoard.addEventListener("click", (event) => {
    let element = event.target;
    
    if (element.matches("button") === true) {
      let index = element.parentElement.getAttribute("data-index");
      ingrArray.splice(index, 1);
  
    //   reinvoke function to create list again 
      createLi();
    }
  });

  // no html assigned to this yet 
// clears array and list 
  clearBtn.addEventListener("click", () => {

    ingrArray = [];
    ingrBoard.innerHTML = "";
  })