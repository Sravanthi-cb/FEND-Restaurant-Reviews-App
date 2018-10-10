// Install the cache
self.addEventListener('install', event => {
	event.waitUntil(
	  caches.open('v1').then(cache => {
		return cache.addAll([
			'/FEND-Restaurant-Reviews-App/',
			'/FEND-Restaurant-Reviews-App/index.html',
			'/FEND-Restaurant-Reviews-App/restaurant.html',
			'/FEND-Restaurant-Reviews-App/css/styles.css',
          		'/FEND-Restaurant-Reviews-App/img/1.jpg',
          		'/FEND-Restaurant-Reviews-App/img/2.jpg',
          		'/FEND-Restaurant-Reviews-App/img/3.jpg',
          		'/FEND-Restaurant-Reviews-App/img/4.jpg',
          		'/FEND-Restaurant-Reviews-App/img/5.jpg',
          		'/FEND-Restaurant-Reviews-App/img/6.jpg',
          		'/FEND-Restaurant-Reviews-App/img/7.jpg',
          		'/FEND-Restaurant-Reviews-App/img/8.jpg',
          		'/FEND-Restaurant-Reviews-App/img/9.jpg',
          		'/FEND-Restaurant-Reviews-App/img/10.jpg',
			'/FEND-Restaurant-Reviews-App/data/restaurants.json',
			'/FEND-Restaurant-Reviews-App/js/main.js',
			'/FEND-Restaurant-Reviews-App/js/dbhelper.js',
			'/FEND-Restaurant-Reviews-App/js/restaurant_info.js'
		
		]).catch(err => {
			console.log("Error: ", err);
		});
	}));
});

// Fetch from the network
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
		return response || fetch(event.request);
		}) .catch(err => console.log(err, event.request))
	);
});
