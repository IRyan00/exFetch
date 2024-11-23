// Sélectionne l'élément HTML avec l'ID "characters-container"
// Cet élément servira de conteneur pour insérer dynamiquement les informations des personnages.
const container = document.getElementById('characters-container');

// Effectue une requête HTTP GET à l'API Rick and Morty pour récupérer les données des personnages.
fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    // Une fois la réponse reçue, on la convertit en JSON pour qu'elle devienne manipulable en JavaScript.

    .then(data => {
        // Accède à l'objet contenant les données retournées par l'API.
        // La propriété `results` contient un tableau de personnages.

        data.results.slice(0, 4).forEach(character => {
            // `slice(0, 4)` limite le tableau à seulement les 4 premiers personnages.
            // `forEach` parcourt chaque personnage sélectionné et exécute une fonction pour chacun.

            container.innerHTML += `
            <div class="col-md-4">
                <div class="card">
                    <img src="${character.image}" alt="${character.name}"/>
                    <p>${character.name}</p>
                    <p>${character.id}</p>
                    <p>${character.status}</p>
                    <p>${character.species}</p>
                    <p>${character.gender}</p>
                    <p>${character.origin.name}</p>
                    <p>${character.location.name}</p>
                </div>
            </div>
            `;
            // La structure ci-dessus génère une carte pour chaque personnage,
            // contenant toutes les informations pertinentes : image, nom, ID, statut, etc.
            // Chaque carte est insérée dans le conteneur HTML avec `innerHTML +=`.
        });
    });
// Aucune gestion d'erreur n'est ajoutée ici. Si la requête échoue, cela pourrait causer des problèmes silencieux.



// // 1. Conteneur pour afficher les Pokémon
const content = document.getElementById("pokemon-container");
// Récupère l'élément HTML où les cartes des Pokémon seront insérées.

fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150")
    // Fait une requête HTTP GET à l'URL pour récupérer une liste de 6 Pokémon.

    .then(response => response.json())
    // Transforme la réponse brute en un objet JSON utilisable par JavaScript.

    .then(data => {
        // Une fois que les données JSON sont disponibles, cette fonction est appelée avec "data" comme argument.

        data.results.forEach(poke => {
            // Parcourt tous les Pokémon dans la propriété "results" de l'objet retourné par l'API.

            fetch(poke.url)
                // Fait une requête GET pour récupérer les détails de chaque Pokémon, y compris les images.

                .then(response => response.json())
                // Transforme la réponse détaillée en JSON.

                .then(details => {
                    // Accède aux détails du Pokémon, y compris son image (sprite).

                    content.innerHTML += ` 
            <div class="col-md-4">
              <div class="card mb-3">
                <img src="${details.sprites.front_default}" class="card-img-top" alt="${details.name}">
                <div class="card-body">
                  <h5 class="card-title">${details.name}</h5>
                      <h5 class="card-title">${details.type}</h5>

                  <p clashttps://flagpedia.net/download/apis="card-text">ID: ${details.id}</p>
                </div>
              </div>
            </div>
          `;
                    // Ajoute une carte Bootstrap contenant le nom, l'image et l'ID du Pokémon.
                })
                .catch(error => console.error("Erreur lors du chargement des détails :", error));
            // Gère les erreurs spécifiques à la requête pour les détails de chaque Pokémon.
        });
    })

    .catch(error => console.error("Erreur lors du chargement des Pokémon :", error));
// Gère les erreurs globales, comme un problème réseau ou une URL incorrecte.code