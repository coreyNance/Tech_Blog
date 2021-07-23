let postButtons = document.querySelectorAll('.updateButton');
let deleteButtons = document.querySelectorAll('.deleteButton');

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blogpost-title').value.trim();
    const content = document.querySelector('#blogpost-content').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/blogpost`, {
        method: 'POST',
        body: JSON.stringify({title, content}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/blogpost/${id}`, {
        method: 'DELETE',
      });
      console.log(response);
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
  
  };

  const updateButtonHandler = async (event) => {
      event.preventDefault();
      const id = event.target.getAttribute('data-id');

      const title = document.querySelector(`#updateTitle${id}`).value.trim();
      const content = document.querySelector(`#updateContent${id}`).value.trim();
      console.log(title);
   
      const response = await fetch(`/api/blogpost/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title, content}),
        headers: {
          'Content-Type': 'application/json',
        }
        });
        console.log(response);
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to update project');
      }
    
  };
 

  for(each of deleteButtons) {
    each.addEventListener('click', delButtonHandler);
  }
  
  for(each of postButtons) {
    each.addEventListener('click', updateButtonHandler);
  }
 
  document.querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
 