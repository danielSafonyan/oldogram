import Posts from './data.js'

const postsFromLocalStorage = JSON.parse(localStorage.getItem("posts"));

const postsLiked = postsFromLocalStorage || Posts.map(post => ({...post, isLiked: false}))

function renderPost(postObject, id) {
    return (
        `<div class="post" id="${id}">

            <div class="spacer">
                <div class="poster-info">
                    <img class="user-avatar" src="${postObject.avatar}" alt="User Avatar">
                    <div class="text-info">
                        <div class="text-name">${postObject.name}</div>
                        <div class="text-location">${postObject.location}</div>
                    </div>
                </div>
            </div>

            <div class="img-container">
                <img src="${postObject.post}" alt="">
            </div>

            <div class="spacer">
                <div class="action-container">
                        <div class="like-btn"> 
                            <img  src=${postObject.isLiked ? 
                            "./images/icon-heart-red.png" : "./images/icon-heart.png"} alt="">
                        </div>
                        <div><img src="./images/icon-comment.png" alt=""></div>
                        <div><img src="./images/icon-dm.png" alt=""></div>
                </div>
            </div>

            <div class="spacer">
                <div class="likes">${postObject.likes} likes</div>
            </div>

            <div class="spacer">
                <div class="caption">
                    <span>${postObject.username}</span> ${postObject.comment}
                </div>
            </div>

            <div class="divider"></div>

        </div>
        `
    )
}

const sectionElem = document.querySelector("section");

function renderData(dataArray) {
    let dataHTML = ""
    dataArray.forEach((el, id) => dataHTML += renderPost(el, id))
    sectionElem.innerHTML = dataHTML;

    const likeBtnAll = document.querySelectorAll(".like-btn");
    likeBtnAll.forEach(btn => btn.addEventListener('click', (event) => listenLike(event, 3)));

    const imgContainerAll = document.querySelectorAll(".img-container");
    imgContainerAll.forEach(btn => btn.addEventListener('dblclick', (event) => listenLike(event, 1)));
}

function listenLike(event, path) {
    event.stopPropagation();
    const postID = event.path[path].id;
    postsLiked[postID].isLiked = !postsLiked[postID].isLiked;
    if (postsLiked[postID].isLiked) {
        postsLiked[postID].likes++;
    } else {
        postsLiked[postID].likes--;
    }
    localStorage.setItem("posts", JSON.stringify(postsLiked));
    renderData(postsLiked);
}

renderData(postsLiked);
