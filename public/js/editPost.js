const editPostHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#postTitle").value;
    const post_body = document.querySelector("#postBody").value;

    // const id = event.target.getAttribute("data-id");
    
    if(title && post_body) {
        
    }
};

const deletePostHandler = async (event) => {
    event.preventDefault();

}

document.querySelector("#updatePost").addEventListener("click", editPostHandler);
document.querySelector("#deletePost").addEventListener("click", deletePostHandler);
