const medUrl = prompt('Input the Medium Article URL you would like to view');
const googCacheUrl = 'https://webcache.googleusercontent.com/search?q=cache:';

let fullUrl = '';

if (medUrl) {
  fullUrl = googCacheUrl + medUrl;
  location.assign(fullUrl);
}

