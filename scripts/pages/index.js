async function getPhotographers() {
  try {
    const response = await fetch('http://127.0.0.1:5500/data/photographers.json');
    const data = await response.json();

    const photographers = data.photographers

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
        userCardDOM.addEventListener('keydown', (event) => {
          if(event.key === "Enter"){
            const detailsURL = `photographer.html?id=${photographer.id}`;
            window.location.href = detailsURL;
          }
        });
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
    
