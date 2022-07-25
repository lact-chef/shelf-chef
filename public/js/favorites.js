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

      const response = await fetch(`/api/recipe`, {
        method: 'POST',
        body: JSON.stringify({ recipeID, title, image_url, user_id }),
        headers: {
          'Content-Type': 'application/json',
        },
    });

        if (response.ok) {

            // to remove save button
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
