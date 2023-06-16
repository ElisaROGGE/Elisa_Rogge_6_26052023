function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    let picture = null;
  
    function getMediaCardDOM() {
        const article = document.createElement('article');
        let element = null;
        if (image) {
            element = createImg(image)
        }
            
        if (video) {
            element = createVideo(video)
        }

        article.appendChild(element);
        
        const mediaTitle = document.createElement('span');
        mediaTitle.textContent = title;
        article.appendChild(mediaTitle);
        return article;
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
  
    return { picture, getMediaCardDOM };
  }
  