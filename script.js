const createPost = () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
  
    const postsContainer = document.getElementById("posts-container");
    const newPostContainer = document.createElement("article");
  
    const postTitle = document.createElement("h2");
    const postContent = document.createElement("p");
  
    postTitle.innerText = title;
    postContent.innerText = content;
  
    newPostContainer.appendChild(postTitle);
    newPostContainer.appendChild(postContent);
  
    postsContainer.appendChild(newPostContainer);
  
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  }