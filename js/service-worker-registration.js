//// Registering service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', {scope: 'https://github.com/Sravanthi-cb/FEND-Restaurant-Reviews-App-Stage-1'})
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

