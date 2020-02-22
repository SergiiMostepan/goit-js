export default function getAPI(name, page) {
  return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=12&key=15351993-20fbe64b80ff3985c977b1876`)
    .then(response => {
      return response.json();
    }).then(data => {
      return data.hits
    }).catch(error => console.warn('ERRRRROOOORR' + error))
}
