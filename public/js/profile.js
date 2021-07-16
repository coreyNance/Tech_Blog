
// Need to switch this file over for blog data

var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blogpost-title').value.trim();
    const content = document.querySelector('#blogpost-content').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/blogposts`, {
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
    // if ((event.target.hasAttribute('data-id')) && (document.querySelector('#deleteBtn') === true)) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/blogposts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    // }
  };

  const updateButtonHandler = async (event) => {
    // if ((event.target.hasAttribute('data-id')) && (document.querySelector('#deleteBtn') === true)) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/blogposts/${id}`, {
        method: 'POST',
        body: JSON.stringify({title, content}),
        headers: {
          'Content-Type': 'application/json',
        }
        });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    // }
  };
 
  let deleteBtn = document.querySelector('#deleteBtn');

  if(deleteBtn !== null) {
    deleteBtn.addEventListener('click', delButtonHandler);
  }
  
  document.querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);
  