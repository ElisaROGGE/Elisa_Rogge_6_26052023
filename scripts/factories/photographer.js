function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/Photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement( 'span' );
        location.textContent = city + ', ' + country;
        location.className = "location"
        const taglineText = document.createElement( 'span' );
        taglineText.textContent = tagline;
        taglineText.className = 'tagline'
        const priceText = document.createElement( 'span' );
        priceText.textContent = price + '€/jour';
        priceText.className = 'price'
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(taglineText);
        article.appendChild(priceText);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}