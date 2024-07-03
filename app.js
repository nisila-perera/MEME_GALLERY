fetch("https://api.imgflip.com/get_memes")
  .then(res => res.json())
  .then(data => {
    let memeGallery = document.getElementById("meme-gallery");
    let galleryContent = ``;

    data.data.memes.forEach(meme => {
      galleryContent += `
        <div class="meme-item">
          <img src="${meme.url}" alt="${meme.name}" width="300px">
          <p>${meme.name}</p>
        </div>
      `;
    });

    memeGallery.innerHTML = galleryContent;
  }

).catch(error => console.error('Error:', error));