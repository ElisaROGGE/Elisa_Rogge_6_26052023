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
        like.classList.add('heart-span')
        const heart = document.createElement('i');
        heart.classList.add('fa', 'fa-heart-o');
        heart.setAttribute('tabindex', '2')
        like.textContent = likes;
        mediaLike.appendChild(like);
        mediaLike.appendChild(heart);
    
        return article;

    }
    
    function createImg(image){
        picture = `assets/photographers/${image}`;
        const img = document.createElement('img');
        img.classList.add("media-card")
        img.setAttribute('aria-label', 'media')
        img.setAttribute('tabindex', '1')
        img.setAttribute('src', picture);
        img.setAttribute('id', 'modal-image');
        return img
    }

    function createVideo(video){
        const photographerVideo = `assets/photographers/${video}`;
        const videoElement = document.createElement('video');
        videoElement.setAttribute('aria-label', 'media')
        videoElement.setAttribute('tabindex', '1')
        videoElement.setAttribute('src', photographerVideo);
        videoElement.classList.add("media-card")
        return videoElement;
    }

    return { picture, getMediaCardDOM };
  }
  