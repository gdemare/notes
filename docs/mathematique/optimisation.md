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

$Y = X \begin{bmatrix} a \\ b \end{bmatrix}$ avec $ X = \begin{bmatrix} x_{1} & 1 \\ ... & 1 \\ x_{n} & 1 \end{bmatrix}$ et $Y = \begin{bmatrix} y_{1} \\ ... \\ y_{n} \end{bmatrix}$

Trouver la droite des moindres aux carrés consiste à résoudre $min( X \begin{bmatrix} a \\ b \end{bmatrix} - Y )^2$

Cela revient à trouver la valeur de $a$ et $b$ qui minimise la fonction précédente càd avec une dérivée égale à 0 (dérivée partielle en fct de $a$ et $b$).

$\nabla F ( \begin{bmatrix} a \\ b \end{bmatrix} ) = 0$

#### Maximum de vraissemblance

