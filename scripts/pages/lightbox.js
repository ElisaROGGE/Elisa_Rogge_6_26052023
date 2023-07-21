function lightbox() {
  let photos = document.querySelectorAll(".media-card");
  let titles = document.querySelectorAll(".media-title");

  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const title = titles[i].textContent;

    photo.addEventListener('click', () => openModal(photo, title));
  }


  let currentPhotoIndex = 0;
  function createImageOrVideo(photo){
    let element;
    if(photo.nodeName === "IMG"){
        element = document.createElement("img");
        element.classList.add("modal-image");
        element.setAttribute("src", photo.src);
    }else{
        element = document.createElement("video");
        element.classList.add("modal-image");
        element.setAttribute("src", photo.src);
        element.setAttribute("controls", '');
    }
    
    return element
  }
  

  function openModal(content, title) {

    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");
    modalOverlay.style.display = "flex";

    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    const prevBtn = document.createElement("i");
    prevBtn.classList.add("fa-solid", "fa-chevron-left");
    prevBtn.addEventListener("click", () => changePicture(-1));

    const closeModalBtn = document.createElement("i");
    closeModalBtn.classList.add("fa-solid", "fa-xmark");
    
    const modalImg = createImageOrVideo(content)
    const modalTitle = document.createElement('span')
    modalTitle.textContent = title
    console.log(modalTitle.textContent)
    
    const nextBtn = document.createElement("i");
    nextBtn.classList.add("fa-solid", "fa-chevron-right");
    nextBtn.addEventListener("click", () => changePicture(1));

    const navIcon = document.createElement('div')
    navIcon.classList.add('nav-icon')
    
    navIcon.appendChild(closeModalBtn);
    navIcon.appendChild(nextBtn);
    modalContent.appendChild(prevBtn);
    modalContent.appendChild(modalImg);
    modalContent.appendChild(navIcon);
    lightbox.appendChild(modalTitle);
    
    modalOverlay.appendChild(lightbox);
    modalOverlay.appendChild(modalContent);
    

    document.body.appendChild(modalOverlay);

    closeModalBtn.addEventListener("click", closeModal);
  }

  function changePicture(offset) {
    currentPhotoIndex += offset;

    if (currentPhotoIndex < 0) {
      currentPhotoIndex = photos.length - 1;
    } else if (currentPhotoIndex >= photos.length) {
      currentPhotoIndex = 0;
    }

    const modalContent = document.querySelector(".modal-content");
    const lightbox = document.querySelector(".lightbox");
    const modalImg = document.querySelector(".modal-image");
    const navIcon = document.querySelector('.nav-icon')
    modalImg.remove();
    navIcon.remove();
    lightbox.remove();

    const modalNew = createImageOrVideo(photos[currentPhotoIndex])
    modalContent.appendChild(modalNew);
    modalContent.appendChild(navIcon);

  }

  function closeModal() {
    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay.remove();
  }
}
