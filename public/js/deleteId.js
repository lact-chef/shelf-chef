// function to delete specified recipe 
const deleteId = async (event) => {

    let element = event.target;

    if (element.matches("button") === true) {

        let recipeId = element.parentElement.getAttribute("data-id");

      const response = await fetch(`/api/favorite/${recipeId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/favorite');
      } else {
        alert('Failed to delete recipe');
      }
    }
}
