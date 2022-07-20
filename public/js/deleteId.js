const deleteId = async (event) => {

    let element = event.target;
  console.log(element);
    if (element.matches("button") === true) {

        let recipeId = element.parentElement.getAttribute("data-id");
      console.log(recipeId);
         // figure out correct path name later to controller
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
