// On écoute l'évènement install pour effectuer les actions de démarrage
self.addEventListener("install", function(event) {
  // Ici on utilise waitUntil qui attends une promesse pour valider l'installation
  event.waitUntil(
    caches.open("mon-site-cache-v1").then(function(cache) {
      // On met en cache une liste d'URLs qui sont la fondation de notre app.
      return cache.addAll([
          "/",
          "/styles/main.css", 
          "/script/core.js"
      ]);
    })
  );
});

// On indique que pour chaque requêtes, si cela match nos URLs de cache défini plus haut, alors on servira le cache plutôt que d'effectuer la vrai requête par le réseau.
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache HIT, on retourne la réponse en cache.
        if (response) {
          return response;
        }
        
        // Sinon on effectue la requête réellement et on retourne son contenu.
        return fetch(event.request);
      }
    )
  );
});
// on vérifie que le navigateur est compatible avec service worker.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/service-worker.js").then(
      function(registration) {
        console.log("Enregistrement OK - Scope : ", registration.scope);
      },
      function(err) {
        console.log("Erreur d'enregistrement : ", err);
      }
    );
  });
}