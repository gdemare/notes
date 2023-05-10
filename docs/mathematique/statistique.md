## Probabilité

Soit A un événement de $Ω$, on définit la probabilité de $A$ comme $P(A) = \lbrack 0;1\rbrack$.

Propriétés :

* L'union (ou) de deux événements $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
* A est égale à $P(A) = 1 - P\left( A^{c} \right)$

Soit $f:R \rightarrow R$ est une densité de probabilité d'une variable aléatoire :

* est $f(x) \geq 0$.
* est continue par morceau $\int_{}^{}{f(x)dx = 1}$
* $P\left( X\epsilon\lbrack a;b\rbrack \right) = \int_{a}^{b}{f(x)dx}$

$f:R \rightarrow R$ est une fonction de répartition d'une variable aléatoire:

* $f$ est continue à droite.
* $f$ est croissante.
* les limites : $\lim_{- \infty}f = 0$ et $\lim_{+ \infty}f = 1$
    
!!! Note
    Pour le calcul de l'air sous la courbe, on peut utiliser la propriété suivante $F(b - a) = F(b) - F(a)$

### Moyenne et espérance

La moyenne et l'espérance sont des indicateurs sur la loi.

* Espérance $E\lbrack X\rbrack = \int_{- \infty}^{+ \infty}{Xxdx}$
* Variance $Var\lbrack X\rbrack = \int_{- \infty}^{+ \infty}{X(x - E\lbrack x\rbrack)²dx}$

!!! note
    L'espérance est une valeur moyenne de la loi de probabilité (théorique) alors que la moyenne est la valeur moyenne obtenue pour une série de données (expérimentale).

Propriétés :

* L'espérance est linéaire $E(aX + Y) = aE(X) + E(Y)$
* La variance $Var(aX + b) = a²Var(X)$

### Lois continues

Loi | Notation | Paramètres | Densité de probabilité | Fonction de répartition
---|---|---|---|---
Exponentielle | $E(\lambda)$ | $\lambda > 0$ | $x< 0,\ f(x) = 0$ sinon $\lambda e^{- \lambda x}$ | $x < 0,\ F(x) = 0$ sinon $1 - e^{- \lambda x}$
Normale | $N(m;\sigma^{2})$ | Espérance $m$ et écart-type $\sigma > 0$ | $\frac{e^{\frac{- (x - m)²}{2\sigma ²}}}{\sqrt{2\pi\sigma ²}}$ | On se ramène à $N(0;1)$ : $\frac{X - m}{\sigma}$
Uniforme | $U(a,b)$ | $a < b$ | $x \in \lbrack a;b \rbrack , \frac{1}{b - a}$ sinon $f(x) = 0$ | $x < a,\ F(x) = 0$, $x \in \lbrack a;b \rbrack,\ \frac{x - a}{b - a}$ sinon 1

    
Loi | Espérance | Quantiles $\mathbf{q}\_ {\mathbf{\alpha}}$ | Variance
---|---|---|---
$E(\lambda)$ |  $\frac{1}{\lambda}$ | $\frac{1}{\lambda} ln(\frac{1}{1 - \alpha})$ | $\sigma ² = \frac{1}{\lambda ²}$
$U(a,b)$ | $\frac{a + b}{2}$ | $\mathbf{\alpha}b + \left( 1 - \alpha \right)a$ | $\sigma^{2} = \frac{(b- a)²}{12}$
$m$ | $N(m;\sigma^{2})$ | Se reporter à la table $Z = \frac{X - m}{\sigma}$ | $\sigma^{2}$

!!! note
    L'espérance et l'écart type sont utiles pour retrouver les paramètres de la loi.

Lecture de la table de la loi Normale : on prend toujours la valeur inférieure.

# Statistique

Échantillon réalisation n fois indépendamment d'une variable aléatoire
$X$ de la loi $f_{x}$ et de fonction de répartition $F_{x}$ on note
($X_{1}$, ...$X_{n}$)

## Estimateurs des indicateurs et théorie des grands nombres

La moyenne empirique convergent vers l'espérance de la loi lorsque l'échantillon augmente.

* Espérance (appelé moyenne) $Ê = moyenne$
* Variance $s² = \frac{n}{n - 1}Var(x)$

## Théorème central limite

La somme de variables aléatoires converge vers une loi normale  $\sum_{}^{}X_{i} \rightarrow N(n\mu,n\sigma^{2})$

L'application directe de la loi permet de déduire un intervalle de confiance pour la moyenne $E\hat{} \in I_{c} = \lbrack m \pm 1.96 \times \frac{s}{\sqrt{n}}\rbrack$

Avec $m$ la moyenne et $s$ l'écart type de l'échantillon.