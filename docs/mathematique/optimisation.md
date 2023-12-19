Deux grands types de méthodes pour calculer un minimum :

* Recuit stimulé (appelé aussi algorithme de Métropolis). 
* Gradient conjugué.
* méthode de quasi Newton (BFGS) approché la fonction avec un polynome puis passe par le cacul du gradient. Il existe aussi L-BFGS-B mais qui recherche des solutions avec un intervalle sur les variables.
* méthode de Brent est un algorithme de recherche d'un zéro d'une fonction.

Généralement, les fonctions sont trop complexes pour que l'on puisse déterminer facilement leur minimum. Plusieurs possibilités :

* Approcher la fonction par une fonction quadratique.
* Méthodes quasi Newton (deux méthodes principales : Powell et DFP). Nhésité d'approximer la matrice hessienne mais complexe notamment à inverser.
* BFGS approche.
* méthode stochastique (Métropolis).

### Algorithme du recuit stimulé

1. Un point initial $p_0$ est pris aléatoirement.
2. Un nouveau point aléatoire voisin de $p_0$ est généré.   
2. On calcul $\Delta f = f_1(0) - f_0(x)$ et 

    * Si $\Delta f \lt 0$ alors $p_0 = p_1$ avec la probabilité de $e^{- \frac {\Delta E}{T}}$.
    * Si $\Delta f \gt 0$ alors $p_0 = p_1$.

Au début on choisi une température élevée pour permettre au système d'accepter à tous points. Au cours de l'algorithme, la température $T$ diminue, et la probabilité d'acceptation diminue.

En pratique, on réalise plusieurs fois l'algorithme en conservant les valeurs obtenues pour ne garder que la plus basse.

## Utilité

Recherche d'un maximum ou d'un minimum revient à trouver la solution pour laquelle la dérivé est nul $f'(x) = 0$.

### Ajustement

Trouver l'équation d'une droite qui minimise la distance avec les points. La méthode est généralisable notamment pour trouver de la fonction pour :

* Un ajustement (exponentiel, log, etc) qui consiste à trouver la fonction $\min (Y_{obs} - Modèle(x))^2$.
* Une a loi de probabilité.

#### Regression linéaire et droite des moindres aux carrés

$y = a \cdot x + b$ les observations $+ e ~ N(O, \sigma )$

La droite des moindres aux carrés consiste à trouver des coefficients de la droite $a$ et $b$ qui minimisent la distance au carré de la fonction
$$f(x) = (a \cdot x + b - y)^2$$
soit $\min f(x)$ . On cherche les coefficients qui minisent l'écart moyen avec les points

$$\min F(a,b) = \sum_{i=1}^{n}{(a \cdot x_i + b - y_i)^2}$$

On sait que ce minimum existe. Pour le trouver, on utilise la méthode des dérivés partielles

$$\nabla f = \begin{cases}
    \frac{\partial f}{\partial a}  = 2 \cdot (a \cdot x_i + b - y_i) \cdot x_i  = 0 \\
    \frac{\partial f}{\partial b}  = 2 \cdot (a \cdot x_i + b - y_i) = 0
\end{cases}$$

Trouver la droite des moindres aux carrés consiste à résoudre

$$\begin{bmatrix}\sum{x_i^2} & \sum{x_i} \\ \sum{x_i} & n \end{bmatrix}
\cdot \begin{bmatrix} a \\ b \end{bmatrix}
= \begin{bmatrix}\sum{x_i \cdot y_i} \\ \sum{y_i} \end{bmatrix}$$
avec $n$ le nombre de valeurs.

##### Autres ajustements

Nom	 		| Fonction                      | Densité de probabilité
------------|-------------------------------|--------
Exponentiel	| $a \cdot e^{- b \cdot x}$     | $e^{- b \cdot x}$

#### Trouver les paramètres d'une loi

$f(X_1, X_2,...,X_n) = f(X_1) \cdot f(X_2) \cdot ... \cdot f(X_n)$

On cherche le maximum de vraissemblance de la fonction de densité $f(x)$.

1. Calculer la vraissemblance $\max L = \prod{F(x_i)} \max \log \prod{F(x_i)}$.
2. Résoudre l'équation tels que le gradient est nul càd trouver les paramètres  $L' = 0$.
3. Vérifier que le hessien est négatif (qu'un maximum a été atteint).

!!! note 
    Il est généralement plus simple de rechercher $\log L$ noté $ML$.
