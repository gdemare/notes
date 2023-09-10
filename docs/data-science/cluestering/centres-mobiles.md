## Concept

k points (appelés centres) sont initialisés aléatoirement. L'algorithme attribut les points les plus proches à chaque centre. Les centres sont recalculés. Le résultat dépend de l'initialisation des points. 

### Données

Quantitatives
Qualitatives transformées en quantitatives grâce à l'ACM.

### Utilité

* Cluestering.
* Remplacer les valeurs manquantes.
* Identifier les individus atypiques.

### Nuée dynamique

Les centroîdes sont remplacés par des noyaux c'est-à-dire un groupe d'individus centraux.

## Distance 

NB : il est conseillé de normaliser les données quantitatives pour donner le même poid.

| Distance | Type |
|---|---|
| euclidiénne | distance entre deux points |
| Manhattan | distance en angle droit | |
| khi 2 | distance calculé en comparant deux distributions |
| Ward | minimiser l'inertie intra-classe |

 k moyenne mobiles
## Attribut

| + | - |
|---|---|
| rapide | Non robuste |

## Issue 

