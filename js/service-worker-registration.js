//// Registering service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('FEND-Restaurant-Reviews-App/sw.js', {scope: '/FEND-Restaurant-Reviews-App/'})
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

