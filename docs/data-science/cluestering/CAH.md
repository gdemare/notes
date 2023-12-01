# Classification Ascendantes Hiéarchiques

## Concept

Les individus sont regroupés deux à deux en fonction d'un critère (similarité des données) jusqu'a obtenir une seule classe.

L'inertie :

* Totale est $I_t = \Sigma
* Intraclasse (moyenne de la somme des distances entre la 
* Interclasse

Avec 

* `g` le centre de gravité de tous les points.
* `g_i` le centre de gravité de chaque groupe.
* `x_i` les coordonnées des individus.
* `n_i` l'effectif.

## Les méthodes

### Ward 

La méthode de Ward cherche à maximiser l'inertie interclasse et minimiser intra classe pour obtenir des classes homogènes.




!!! note 
	La méthode requière un nombre considérable de ressources car il faut calculer tous les regroupements possibles.

!!! note 
	C'est la méthode la plus utilisée.



Coefficient de Gini

## Type de variables

* quantitatives
* (qualitatives avec un tableau disjonctif)

## Utilité

* Clustering

## Attribut

+ 	| -
----|---
	| couteux

## Nbre de groupes à conserver 

L'évolution du critère détermine le nombre de classes à conserver. 

## Représentation graphique

Dendrogramme
