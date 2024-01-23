Appelé aussi K-means, moyennes mobiles, centroïdes, k moyenne mobiles.

k points (appelés centres) sont initialisés aléatoirement. L'algorithme attribut les points les plus proches à chaque centre. Les centres sont recalculés. Le résultat dépend de l'initialisation des points. 

1. Calcul de la matrice des distances entre les points et les centres mobiles.
2. Les centres mobiles sont recalculés pour devenir le baricentre du groupe de points.
3. Les étapes précédentes sont répétées jusqu'à obtenir des groupes stables.

!!! note
	La méthode des nuées dynamiques consiste a remplacer les centroïdes par des noyaux c'est-à-dire un groupe d'individus centraux.

Avantages	| Inconvénients
------------|---
Rapide		| Non robuste