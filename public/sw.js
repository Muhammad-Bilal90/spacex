const cacheName = 'v1';

/*
const cacheAssets = [
  'serviceRegister.js',
  '/index.html',
  '/static/js/bundle.js',
  '/static/js/1.chunk.js',
  '/static/js/main.chunk.js',
  '/App.js',
  '/',
];
*/




 const cacheAssets = [
  '/',
  '/rockets',
  '/ships',
  '/missions',
  'index.html',

  './static/js/2.405b4e47.chunk.js',
  './static/js/main.59905b3f.chunk.js',
  './static/js/runtime-main.81435ab8.js',
  './static/css/2.11829350.chunk.css',
  './static/css/main.4f713c0b.chunk.css',
  
  // --------------------------------------------

  '/static/media/Logo.02af421525793ce695ee.jpeg',
  '/static/media/toggle.9edfd30de83ab8492410.png',
  '/static/media/ElonMusk.708085ec661e17ef28cd.jpg',
  '/static/media/GwynneShotwell.8c91e3994d090fcce849.jpg',
  '/static/media/TomMuller.7f9dffb35034207ee09a.jpg',
  '/static/media/HomeCover.60fb50b75b063d18e12d.jpg',
  '/static/media/no_image_available.b59890b7b479e863e07c.jpg',
  '/static/js/main.1e2c9118.js',

 ];








 self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');

  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});







self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

      .then(response => {
        
        return caches.open(cacheName).then(cache => {
          if (response.type === "basic"){
          cache.put(event.request.url, response.clone());
        }
          return response;
        });
      }).catch(()=>{
       return caches.match('./').then(response => {
          if (response) {
            console.log('Found ', event.request.url, ' in cache');
            console.log(response);
            return response;
          }
        });

        });

    }).catch(error => {
    
        console.log("error in loading pages")

    })
  );
});



self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheAllowlist = [cacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});



/*
self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)
      .then(response => {
        
        return caches.open(cacheName).then(cache => {
          if (response.type === "basic"){
          cache.put(event.request.url, response.clone());
        }
          return response;
        });
      });
    }).catch(error => {
    
        console.log("error in loading pages")
    })
  );
});
*/