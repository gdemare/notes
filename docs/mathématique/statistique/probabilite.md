Soit A un événement de $\Omega$, on définit la probabilité de $A$ comme $P(A) = [0;1]$.

Propriétés :

* L'union (ou) de deux événements $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
* A est égale à $P(A) = 1 - P( A^c)$

Soit $f:R \rightarrow R$ est une densité de probabilité d'une variable aléatoire :

* est $f(x) \geq 0$.
* est continue par morceau $\int{f(x) \cdot dx = 1}$
* $P (X \in [a;b]) = \int_{a}^{b}{f(x) \cdot dx}$

$f:R \rightarrow R$ est une fonction de répartition d'une variable aléatoire $F(x) = P(X \lt x)$:

* $f$ est continue à droite.
* $f$ est croissante.
* les limites : $\lim_{- \infty}f = 0$ et $\lim_{+ \infty}f = 1$.
    
!!! Note
    Pour le calcul de l'air sous la courbe, on peut utiliser la propriété suivante $F(b - a) = F(b) - F(a)$

### Moyenne et espérance

La moyenne et l'espérance sont des indicateurs sur la loi.

* Espérance $E[X] = \int_{- \infty}^{+ \infty}{X \cdot x \cdot dx}$
* Variance $Var[X] = \int_{- \infty}^{+ \infty}{X \cdot (x - E[x])^2 \cdot dx}$

!!! note
    L'espérance est une valeur moyenne de la loi de probabilité (théorique) alors que la moyenne est la valeur moyenne obtenue pour une série de données (expérimentale).

Propriétés :

* L'espérance est linéaire $E(a \cdot X + Y) = a \cdot E(X) + E(Y)$.
* La variance $Var(a \cdot X + b) = a^2 \cdot Var(X)$.

### Lois continues

Loi             | Notation          | Paramètres                                | Densité de probabilité                                           | Fonction de répartition
----------------|-------------------|-------------------------------------------|------------------------------------------------------------------|------------------------
Exponentielle   | $E(\lambda)$      | $\lambda > 0$                             | $x \lt 0$, $f(x) = 0$ sinon $\lambda \cdot e^{- \lambda \cdot x}$                | $x \lt 0$, $F(x) = 0$ sinon $1 - e^{- \lambda \cdot x}$
Normale         | $N(m; \sigma^2)$ | Espérance $m$ et écart-type $\sigma > 0$  | $\frac{e^{\frac{- (x - m)^2}{2 \cdot \sigma ^2}}}{\sqrt{2 \cdot \pi \cdot \sigma ^2}}$   | On se ramène à $N(0;1)$ : $\frac{X - m}{\sigma}$
Uniforme        | $U(a,b)$          | $a < b$                                   | $x \in [a;b]$, $\frac{1}{b - a}$ sinon $f(x) = 0$   | $x \lt a$, $F(x) = 0$, $x \in [a;b]$, $\frac{x - a}{b - a}$ sinon 1

    
Loi             | Espérance             | Quantiles $q_ {\alpha}$        | Variance
----------------|-----------------------|---------------------------------------------------|------------------------------------
$E(\lambda)$    | $\frac{1}{\lambda}$   | $\frac{1}{\lambda} \cdot \ln{\frac{1}{1 - \alpha}}$      | $\sigma ^2 = \frac{1}{\lambda ^2}$
$U(a,b)$        | $\frac{a + b}{2}$     | $\alpha \cdot b + ( 1 - \alpha) \cdot a$   | $\sigma^2 = \frac{(b- a)^2}{12}$
$m$             | $N(m; \sigma^2)$     | Se reporter à la table $Z = \frac{X - m}{\sigma}$ | $\sigma ^2$

!!! note
    L'espérance et l'écart type sont utiles pour retrouver les paramètres de la loi.

!!! note
    Par convention, lorsque l'on cherhche la correspondance sur la table de la loi Normale, il faut prendre la valeur inférieure.

## Modèle stochastiques (tirage aléatoire)

Modélisé par la loi Binomiale de paramètres $p$ et $2 \cdot N$.

Bernoulli probabilité d'obtenir le nombre de succès $k$ pour une expérience à deux issues (gagné et perdu) répété n fois de manière identique et indépendante.

$P(x = i) = C_n^k \cdot p^k \cdot (1 - p)^{n - k}$

## Les combinaisons

Soit un ensemble $E$ de $n$ éléments. On souhaite connaitre le nombre de combinaison de $k$ éléments possible. On ne tient pas compte de l'ordre des éléments :

* avec répétition : $\Gamma _n^k = \frac{(n + k - 1)!}{k! \cdot (n - 1)!}$.
* sans répétition : $C_n^k$.
