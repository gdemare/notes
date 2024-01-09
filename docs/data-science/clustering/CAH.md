# Classification Ascendantes Hiéarchiques

## Concept

Les individus sont regroupés deux à deux en fonction d'un critère (similarité des données) jusqu'a obtenir une seule classe.

L'inertie :

* Totale (moyenne entre le centre de gravité et les invidus) $\frac{1}{n} \sum d(g, g_i)$.
* Intraclasse (moyenne des distances entre les centres locaux et global) $\frac{1}{n} \sum n_i \times d(g, g_i)$.
* Interclasse (moyenne des distances aux carrés des points avec leur centre local associé) $\frac{1}{n} \sum \sum d(x_k, g_i)$.

Avec 

* `g` le centre de gravité de tous les points.
* `g_i` le centre de gravité de chaque groupe.
* `x_k` les coordonnées des individus.
* `n_i` l'effectif de groupes

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
