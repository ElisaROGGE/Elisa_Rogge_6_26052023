async function getPhotographer() {
    try {
      const response = await fetch('http://127.0.0.1:5500/data/photographers.json');
      const data = await response.json();
      const id = getId();
      let photographer = null;
  
      for (let i = 0; i < data.photographers.length; i++) {
        if (data.photographers[i].id == id) {
          photographer = data.photographers[i];
          break;
        }
      }
      console.log(photographer)
  
      if (photographer) {
        displayHeader(photographer);
      } else {
        console.error('Aucun photographe trouvé avec cet identifiant');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des détails du photographe :', error);
      return null;
    }
  }
  
  function getId() {
    const str = window.location.href;
    const url = new URL(str);
    if (url.searchParams.get('id')) {
      const id = url.searchParams.get('id');
      return id;
    }
  }
  
  function displayHeader(photographer) {
    const headerSectionInfo = document.querySelector('.photograph-header .photographInfo');
  
    const title = document.createElement('h1');
    title.textContent = photographer.name;
  
    const location = document.createElement('h3');
    location.textContent = `${photographer.city}, ${photographer.country}`;
  
    const taglineElement = document.createElement('span');
    taglineElement.textContent = photographer.tagline;
  
    headerSectionInfo.appendChild(title);
    headerSectionInfo.appendChild(location);
    headerSectionInfo.appendChild(taglineElement);
  
    const headerSectionImg = document.querySelector(
        '.photograph-header .photographImg',
    );
    const picture = `assets/photographers/Photographers/${photographer.portrait}`;
    console.log(picture)
    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', photographer.name);
  
    headerSectionImg.appendChild(img);
  }
  
  getPhotographer();
  