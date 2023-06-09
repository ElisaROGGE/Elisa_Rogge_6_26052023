function mediaFactory(data) {
    const { id, photographerId, title, image = null, video = null, likes, date, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        
        article.appendChild(img);
        return (article);
    }

    // Function qui créer une image HTML
    // Function qui créer une vidéo HTML
    // Function getCarMedia vérifier le type du media (soit je lance image ou vidéo)


    return { name, picture, getMediaCardDOM }
}