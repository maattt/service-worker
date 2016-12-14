if ('serviceWorker' in navigator) {
  console.log("ok");
  navigator.serviceWorker.register('/my-sw/serviceworker.js', {
    scope: '/my-sw/'
  }).then(function(reg){
    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }
  });
} else {
  console.log("nok");
}