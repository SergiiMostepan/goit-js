import {
  debounce
} from 'lodash';
import galleryTemplate from '../tamplates/image_list.hbs';
import InfiniteScroll from 'infinite-scroll';
import PNotify from 'pnotify/dist/es/PNotify.js';
import * as basicLightbox from 'basiclightbox';
import moduleImageTemplate from '../tamplates/module_image.hbs'

const refs = {
  input: document.querySelector('.search-form'),
  gallery: document.querySelector('#gallery'),
};

const actions = {
  curentQuerry: '',
  searchImages(querryImage) {
    if (!querryImage) return;
    if (querryImage !== this.curentQuerry) {
      this.curentQuerry = querryImage;
      refs.gallery.innerHTML = '';
      infScrollInstance.pageIndex = 1;
      infScrollInstance.loadNextPage();
    }
  },
  moduleWindow(currentImage) {
    const imageInstance = basicLightbox.create(moduleImageTemplate(currentImage));
    imageInstance.show();
  }
};

const infScrollInstance = new InfiniteScroll(refs.gallery, {
  path() {
    return `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${actions.curentQuerry}&page=${this.pageIndex}&per_page=12&key=15351993-20fbe64b80ff3985c977b1876`;
  },
  history: false,
  responseType: 'text',
  status: '.loader-ellips',
  scrollThreshold: 0,
});

infScrollInstance.on('load', response => {
  const posts = JSON.parse(response);
  if (posts.hits.length < 1) {
    window.scrollBy(0, -40);
    return PNotify.alert({
      text: 'Sorry, we could not find anymore',
      delay: 2000,
    });
  }
  const markup = posts.hits.map(post => galleryTemplate(post)).join('');
  //   const markup = posts.hits.reduce((string, post) => string + galleryTemplate(post), '')
  const proxyEL = document.createElement('div');
  proxyEL.innerHTML = markup;
  infScrollInstance.appendItems(proxyEL.querySelectorAll('.photo-card'));
});

refs.input.addEventListener(
  'input',
  debounce(e => {
    // e.preventDefault()
    actions.searchImages(e.target.value);
  }, 500),
);

refs.gallery.addEventListener('click', e => {
  if (e.target.dataset.big) return actions.moduleWindow(e.target)
})
