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

      initFilter(filteredMedias);
    } else {
      console.error('Aucun photographe trouvé avec cet identifiant');
    }
  }
   catch (error) {
    window.location.href = 'http://127.0.0.1:5500/'
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

const btn = document.querySelector(".dropbtn");

function toggleDropdown() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");

  if (dropdown.classList.contains("show")) {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        btn.style.display = "none"
        openDropdown.classList.remove('show');
      }
    }
  }
}

function initFilter(medias) {
  const mediaSection = document.querySelector(".media");
  document.getElementById("populaire").addEventListener("click", function() {
    const filterLikes = medias.sort((a, b) => b.likes - a.likes); 

    while (mediaSection.firstChild) {
      mediaSection.removeChild(mediaSection.firstChild);
    }
    btn.style.display = "block"
    btn.textContent = "Popularité"
    displayData(filterLikes);
  });
  document.getElementById("date").addEventListener("click", function() {
   const filterDate = medias.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

    while (mediaSection.firstChild) {
      mediaSection.removeChild(mediaSection.firstChild);
    }
    btn.style.display = "block"
    btn.textContent = "Date"
    
    displayData(filterDate);
  });

  document.getElementById("titre").addEventListener("click", function() {
    const filterTitle = medias.sort((a, b) => {
      const titreA = a.title.toLowerCase();
      const titreB = b.title.toLowerCase();
      if (titreA < titreB) {
        return -1;
      }
      if (titreA > titreB) {
        return 1;
      }
      return 0;
    });

    while (mediaSection.firstChild) {
      mediaSection.removeChild(mediaSection.firstChild);
    }
    btn.style.display = "block"
    btn.textContent = "Titre"
    displayData(filterTitle);
  });
}


async function init() {
  await getPhotographer();
}

init();

