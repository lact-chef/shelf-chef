const getFavIdInfo = async (event) => {
    let element = event.target;
  
    let imgIndex = element.parentElement.getAttribute("data-index");
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
            let {summary} = data;
  
            let createSummary = document.createElement("p");
            createSummary.innerHTML = summary;
  
            let createAnchor = document.createElement("a");
            createAnchor.setAttribute("href", spoonacularSourceUrl);
  
            let createUrl = document.createElement("p");
            createUrl.innerHTML = spoonacularSourceUrl;

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
            createAnchor.append(createUrl);
            recipeCard.appendChild(createSummary);
            recipeCard.appendChild(createOL);
            recipeCard.appendChild(createAnchor);
            recipeInfo.appendChild(recipeCard);
            
          });
      }
    }
  }

  document
  .getElementById("show-more")
  .addEventListener("click", getFavIdInfo);