

!!! note
    L'ACM est une généralisation de l'AFC.

## ACF

* Étudier l'association entre deux variables qualitatives.

Afficher la correspondance entre deux modalités.
La mesure de l'association entre deux variables qualitatives est la distance du khi-2. Une réduction de dimensions permet de condenser l'information sur les premiers axes.

## Utilité

### Interprétation

Les modalités associées sont situées proche sur le graphique. 

## ACM

Les variables corrélées sont transformées en nouvelles variables décorrélées les unes des autres. On change de repére en maximisant l'information sur le premier axe puis on sélectionne des axes orthogonaux qui maximisent l'information.

### ACM sur tableau de contigence

Calcule la projection des modalités et des individus.

Inconvénients           | Avantage
------------------------|---
Gourmand en ressources  | 1 étape 

$\alpha$ la valeur propre pour un axe.

### ACM sur tableau de Burt

Calcule la projection des modalités.

| - | + |
|---|---|
| 2 étapes | ressources |

$\alpha ^2$ la valeur propre pour un axe.

Les coordonnées des individus se calculent avec la formule suivante :

Moyenne des coordonnées des modalités sur l'axe divisée par la racine carré de la valeur propre de l'axe.