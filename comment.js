 document.getElementById("btn-comment").addEventListener('click',function(){

    const commentBox = document.getElementById("comment-box");
    const hey = commentBox.value;
    const commentContainer = document.getElementById("comment-container");
    const post = document.createElement('p');
    post.innerText = hey;
    commentContainer.appendChild(post)
   commentBox.value = " ";


 })