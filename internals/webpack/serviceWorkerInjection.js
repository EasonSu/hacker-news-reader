const HN_CACHE_NAME = 'hn.v.1';
const urlRegexp = /^https:\/\/hacker-news\.firebaseio\.com\/v0/;

class NetworkFisrtResponse {
  constructor(request) {
    this.request = request;
  }

  respond() {
    return this.respondWithNetworkFisrt();
  }

  respondWithNetworkFisrt() {
    return fetch(this.request)
      .then((response) => {
        if (response.ok) {
          // Respond to the request in non-block manner
          this.cacheResponse(response.clone());
          return response;
        }
        throw response;
      })
      .catch(err => this.respondWithOptionalCache(err));
  }

  cacheResponse(response) {
    return caches.open(HN_CACHE_NAME)
      .then((cache) => {
        cache.put(this.request, response);
        return response;
      });
  }

  respondWithOptionalCache(err) {
    return caches.match(this.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        // Pass to application layer
        return err;
      });
  }
}

// eslint-disable-next-line
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (urlRegexp.test(request.url)) {
    event.respondWith(new NetworkFisrtResponse(request).respond());
  }
});
