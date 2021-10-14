function registerServiceWorker() {
  // enregistre le script sw avec les navigateurs qui le gèrent
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { scope: '/' }).then(() => {
      console.log('Service Worker enregistré correctement.');
    }).catch(error => {
      console.log('Erreur lors de l''enregistrement du Service Worker : ', error);
    });
  }
}
