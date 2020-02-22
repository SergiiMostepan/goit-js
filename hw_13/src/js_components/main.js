// import getAPI from './apiService.js';
import {
  debounce
} from 'lodash';
import galleryTemplate from '../tamplates/image_list.hbs';
import InfiniteScroll from 'infinite-scroll';
// import PNotify from 'pnotify/dist/es/PNotify.js';

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
};

const infScrollInstance = new InfiniteScroll(refs.gallery, {
  path() {
    return `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${actions.curentQuerry}&page=${this.pageIndex}&per_page=12&key=15351993-20fbe64b80ff3985c977b1876`;
  },
  history: false,
  responseType: 'text',
  scrollThreshold: 1000,
});

infScrollInstance.on('load', response => {
  const posts = JSON.parse(response);
  if (posts.hits.length < 1) {
    // window.scrollBy(0, -40);
    // return PNotify.error({
    //   text: 'Sorry, we could not find anything',
    //   delay: 2000,
    // });       временно решение пока не заработает PNotify

    // debounce(alert('Can\'t load items...'), 2000)
  }
  const markup = posts.hits.map(post => galleryTemplate(post)).join('');
  //   const markup = posts.hits.reduce((string, post) => string + galleryTemplate(post), '')
  const proxyEL = document.createElement('div');
  proxyEL.innerHTML = markup;
  infScrollInstance.appendItems(proxyEL.querySelectorAll('.photo-card'));
});

// console.log(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=1&per_page=12&key=15351993-20fbe64b80ff3985c977b1876`)

// const actions = {
//   name: refs.input.elements[0].value,
//   page: 1,
//   searchImages() {
//     getAPI(actions.name, this.page).then(data => {
//       let markup = galleryTemplate(data);
//       console.log(data);
//       actions.renderingItems(markup);
//     });

//   },
//   renderingItems(items) {
//     return refs.gallery.insertAdjacentHTML('beforeend', items);
//   },
// };

refs.input.addEventListener(
  'input',
  debounce(e => {
    //   e.preventDefault()
    actions.searchImages(e.target.value);
  }, 500),
);

// document.addEventListener('DOMContentLoaded', () => {
//   return infScrollInstance.loadNextPage();
// });
