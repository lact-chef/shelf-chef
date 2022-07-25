let recipeDash = document.getElementById("recipe-dash");

const getInfo = async (event) => {

    let element = event.target;
    let imgIndex = element.parentElement.getAttribute("data-index");

    // this for loop will dynamically create li's
    for (let i = 0; i < idArray.length; i++) {
      let id = idArray[i];

  
      if (imgIndex == id) {
  
        let api = `https://api.spoonacular.com/recipes/${imgIndex}/information?apiKey=${apiKey}`;
  
        fetch(api)
          .then((response) => response.json())
          .then((data) => {

            let {spoonacularSourceUrl} = data;
            
  
            let createAnchor = document.createElement("a");
            createAnchor.setAttribute("href", spoonacularSourceUrl);
  
            let createUrl = document.createElement("p");
            createUrl.innerHTML = spoonacularSourceUrl;
  
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
            recipeDash.appendChild(recipeCard);
            
          });
      }
    }
    recipeDash.classList.toggle("show");
  }

const closeRecipe = async () => {
  recipeDash.classList.remove("show");
  recipeDash.innerHTML = "";
}

  document
  .getElementById("closeRecipe")
  .addEventListener("click", closeRecipe)