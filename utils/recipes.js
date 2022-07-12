let recipeBoard = document.getElementById('recipe-container');

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
            createDiv.setAttribute("data-index", id);
            
            let createImg = document.createElement("img");
             createImg.setAttribute("src", image);
             

             let createP = document.createElement("p");
             createP.textContent = title;

             createDiv.appendChild(createP);
             createDiv.appendChild(createImg);
             recipeBoard.appendChild(createDiv);
             idArray.push(id)
          }
          
        });
    
 
      
    }

let idArray = [];

recipeBoard.addEventListener("click", (event) => {
    getInfo(event);
})

function getInfo(event) {

    let element = event.target;
    let imgIndex = element.parentElement.getAttribute("data-index");

  // this for loop will dynamically create li's 
  for (let i = 0; i < idArray.length; i++) {
    
    let id = idArray[i];

    if (imgIndex == id) {

        let api = `https://api.spoonacular.com/recipes/${imgIndex}/information?apiKey=${apiKey}`;
        
    fetch(api)
        .then((response) => response.json())
        .then( (data) => {
                console.log(data);
         
            let {sourceUrl} = data;
            let {summary} = data;

            let createSummary = document.createElement("p");
            createSummary.textContent = summary;

            let createUrl = document.createElement("p");
            createUrl.textContent = sourceUrl;

            let closeRecipe = document.createElement("button");
            closeRecipe.setAttribute("id", "closeRecipe");
            closeRecipe.textContent = 'Close';

            let recipeCard = document.createElement("div");
            recipeCard.appendChild(createSummary);
            recipeCard.appendChild(createUrl);
            recipeDash.append(closeRecipe);
            recipeDash.append(recipeCard);

        //   not sure what to set the loop to 
          for (let i = 0; i < 10; i++) {
            
            // in case we want to extract more information 
          }
            
        })
        
    }
  }
}
