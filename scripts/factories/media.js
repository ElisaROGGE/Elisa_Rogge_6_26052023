let totalLikes = 0;
let likesArray = [];
function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    let picture = null;
  
    function getMediaCardDOM() {
        const article = document.createElement('article');
        let element = null;
        if (image) {
            element = createImg(image);
        }
    
        if (video) {
            element = createVideo(video);
        }
    
        article.appendChild(element);
    
        const mediaTitle = document.createElement('span');
        mediaTitle.classList.add("media-title");
        mediaTitle.textContent = title;
    
        const mediaLike = document.createElement('div');
        mediaLike.classList.add("media-like");
        mediaLike.setAttribute('data-liked', 'false'); 
    
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('content');
        article.appendChild(mainDiv);
        mainDiv.appendChild(mediaTitle);
        mainDiv.appendChild(mediaLike);
    
        const like = document.createElement('span');
        const heart = document.createElement('i');
        heart.classList.add('fa', 'fa-heart-o');
        like.textContent = likes;
        totalLikes += likes;
        console.log(totalLikes)
        mediaLike.appendChild(like);
        mediaLike.appendChild(heart);
    
        heart.addEventListener('click', incrementLikes);
    
        return article;
    
        function incrementLikes() {
            let currentLikes = parseInt(like.textContent);
            let liked = mediaLike.getAttribute('data-liked') === 'true';
    
            if (liked) {
                currentLikes -= 1;
                heart.classList.remove("fa", "fa-heart");
                heart.classList.add("fa", "fa-heart-o");
                mediaLike.setAttribute('data-liked', 'false');
            } else {
                currentLikes += 1;
                heart.classList.remove("fa", "fa-heart-o");
                heart.classList.add("fa", "fa-heart");
                mediaLike.setAttribute('data-liked', 'true');
            }
    
            like.textContent = currentLikes;
    
            totalLikes += (liked ? -1 : 1);
            totalLikesElement.textContent = totalLikes;
            return totalLikesElement
        }
    }
    
    function createImg(image){
        picture = `assets/photographers/${image}`;
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        return img
    }

    function createVideo(video){
        const photographerVideo = `assets/photographers/${video}`;
        const videoElement = document.createElement('video');
        videoElement.setAttribute('src', photographerVideo);
        videoElement.setAttribute('controls', true);
        return videoElement;
    }
  
    let totalLikesElement = document.getElementById('total-likes');
    let total = document.querySelector(".total")
    let totalPrice = document.createElement("span")
    total.appendChild(totalPrice)
    totalLikesElement.textContent = totalLikes;
    return { picture, getMediaCardDOM };
  }
  