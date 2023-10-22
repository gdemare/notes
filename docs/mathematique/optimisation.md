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

$Y = aX + b$ avec $ X = \begin{bmatrix} x_{1} & 1 \\ ... & 1 \\ x_{n} & 1 \end{bmatrix}$ et $Y = \begin{bmatrix} y_{1} \\ ... \\ y_{n} \end{bmatrix}$


max fyi dériver, résoudre 