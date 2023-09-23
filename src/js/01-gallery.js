import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

document.addEventListener("DOMContentLoaded", function () {

  const galleryList = document.querySelector('.gallery');

  
  galleryItems.forEach(item => {
    const galleryItem = document.createElement('li');
    galleryItem.innerHTML = `
      <a href="${item.original}">
        <img src="${item.preview}" alt="${item.description}">
      </a>
    `;
    galleryList.appendChild(galleryItem);
  });

 
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
  });
});

