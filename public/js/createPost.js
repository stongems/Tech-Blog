const postCreateHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#postTitle').value;
    const description = document.querySelector('#postBody').value;

    if (name && description) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ name, description }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
    
    
};

document.querySelector(".createPost").addEventListener("submit", postCreateHandler);
