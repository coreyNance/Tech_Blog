
// Need to switch this file over for blog data

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

  const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#addComment').value.trim();
    const id = event.target.getAttribute('data-id')
  
    if (comment) {
      const response = await fetch(`/api/blogPost/${id}`, {
        method: 'POST',
        body: JSON.stringify({comment}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
 
  let deleteBtn = document.querySelector('#deleteBtn');

  if(deleteBtn !== null) {
    deleteBtn.addEventListener('click', delButtonHandler);
  }
  
  document.querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);


  