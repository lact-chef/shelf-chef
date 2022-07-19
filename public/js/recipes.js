let recipeBoard = document.getElementById('recipe-container');
let recipeDash = document.getElementById("recipe-dash");

const apiKey = '588a41dee0c440b0a634e47c06f82f6f';

function getRecipes(ingredients) {

    // clear board to prevent stacking of old searches 
    recipeBoard.innerHTML = "";

      let api = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}`;
      
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          for (let i = 0; i < data.length; i++) {
            let { id } = data[i];
            let { image } = data[i];
            let { title } = data[i];

            let createDiv = document.createElement("div");
        // this is the recipe id 
        createDiv.setAttribute("data-index", id);
        
        //use on click locally but make it async before pushing
        let createBtn = document.createElement("button");
        createBtn.setAttribute("onclick", "favorite(event)");
        createBtn.setAttribute("class", "favorite-button")
        createBtn.textContent = "Save"
        
        //use on click locally but make it async before pushing
        let createImg = document.createElement("img");
        createImg.setAttribute("onclick", "getInfo(event)");
        createImg.setAttribute("src", image);

        let createP = document.createElement("p");
        createP.textContent = title;

        createDiv.appendChild(createP);
        createDiv.appendChild(createBtn);
        createDiv.appendChild(createImg);
        recipeBoard.appendChild(createDiv);
        idArray.push(id);
          }
          
        });
    
 
      
    }

let idArray = [];

function getInfo(event) {
  let element = event.target;
  let imgIndex = element.parentElement.getAttribute("data-index");
  console.log(imgIndex);
  // this for loop will dynamically create li's
  for (let i = 0; i < idArray.length; i++) {
    let id = idArray[i];
    console.log(id);

    if (imgIndex == id) {

      let api = `https://api.spoonacular.com/recipes/${imgIndex}/information?apiKey=${apiKey}`;

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let {spoonacularSourceUrl} = data;
          

          let createAnchor = document.createElement("a");
          createAnchor.setAttribute("href", spoonacularSourceUrl);

          let createUrl = document.createElement("p");
          createUrl.innerHTML = spoonacularSourceUrl;

          let closeRecipe = document.createElement("button");
          closeRecipe.setAttribute("id", "closeRecipe");
          closeRecipe.textContent = 'Close';
          let createOL = document.createElement("ol");
        
          // loop to iterate through the steps 
          for (let i = 0; i < data.analyzedInstructions[0].steps.length; i++) {
           
             let createLi = document.createElement("li");
             createLi.textContent = data.analyzedInstructions[0].steps[i].step;
           
             createOL.appendChild(createLi)

          }

          let recipeCard = document.createElement("div");
          createAnchor.append(createUrl);
          recipeCard.appendChild(createOL);
          recipeCard.appendChild(createAnchor);
          recipeDash.append(closeRecipe);
          recipeDash.appendChild(recipeCard);
          
        });
    }
  }
}