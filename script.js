import Posts from './data.js'

function renderPost(postObject) {
    const postId = 1
    return (
        `<div class="post" id="${postId}">

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
                        <img src="./images/icon-heart.png" alt="">
                        <img src="./images/icon-comment.png" alt="">
                        <img src="./images/icon-dm.png" alt="">
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

            <div class="divider" />

        </div>
        `
    )
}

const sectionElem = document.querySelector("section");

function renderData(dataArray) {
    let dataHTML = ""
    dataArray.forEach(el => dataHTML += renderPost(el))
    sectionElem.innerHTML = dataHTML;
    console.log("dada", dataHTML);

}

document.onload = renderData(Posts);