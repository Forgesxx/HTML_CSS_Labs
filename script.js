const createPost = () => {
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");

    if (!titleInput.value || !contentInput.value) {
        alert("Both title and content must be filled out");
        return; 
    }

    const title = titleInput.value;
    const content = contentInput.value;

    const postsContainer = document.getElementById("posts-container");
    const newPostContainer = document.createElement("article");

    const postTitle = document.createElement("h2");
    const postContent = document.createElement("p");

    postTitle.innerText = title;
    postContent.innerText = content;

    newPostContainer.appendChild(postTitle);
    newPostContainer.appendChild(postContent);

    postsContainer.appendChild(newPostContainer);

    titleInput.value = "";
    contentInput.value = "";
}
