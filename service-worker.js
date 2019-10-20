// service worker basics
console.log("Service worker code.")


self.addEventListener('install', function(event) {
  console.log('Service worker installing');
});

self.addEventListener('activate', function(event) {
  console.log('Service worker activating');
});