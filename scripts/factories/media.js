function mediaFactory(data) {
    const { id, photographerId, title, image = null, video = null, likes, date, price } = data;
  
    console.log('data:', image);
    const picture = `assets/photographers/${image}`;
  
    function getMediaCardDOM() {
      const article = document.createElement('article');
      const img = document.createElement('img');
      img.setAttribute('src', picture);
      const mediaTitle = document.createElement('span');
      mediaTitle.textContent = title
      article.appendChild(img);
      article.appendChild(mediaTitle)
      return article;
    }
  
    return { picture, getMediaCardDOM };
  }
  