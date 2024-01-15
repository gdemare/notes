Le principe des régressions linéaires, logistiques,... est de créer une équation de type  $z(x) = \sum{a_i \cdot x_i} + b = \hat{y}$ avec $y$ la variable à prédire et $x_i$ les variables explicatives (appelées aussi descripteurs).

Les variables explicatives doivent être quantitative. 

!!! note
    Il est possible d'utiliser des variables qualitatives en les transformant en variable binéaire.

Avantages       | Inconvénients
----------------|---
Robuste         | Paramétrique
Interprétable   |

Pour créer une régression, il faut :

1. Préparer ses données (éliminer les variables trop corrélées, les combinaison linéaire et à variance nulle).
2. Créer le modèle.
3. Vérifier les conditions d'application du modèle notamment les propriétés des résidus.

Les principales types de régression sont :

* Linéaire pour prédire une variable quantitative.
* Logistique pour prédire une variable qualitative.

### Préparation des données

Il faut éviter le tri dans les variables qui pourront être utilisées car sinon le modèle peut ne pas converger ce qui singifie que le modèle n'arrive pas à déterminer les paramètres. Il faut retirer les variables :

* trop corrélées.
* les combinaisons linéaires.
* à variance nulle.

!!! warning
    Cette étape est nécessaire même en utilisant des algorithmes de choix qui choisissent les variables.

### Sélection des variables

La sélection des variables peut se faire en minisant un indicateur comme :

* AIC.
* BIC.

Les algorithmes permettent d'ajouter ou de supprimer des variables dans le cadre de la recherche du meilleur modèle (méthode descente, ascendante, les deux).

### Interprétation 

Pour l'interprétation du modèle, il y a deux types de tests : 

* un pour chaque variable appelé test t pour savoir si le coefficient est égale à 0 càd si la variable explicative est utile pour le modèle.
* un pour le modèle global pour savoir s'il est significatif grâce au test de Fisher (h0 : le modèle n'est pas significatif).

Pour les variables binaires, le rapport de cote (odd) est utilisé. Il 

-----

## Linéaire

### Validité

Les résidus doivent être :

* indépendants.
* normalité centré (avec une moyenne égale à 0) test Shapiro-Wilk, QQ plot.
* de même variance (homoscédasticité). La variance des résidus est constante pour toutes les valeurs.

------------------

## Logistique

La régression logistique est un classificateur binaire (0 ou 1). Elle utilise la formule de la régression linéaire en lui appliquant la fonction $\mathrm{logit}$ pour ramener la valeur à une probabilité $[0;1]$.

$$p(X) = \frac{1}{1 + e^{- z(x)}}$$

!!! note
    La régression logistique peut être utilisée pour des classificateurs à mulitples modalités en créant un modèle pour chaque modalité.

La classificaiton des individus se fait en définissant un seuil (souvent 0.5) pour l'attribution à l'une ou l'autre des deux classes.

### Variable significatives

Test de la déviance = test global
Test de Wald = test pour chaque variable

### Validité

* Test t de Student (h0 : aucune variable n’est significative).

## Partial Least Squares (PLS)

Régression PLS (Partial Least Squares) consiste à créer des composantes (facteurs ou variables latentes) en fonction des variables quantitatives sous forme de nouvelles variables indépendantes.