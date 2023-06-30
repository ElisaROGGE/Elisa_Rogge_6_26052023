let totalLikes = 0;
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
    
        const mediaLike = document.createElement('div');
        mediaLike.textContent = likes;
        totalLikes += likes;
    
        mediaLike.addEventListener('click', incrementLikes);
    
        article.appendChild(mediaLike);
        return article;
        function incrementLikes() {
            if (mediaLike.getAttribute('data-liked') === 'true') {
                return;
            }
        
            let currentLikes = parseInt(mediaLike.textContent);
        
            currentLikes += 1;
        
            mediaLike.textContent = currentLikes;

            totalLikes += 1;

            totalLikesElement.textContent = totalLikes;
        
            mediaLike.setAttribute('data-liked', 'true');
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
    totalLikesElement.textContent = totalLikes;
    console.log(totalLikes)
    return { picture, getMediaCardDOM };
  }
  