const apiKey = '588a41dee0c440b0a634e47c06f82f6f';

function getRecipes(ingredients) {
  
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
            let createImg = document.createElement("img");
             createImg.setAttribute("src", image);

             let createP = document.createElement("p");
             createP.textContent = title;

             createDiv.appendChild(createP);
             createDiv.appendChild(createImg);
             imageBoard.appendChild(createDiv);
          }
      });

      getInfo(id)
  }

function getInfo(id) {

    let api = `https://api.spoonacular.com/recipes/${id}/information`;
            
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.length; i++){
                    
                }
            })
    
    }