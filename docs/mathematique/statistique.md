### Vocabulaire

* __Échantillon__ réalisation n fois indépendamment d'une variable aléatoire.
* __Loi de probabilité__ la distribution des probabilité d'une loi aléatoire.
* __Densité de probabilité__ (uniquement numérique continue).
* __Fonction de répartition__ la probabilité d'avoir $P(X) < \alpha$, c'est la probabilité cumulée.

$X$ de la loi $f_{x}$ et de fonction de répartition $F_{x}$ on note
($X_{1}$, ...$X_{n}$)

!!! note 
    Dans un étude il faut commencer par se demander :
    * quel est l'indicateur mesuré ?
    * que sont les individus ?

## Indicateurs statistiques

De positions et de distribution :

* quartiles
* quantiles
* médiane

* moyenne

De dispersions :

* covariance $cov(X,Y) = E((X - E(E)(Y -E(Y))$ dispersion de deux variables, l'un par rapport à l'autre.
* variance (un cas particulier de la covariance) $var(X) = E(X-E(X))$

## Estimateurs des indicateurs et théorie des grands nombres

La moyenne empirique convergent vers l'espérance de la loi lorsque l'échantillon augmente.

* Espérance (appelé moyenne) $Ê = moyenne$
* Variance $s² = \frac{n}{n - 1}Var(x)$

## Théorème central limite

La somme de variables aléatoires converge vers une loi normale  $\sum_{}^{}X_{i} \rightarrow N(n\mu,n\sigma^{2})$

L'application directe de la loi permet de déduire un intervalle de confiance pour la moyenne $E\hat{} \in I_{c} = \lbrack m \pm 1.96 \times \frac{s}{\sqrt{n}}\rbrack$

Avec $m$ la moyenne et $s$ l'écart type de l'échantillon.
