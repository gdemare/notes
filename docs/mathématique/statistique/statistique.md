### Vocabulaire

* __Échantillon__ réalisation n fois indépendamment d'une variable aléatoire.
* __Loi de probabilité__ la distribution des probabilité d'une loi aléatoire.
* __Densité de probabilité__ (uniquement numérique continue).
* __Fonction de répartition__ la probabilité d'avoir $P(X) \lt \alpha$, c'est la probabilité cumulée.

$X$ de la loi $f(x)$ et de fonction de répartition $F(x)$ on note
( $X_1, ...X_n$ ).

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

* covariance $cov(X,Y) = E((X - E(X)(Y -E(Y))$ dispersion de deux variables, l'un par rapport à l'autre.
* variance (un cas particulier de la covariance) $var(X) = E(X-E(X))$.
## Estimateurs des indicateurs et théorie des grands nombres

La moyenne empirique convergent vers l'espérance de la loi lorsque l'échantillon augmente.

* Espérance (appelé moyenne) $\hat{E} = moyenne$.
* Variance $s^2 = \frac{n}{n - 1} \cdot Var(x)$.

## Théorème central limite

La somme de variables aléatoires converge vers une loi normale $\sum{X_i} \rightarrow N(n \cdot \mu, n \cdot \sigma^2)$.

L'application directe de la loi permet de déduire un intervalle de confiance pour la moyenne $\hat{E} \in I_c = [ m \pm 1,96 \cdot \frac{s}{\sqrt{n}} ]$.

Avec $m$ la moyenne et $s$ l'écart type de l'échantillon.

## Décrire les individus

Indicateurs :

| Tendance | Dispersion | Corrélation       |
| -------- | ---------- | ----------------- |
| Moyenne  | Variance   | Coeff de Pearson  |
| Médiane  | Écart type | Coeff de Spearman |
|          |               | Covariance
## Autres 

* Centroïde
* Espérance-maximisation

On parle de standarisation des données et non de normalisation lorsque les données sont centrées (moins la moyenne) et réduite (diviser par l'écart type).

## Méthodes

Covariance est l'espérance du produit de $[X-E(X)] \cdot [Y-E(Y)]$
