Appelé aussi K-means, moyennes mobiles...

## Concept

k points (appelés centres) sont initialisés aléatoirement. L'algorithme attribut les points les plus proches à chaque centre. Les centres sont recalculés. Le résultat dépend de l'initialisation des points. 

### Données

* Quantitatives.
* Qualitatives transformées en quantitatives grâce à l'ACM.

### Utilité

* Cluestering.
* Remplacer les valeurs manquantes.
* Identifier les individus atypiques.

### Nuée dynamique

Les centroïdes sont remplacés par des noyaux c'est-à-dire un groupe d'individus centraux.

## Distance 

!!! note
	Il est conseillé de normaliser les données quantitatives pour donner le même poid à chaque variable.

Distance		| Type
----------------|---
Euclidienne		| Distance entre deux points.
Manhattan		| Distance en angle droit.
Khi 2			| Distance calculé en comparant deux distributions.
Ward			| Minimiser l'inertie intra-classe.


k moyenne mobiles

## Attribut

Avantages	| Inconvénients
------------|---
Rapide		| Non robuste
