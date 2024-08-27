var CACHE_NAME = 'pwa-task-manager';
var urlsToCache = [
    '/',  
    '/index.html',
    '/main.js',
    '/App.css',
    '/index.css',
  
    // Assets
    '/assets/fitClub.png',
    '/assets/landing.png',
    '/assets/moviex.png',
    '/assets/profile.jpeg',
    '/assets/react.svg',
    '/assets/resume.png',
    '/assets/robo.png',
    '/assets/sanjeev_resume.pdf',
    '/assets/vite.png',
  
    // Components styles
    '/components/About/about.css',
    '/components/Contact/Contact.css',
    '/components/ContactPopup/ContactPopup.css',
    '/components/Experience/Experience.css',
    '/components/Hero/hero.scss',
    '/components/NavBar/Nav.css',
    '/components/Portfolio/Portfolio.css',
    '/components/Resume/Resume.css',
    '/components/Skills/Skills.css',
  
    // Context and locale files
    '/Context/Locale/chinese.tsx',
    '/Context/Locale/english.tsx',
    '/Context/Locale/french.tsx',
    '/Context/Locale/hindi.tsx',
    '/Context/Locale/polish.tsx',
  
    // Other resources
    '/utils.tsx',
  ];


  // Install a service worker
self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });
  
  // Cache and return requests
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });
  
  // Update a service worker
  self.addEventListener('activate', event => {
    var cacheWhitelist = ['pwa-task-manager'];
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });