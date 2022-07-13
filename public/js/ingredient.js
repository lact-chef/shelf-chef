// to be added to public 
const addToList = async (event) => {
    event.preventDefault();
  
    const ingredient = document.getElementById('addIngr').value.trim();

    if (ingredient === "") {
        return;

    } else if (ingredient) {

        // figure out correct path name later to controller
      const response = await fetch(`/api/addIngredient`, {
        method: 'POST',
        body: JSON.stringify({ ingredient }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {

        // look at homeRoutes folder. render pages there 
        // this refreshes the page by replacing it again.
        document.location.replace('/ingredient');
      } else {
        alert('Failed to list ingredient');
      }
    }
  };

  //   delete listed ingredient 
  const deleteLi = async (event) => {

    // double check button gets id in views -- might be data-index
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/addIngredient/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/ingredient');
      } else {
        alert('Failed to delete ingredient');
      }
    }
  };

  //   add ingr button 
// invokes async function
document
.getElementById('start-button')
// do i need parenthese for the addToList function???
.addEventListener('submit', addToList());

  //delete ingr button
  // invokes async function
  document
  .getElementById('ingrBoard')
  .addEventListener('click', deleteLi);