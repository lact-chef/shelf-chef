
let idArray = [];

const apiKey = '588a41dee0c440b0a634e47c06f82f6f';

const getRecipes = async (ingredients) => {
  
  let recipeBoard = document.getElementById('recipe-container');

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