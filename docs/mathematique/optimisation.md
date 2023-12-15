Deux grands types de méthodes pour calculer un minimum :

* Recuit stimulé (appelé aussi algorithme de Métropolis). 
* Gradient conjugué.
* méthode de quasi Newton (BFGS) approché la fonction avec un polynome puis passe par le cacul du gradient. Il existe aussi L-BFGS-B mais qui recherche des solutions avec un intervalle sur les variables.
* méthode de Brent est un algorithme de recherche d'un zéro d'une fonction.

Généralement, les fonctions sont trop complexes pour que l'on puisse déterminer facilement leur minimum. Plusieurs possibilités :

* Approcher la fonction par une fonction quadratique
* Méthodes quasi Newton (deux méthodes principales : Powell et DFP). Nhésité d'approximer la matrice hessienne mais complexe notamment à inverser.
* BFGS approche.
* méthode stochastique (Métropolis).

### Algorithme du recuit stimulé

1. Un point initial $p_0$ est pris aléatoirement.
2. Un nouveau point aléatoire voisin de $p_0$ est généré.   
2. On calcul $\Delta f = f_1(0) - f_0(x)$ et 

    * Si $\Delta f \lt 0$ alors $p_0 = p_1$ avec la probabilité de $e^{- \frac {\Delta E}{T}}$.
    * Si $\Delta f \gt 0$ alors $p_0 = p_1$.

Au début on choisi une température élevé pour permettre au système d'accepter tous points. Au cours de l'algorithme la température $T$ diminue, et la probabilité d'acceptation diminue.

En pratique, on réalise plusieurs fois l'algorithme en conservant les valeurs obtenues pour ne garder que la plus basse.

## Utilité

### Moindre aux carrés

Trouver l'équation d'une droite qui minimise la distance avec les points. La méthode est généralisable notamment pour trouver :

* un ajustement (exponentiel, log, etc).
* la loi de probabilité

#### Regression linéaire

La droite des moindres aux carrés consiste à trouver des coefficients de la droite $a$ et $b$ qui minimisent la distance au carré de la fonction $f(x) = (a \cdot x + b - y)^2$ soit $\min f(x)$.

On sait que ce minimum existe. Pour le trouver, on utilise la méthode des dérivés partielles
$\nabla f = \begin{cases} \frac{\partial f}{\partial a}  = 0 \\ \frac{\partial f}{\partial b}  = 0 \end{cases}$ On calcul les dérivés partielles et pn passe en forme matrice pour résoudre l'équation.

Trouver la droite des moindres aux carrés consiste à résoudre $\begin{bmatrix} x^2 & x \\ x & n \end{bmatrix} \cdot \begin{bmatrix} a \\ b \end{bmatrix} = \begin{bmatrix} x.y \\ x \end{bmatrix}$ avec $n$ le nombre de valeurs.

