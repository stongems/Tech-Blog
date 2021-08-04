const editPostHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector("#postTitle").value;
  const description = document.querySelector("#postBody").value;
  const button = document.querySelector("#updatePost");
  // const id = event.target.getAttribute("data-id");
  const id = button.getAttribute("data-id");

  console.log(id);
  if (name && description) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/posts/" + id, {
      method: "PUT",
      body: JSON.stringify({ name, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const deletePostHandler = async (event) => {
  event.preventDefault();
  const button = document.querySelector("#deletePost");
  // const id = event.target.getAttribute("data-id");
  const id = button.getAttribute("data-id");
  const response = await fetch("/api/posts/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#updatePost")
  .addEventListener("click", editPostHandler);
document
  .querySelector("#deletePost")
  .addEventListener("click", deletePostHandler);
