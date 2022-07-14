// to be added to public 
// this function will take the recipe id and post it in server 
// it will generate a unique id with the recipe id in table
// it will then be 
// watch button placement as a child element
const favorite = async (event) => {
    event.preventDefault();
    let element = event.target;

    if (element.matches("button") === true) {

    // specifies the targets recipe id
    let recipe = element.parentElement.getAttribute("data-index");
      
     // specifies the targets recipe title
    let title = element.parentElement.firstElementChild.innerHTML;

    // specifies the targets recipe img
    let img = element.parentElement.lastElementChild.currentSrc;

          // figure out correct path name later to controller
      const response = await fetch(`/api/favorite`, {
        method: 'POST',
        body: JSON.stringify({ recipe, title, img }),
        headers: {
          'Content-Type': 'application/json',
        },
    });

      
        if (response.ok) {
        document.location.replace('/favorite');
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