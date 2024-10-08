Le principe des régressions linéaires, logistiques,... est de créer une équation de type  $z(x) = \sum{a_i \cdot x_i} + b = \hat{y}$ avec $y$ la variable à prédire et $x_i$ les variables explicatives (appelées aussi descripteurs).

!!! note
	Les variables explicatives doivent être quantitatives. 

!!! note
    Il est possible d'utiliser des variables qualitatives en les transformant en variables binéaires.

Avantages       | Inconvénients
----------------|---
Robuste         | Paramétrique
Interprétable   |

Pour créer une régression, il faut :

1. préparer ses données car sinon le modèle peut ne pas converger càd qu'il n'est pas possible de déterminer la valeur des coeffients.
2. créer le modèle.
3. vérifier les conditions d'application du modèle notamment les propriétés des résidus.

Les principales types de régression sont :

* linéaires pour prédire une variable quantitative.
* logistiques pour prédire une variable qualitative.
### Préparation des données

Il faut éviter le tri dans les variables à utiliser dans le modèle. Il faut éliminer :
     
 * les variables trop corrélées.
 * les combinaison linéaires.
 * les variables à variance nulle.

!!! warning
    Cette étape est nécessaire même en utilisant des algorithmes de choix qui choisissent les variables.

!!! warning
    Il faut plus d'individus que de variables sinon le modèle ne converge pas.
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

La classification des individus se fait en définissant un seuil (souvent 0.5) pour l'attribution à l'une ou l'autre des deux classes.

### Variable significatives

* Test de Wald pour tester si le coefficient est égale à 0 càd la significité de chaque variable.
* Test de la déviance qui permet d'évaluer les variables explicatives dans le modèle ont un effet global significatif sur le modèle. Le test compare le modèle avec le modèle réduit (uniquement avec l'intercept).
* Test t de Student (h0 : aucune variable n’est significative).

## Partial Least Squares (PLS)

Régression PLS (Partial Least Squares) consiste à créer des composantes (facteurs ou variables latentes) en fonction des variables quantitatives sous forme de nouvelles variables indépendantes.
