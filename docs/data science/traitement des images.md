L'histogramme d'une image représente la distribution des couleurs.
Généralement, une image plaisante aura un histogramme de proche d'une fonction plate. Les couleurs seront réparties de façon égale.

## Prétraitement

### Transformation d'histogramme

La transformation d'histogramme permet :

* en pré-traitement pour normaliser l’image
* post-traitement pour améliorer la visualisation

### Déconvolution

Déconvolution couleur séparer les canaux des différentes couleurs

### Filtres

Les filtres peremttent de modifier l'image en fonction de certains critères pour :
* améliorer les détails
* réduire le bruit.
* extraire des caractéristiques. 

Les principaux filtres sont :
* passe-bas fréquentiel atténuer les hautes fréquences de l'image (brouillard, détails fins, bruit) tout en préservant les basses fréquences (grandes structures).
* passe-bas (lissage) ou flou gaussien :
 * réduction du bruit : Les pixels bruités sont atténués en prenant la moyenne avec leurs voisins.
 * lissage des images : utilisé pour éliminer les détails fins et les textures.
* passe-haut (Accentuation des bords)  Mettre en évidence les contours et les transitions de l'image.
* de moyenne (moyenne mobile) :
 * réduction du bruit (bruit aléatoire ou "sel et poivre").
 * simplification d'image pour une analyse ultérieure.

#### Morphologie mathématique

La morphologie en traitement d'images sert à filtrer, segmenter et quantifier.

* filtre médian : une fenêtre glissante avec l'application d'une fonction. Il attribue au pixel central la valeur médianne des pixels de la fenêtre.
* érosion réduire la taille des objets.
* dilation agrandir.

élement structurant. forme élémentère;

Max  dilatation (aggrandir les zones claires)
Min érosion les zones sombres.

!!! note
  Appliquer une dilation sur une image est équivalent à appliquer une érosion sur l'image avec les couleurs inversées.

Former deux nouveaux opérateurs
Fermeture dilation puis une érosion 
fermer les espaces plus petits que l'élément structurant.
éclaisir petite zone sombres

Ouverture érosion puis dilation supprime les éléments plus petits que l'élément structurant. supprimer clair

#### Transformation 

###### Fourrier

La transformation de Fourrier sert à :

* la détection de d'orientation spécifique notamment de l'astigmatisme. L'astigmatisme est une déformation de l'image par l'objectif.

###### Ondelettes

technique de traitement de signal utilisée pour décomposer une image en plusieurs composants de fréquences à différentes échelles. Cela permet d'extraire :

* les détails fins
* les contours
* les textures dans une image.

!!! note 
    Il existe plusieurs méthodes pour appliquer de transformation en ondelettes.

Chaque image est décomposée en sous-bande représentant une fréquence et une orientation particulière.

faible fréquence approximation et hautes fréquences détails.

## Ségmentation

### Seuillage

#### Automatique

Les plus utilisés :

| Méthode de seuil | Définition | Avg/incon |
|---|---|---|
| Global thresholding | un seuil pour toute l'image | rapide  |
| Local adaptative thresholding | un seuil pour chaque pixel en fontion de son environnement | gourmand en ressources mais performant |

## Ressources

* [devbio-napari](https://github.com/haesleinhuepf/devbio-napari)
