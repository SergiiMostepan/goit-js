'use strict';
import gallery from './gallery-items.js';
const createGallaryItem = function (gallery) {
  gallery.forEach(image => {
    const row = `
    <li class="gallery__item">
    <a
      class="gallery__link"
      href="${image.preview}"
    >
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </li>`;
    document.querySelector('.gallery').insertAdjacentHTML('beforeend', row);
  });
}

createGallaryItem(gallery);