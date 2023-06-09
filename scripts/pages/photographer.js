function getId() {
  const str = window.location.href;
  const url = new URL(str);
  if (url.searchParams.get('id')) {
    const id = url.searchParams.get('id');
    return id;
  }
}
async function getPhotographer() {
    try {
      const response = await fetch('http://127.0.0.1:5500/data/photographers.json');
      const data = await response.json();
      const id = getId();
      let photographer = data.photographers.find((photographer) => photographer.id == id)

      console.log(photographer)

      // let MesMedias = les médias
      let medias = data.media
      const photographerId = photographer.id;
      const filteredMedias = medias.filter((media) => media.photographerId === photographerId);

      console.log(filteredMedias); 

      // Lancemetn de la factory methode
  
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

//   async function displayData(photographers) {
//     const photographersSection = document.querySelector(".photographer_section");

//     photographers.forEach((photographer) => {
//         const photographerModel = mediaFactory(photographer);
//         const mediaCardDOM = photographerModel.getMediaCardDOM();
//         mediaCardDOM.addEventListener('click', () => {
//           const detailsURL = `photographer.html?id=${photographer.id}`;
//           window.location.href = detailsURL;
//         });
//         photographersSection.appendChild(userCardDOM);
//     });
// };
  
  
  function displayHeader(photographer) {
    const headerSectionInfo = document.querySelector('.photograph-header .photographInfo');
  
    // const title = document.createElement('h1');
    const title = document.getElementById('name');
    title.textContent = photographer.name;
  
    const location = document.getElementById('location');
    location.textContent = `${photographer.city}, ${photographer.country}`;
  
    const taglineElement = document.getElementById('tagline');
    taglineElement.textContent = photographer.tagline;
  
    const headerSectionImg = document.querySelector(
        '.photograph-header .photographImg',
    );
    const picture = `assets/photographers/Photographers/${photographer.portrait}`;
    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', photographer.name);
  
    headerSectionImg.appendChild(img);
  }
  
  getPhotographer();
  