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

    let medias = data.media;
    const photographerId = photographer.id;
    const filteredMedias = medias.filter((media) => media.photographerId === photographerId);

    if (photographer) {
      displayHeader(photographer);
      displayData(filteredMedias);
    } else {
      console.error('Aucun photographe trouvé avec cet identifiant');
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des détails du photographe :', error);
    return null;
  }
}


async function displayData(medias) {
  const mediaSection = document.querySelector(".media");

  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();

    mediaSection.appendChild(mediaCardDOM);
  });
}

function displayHeader(photographer) {
  const title = document.getElementById('name');
  title.textContent = photographer.name;

  const location = document.getElementById('location');
  location.textContent = `${photographer.city}, ${photographer.country}`;

  const taglineElement = document.getElementById('tagline');
  taglineElement.textContent = photographer.tagline;

  const headerSectionImg = document.querySelector('.photograph-header .photographImg');
  const picture = `assets/photographers/Photographers/${photographer.portrait}`;
  const img = document.createElement('img');
  img.setAttribute('src', picture);
  img.setAttribute('alt', photographer.name);

  headerSectionImg.appendChild(img);
}

async function init() {
  await getPhotographer();
}

init();
