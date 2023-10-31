### 

Généralement, les fonctions sont trop complexes pour que l'on puisse déterminer facilement leur minimum. Plusieurs possibilités :

* Approcher la fonction par une fonction quadratique
* Méthodes quasi Newton (deux méthodes principales : Powell et DFP). Nhésité d'approximer la matrice hessienne mais complexe notamment à inverser.
* BFGS approche 
* méthode stochastique (Métropolis)

### Moindre aux carrés

Trouver l'équation d'une droite qui minimise la distance avec les points. La méthode est généralisable notamment pour trouver :

* un ajustement (exponentiel, log, etc).
* la loi de probabilité

#### Regression linéaire

La droite des moindres aux carrés consiste à trouver des coefficients de la droite $a$ et $b$ qui minimisent la distance au carré de la fonction $f(x) = (a \times x + b - y)^{2}$ soit $min f(x)$.

On sait que ce minimum existe. Pour le trouver, on utilise la méthode des dérivés partielles
$\nabla f = \begin{aligned}\frac{\partial f}{\partial a}  = 0 \\ \frac{\partial f}{\partial b}  = 0 \end{aligned}$ On calcul les dérivés partielles et pn passe en forme matrice pour résoudre l'équation.

Trouver la droite des moindres aux carrés consiste à résoudre $\begin{bmatrix} x^2 & x \\ x & n \end{bmatrix} \begin{bmatrix} a \\ b \end{bmatrix} = \begin{bmatrix} x.y \\ x \end{bmatrix}$ avec $n$ le nombre de valeurs.

#### Maximum de vraissemblance

