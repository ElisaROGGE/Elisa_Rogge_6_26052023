async function getPhotographers() {
  try {
    const response = await fetch('http://127.0.0.1:5500/data/photographers.json');
    const data = await response.json();
    console.log(data.photographers)

    const photographers = data.photographers.map(item => ({
      name: item.name,
      id: item.id,
      city: item.city,
      country: item.country,
      tagline: item.tagline,
      price: item.price,
      portrait: item.portrait
    }));

    return { photographers };
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération du fichier JSON :', error);
    return { photographers: [] }; 
  }
}
  

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        userCardDOM.addEventListener('click', () => {
          const detailsURL = `photographer.html?id=${photographer.id}`;
          window.location.href = detailsURL;
        });
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
    
