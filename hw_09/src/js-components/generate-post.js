import posts from '../menu.json';
import postFeedItemsTemplate from '../templates/post-feed-item.hbs';

const ulList = document.querySelector('.js-menu')


buildPosts(posts, ulList, postFeedItemsTemplate);

function buildPosts(posts, place, template) {
  const markup = posts.map(post => template(post)).join('');
  place.insertAdjacentHTML('beforeend', markup)
}
