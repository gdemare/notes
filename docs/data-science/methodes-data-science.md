Dans le cas d'un projet de data mining :

1. Cadrage et définition.
2. Management des données.
3. Exploration des données.
4. Modélisation et analyse des données.
5. Mise en œuvre opérationnelle.

## Etape d'un projet d'apprentissage autonatique

1. Pré traitement des données
2. Constituion d'un jeu d'apprentissage et de test
3. Choix de l'algorithme
4. Adapter les paramètres de l'algorithme aux données
5. Prédire
6. Evaluer
7. Exporter le modèle.

## Méthodes

### Supervisées

Les métodes d'apprentissage supervisé (attention en anglais supervisé est équivalent à classification) pour faire des prévisions.

!!! note
    On parle de prévision plutôt de prédiction. La différence se situe dans le fait que la prévision s'appuie sur des indices pour anticiper 

Les méthodes d'apprentissage sont divisé en deux catégorie en fonction du type de variables à prédire :

* variable numérique. On parle de régression.
* variable qualitative. On parle de classification.

Certaines méthodes peuvent être utilisé pour contrôler la qualité du jeu d'apprentissage c'est à dire pour s'assurer que les paramètres du modèle ne dépendent pas du jeu d'apprentissage :

* k fold. On calcul des paramètres en faisant plusieurs jeux de données d'apprentissage et de test.

### Non supervisées

Construire des groupes d'individus similaire en fonction d'une variable d'intérêt non triviale.

* Cluestering regrouper les données pour trouver des stuctures de données.
* Découvrir des strucutres de données, résumer les données, détecter des individus atypiques.
* Réduction de dimension, estimation de la densité, synthétiser l'information, éliminer les corrélations.

## Cluestering sans cible

### Enjeux 

Constuire des groupes d'individus sans connaître la variable cible avec des règles simples.

### Exemple 

Identifier les clients banque principale.

### Méthode

* Créer la population cible avec des régles métiers.
* Identifier les variables les plus influentes (méthodes de classification avec notamment la forêt aléatoire, l'arbre de décision).
* Construire des règles métiers pour retrouver les classes (arbre de décision).
