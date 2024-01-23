## Imputer les valeurs manquantes 

* Espérance-maximisation (EM).
* K-voisin le plus proche (KNN).
* Moyenne, médiane.

## Standariser les données

Standariser (normaliser) les données : $\frac{x - \mu}{\sigma}$ 

avec $\mu$ la moyenne et $\sigma$ l'écart type.

## Réduire la distribution

Regrouper des données fortement étalée : $\log x + 1$ l'addition permet de contourner les valeurs 0 présentes dans les données.

Coefficient de corrélation $r = \frac{\mathbf{cov} (X,Y) }{\sigma (X) \cdot \sigma (Y)}$

Facteur d'inflation de la variance (VIF)

## Matrice des distances

Distance		| Type
----------------|---
Euclidienne		| Distance entre deux points.
Manhattan		| Distance en angle droit.
Khi 2			| Distance calculé en comparant deux distributions.
Ward			| Minimiser l'inertie intra-classe.