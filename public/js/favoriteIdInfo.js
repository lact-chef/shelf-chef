const apiKey = '588a41dee0c440b0a634e47c06f82f6f';

const getFavIdInfo = async (event) => {
    let element = event.target;
  
    let imgIndex = element.parentElement.getAttribute("data-index");
    // this for loop will dynamically create li's
  
        let api = `https://api.spoonacular.com/recipes/${imgIndex}/information?apiKey=${apiKey}`;
  
        fetch(api)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            let {summary} = data;
  
            let createSummary = document.createElement("p");
            createSummary.innerHTML = summary;

            // to hold ingredients
            let createUl = document.createElement("ul");

            // to hold instructions
            let createOL = document.createElement("ol");
          
            //loop through ingredients
        for (let j = 0; j < data.extendedIngredients.length; j++){

          let createLi2 = document.createElement("li");
           createLi2.textContent = data.extendedIngredients[j].name;
         
           createUl.appendChild(createLi2);
          } 

          //loop through instructions
        for (let i = 0; i < data.analyzedInstructions[0].steps.length; i++) {
             
               let createLi = document.createElement("li");
               createLi.textContent = data.analyzedInstructions[0].steps[i].step;
             
               createOL.appendChild(createLi);
          }
  
            let recipeInfo = document.getElementById("recipe-info");

            let recipeCard = document.createElement("div");
            
            recipeCard.appendChild(createSummary);
            recipeCard.appendChild(createUl);
            recipeCard.appendChild(createOL);
            recipeInfo.appendChild(recipeCard);
            
          }); 
  }

  document
  .getElementById("show-more")
  .addEventListener("click", getFavIdInfo);