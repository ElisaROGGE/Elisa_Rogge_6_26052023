function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;
  
    const picture = `assets/photographers/Photographers/${portrait}`;
  
    function getUserCardDOM() {
      const article = document.createElement('article');
      article.setAttribute('tabindex', '1')
      article.setAttribute('aria-label', 'photographer')
      const img = document.createElement('img');
      img.setAttribute('src', picture);
      img.setAttribute('alt', `${name} - Portrait`);
      const h2 = document.createElement('h2');
      h2.textContent = name;
      const location = document.createElement('p');
      location.textContent = `${city}, ${country}`;
      location.className = 'location';
      const taglineText = document.createElement('p');
      taglineText.textContent = tagline;
      taglineText.className = 'tagline';
      const priceText = document.createElement('p');
      priceText.textContent = `${price}€/jour`;
      priceText.className = 'price';
      article.appendChild(img);
      article.appendChild(h2);
      article.appendChild(location);
      article.appendChild(taglineText);
      article.appendChild(priceText);
      return article;
    }
  
    return { name, picture, getUserCardDOM };
  }
  