let totalLikes = 0;
let likesArray = [];
let photos = [];
function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    let picture = null;
    let currentPhotoIndex = 0;
    console.log(image)
    if (image) {
        photos.push(`assets/photographers/${image}`);
    }

    function openModal(event) {
        const picture = `assets/photographers/${event}`;

        const modalOverlay = document.createElement('div');
        modalOverlay.classList.add('modal-overlay');
        modalOverlay.style.display = 'flex'
      
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
      
        const closeModalBtn = document.createElement('i');
        closeModalBtn.classList.add('fa-solid', 'fa-xmark');
      
        const modalImg = document.createElement('img');
        modalImg.classList.add("modal-image")
        modalImg.setAttribute('src', picture);

        const prevBtn = document.createElement('button');
        prevBtn.textContent = '<';
        prevBtn.addEventListener('click', () => changePicture(-1));

        const nextBtn = document.createElement('button');
        nextBtn.textContent = '>';
        nextBtn.addEventListener('click', () => changePicture(1));

        modalContent.appendChild(prevBtn);
        modalContent.appendChild(nextBtn);
        modalContent.appendChild(closeModalBtn);
        modalContent.appendChild(modalImg);
        modalOverlay.appendChild(modalContent);
      
        document.body.appendChild(modalOverlay);
      
        closeModalBtn.addEventListener('click', closeModal);
      }
      function changePicture(offset) { 
        currentPhotoIndex += offset;
        
        if (currentPhotoIndex < 0) {
            currentPhotoIndex = photos.length - 1;
        } else if (currentPhotoIndex >= photos.length) {
            currentPhotoIndex = 0;
        }

        const modalImg = document.querySelector('.modal-image');
        modalImg.setAttribute('src', photos[currentPhotoIndex]);
        console.log('currentPhoto', modalImg)
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
        img.setAttribute('id', 'modal-image');
        return img
    }

    function createVideo(video){
        const photographerVideo = `assets/photographers/${video}`;
        const videoElement = document.createElement('video');
        videoElement.setAttribute('src', photographerVideo);
        return videoElement;
    }

    return { picture, getMediaCardDOM };
  }
  