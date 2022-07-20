const favorite = async (event) => {
    event.preventDefault();
    let element = event.target;

    if (element.matches("button") === true) {

    // specifies the targets recipe id
    let recipeID = element.parentElement.getAttribute("data-index");
      
     // specifies the targets recipe title
    let title = element.parentElement.firstElementChild.innerHTML;

    // specifies the targets recipe img
    let image_url = element.parentElement.lastElementChild.currentSrc;

    let currentUser = document.querySelector("#user-id")
   
    let user_id = currentUser.dataset.id;
      console.log(recipeID, title, image_url, user_id);
          // figure out correct path name later to controller
      const response = await fetch(`/api/recipe`, {
        method: 'POST',
        body: JSON.stringify({ recipeID, title, image_url, user_id }),
        headers: {
          'Content-Type': 'application/json',
        },
    });

            //location replacement may not be needed for this request
        if (response.ok) {
          console.log('response works');
          console.log(user_id);

            //use this instead of replace to prevent double saving
            element.remove()
        } else {
        alert('Failed to create favorite');
        }
    } 
  };

  // favorite button 
// invokes async function
document
.getElementById('favorite-button')
.addEventListener('click', favorite);
