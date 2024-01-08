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

Certaines méthodes peuvent être utilisées pour contrôler la qualité du jeu d'apprentissage càd pour s'assurer que les paramètres du modèle ne dépendent pas du jeu d'apprentissage :

* k-fold. On calcul des paramètres en faisant plusieurs jeux de données d'apprentissage et de test pour déterminer si le modèle dépend des données d'apprentissage.
* boosting. 

### Non supervisées

Construire des groupes d'individus similaire en fonction d'une variable d'intérêt non triviale. Ces méthodes permettent notamment de :

* Regrouper les individus dans des groupes càd de créer des profils.
* Résumer les données et synthétiser l'information.
* Détecter des individus atypiques.

