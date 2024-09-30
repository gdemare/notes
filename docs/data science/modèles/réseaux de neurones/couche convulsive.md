## Concept

Inspiré du système visuel chez les Animaux. 
Aggrégation de données.
## Extracteur de caractéristiques

L'extraction se fait par l'application de trois opérations :

* Filtrer l'image pour mettre en valeur certains éléments.
* Détecter les schémas.
* Condenser et accentuer les schèmas (maximum pooling).

Les réseaux convulsifs utilisent des positions relatives ce qui permet d'identifier des cas de translation et de rotation comme des situations identiques.

poids du noyau son multiplié avec les valeurs de la matrice.
carte d'activation

Taille de l'activation map :   même chose pour la hauteur 
`stride` taille du déplacement (par défaut 1)

$\frac{largeur\ de\ l'image - noyau + 1}{stride}$

`padding=` ajout de colonne et ligne pour agrandir la matrice padding=1 correspond à l'ajout de deux colonnes et de deux liges au début et à la fin.
