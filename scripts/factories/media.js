let totalLikes = 0;
let likesArray = [];
function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    let picture = null;

    function openModal(event) {
        const picture = `assets/photographers/${event}`;
      
        const modalOverlay = document.createElement('div');
        modalOverlay.classList.add('modal-overlay');
        modalOverlay.style.display = 'flex'
      
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
      
        const closeModalBtn = document.createElement('i');
        closeModalBtn.classList.add('fa-solid', 'fa-xmark');
        closeModalBtn.innerHTML = '&times;';
      
        const modalImg = document.createElement('img');
        modalImg.setAttribute('src', picture);
      
        modalContent.appendChild(closeModalBtn);
        modalContent.appendChild(modalImg);
        modalOverlay.appendChild(modalContent);
      
        document.body.appendChild(modalOverlay);
      
        closeModalBtn.addEventListener('click', closeModal);
      }
      
      function closeModal() {
        const modalOverlay = document.querySelector('.modal-overlay');
        modalOverlay.remove();
      }

  
    function getMediaCardDOM() {
        const article = document.createElement('article');
        let element = null;
        if (image) {
            element = createImg(image);
            element.addEventListener('click', () => openModal(image));
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
        like.textContent = likes;
        mediaLike.appendChild(like);
        mediaLike.appendChild(heart);
    
        return article;

    }
    
    function createImg(image){
        picture = `assets/photographers/${image}`;
        const img = document.createElement('img');
        img.classList.add("media-card")
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
  