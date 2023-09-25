## Traitement d'histogramme

L'histogramme d'une image représente la distribution des couleurs.
Généralement, une image plaisante aura un histogramme de proche d'une fonction plate. Les couleurs seront réparties de façon égale.

### Transformation d'histogramme

en pré-traitement pour normaliser l’image
post-traitement pour améliorer la visualisation

## Morphologie mathématique

La morphologie en traitement d'images sert à filtrer,  segmenter et quantifier.

Filtre médian 

Une fenêtre glissante avec l'application d'une fonction.
Filtre médian attribue au pixel central la valeur médianne des pixels de la fenêtre.

érosion réduire la taille des objets
dilation agrandir.

élement structurant. forme élémentère;

Max  dilatation (aggrandir les zones claires)
Min érosion les zones sombres.

Rmq : Appliquer une dilation sur une image est équivalent à appliquer une érosion sur l'image avec les couleurs inversées.

Former deux nouveaux opérateurs
Fermeture dilation puis une érosion 
fermer les espaces plus petits que l'élément structurant.
éclaisir petite zone sombres

Ouverture érosion puis dilation supprime les éléments plus petit que l'élément structurant.surppimer clair
