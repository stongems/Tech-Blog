const postCreateHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('postTitle').nodeValue;
    const post_body = document.querySelector('postBody').nodeValue;

    if(title && post_body) {

    }
};

document.querySelector(".createPost").addEventListener("submit", postCreateHandler);
