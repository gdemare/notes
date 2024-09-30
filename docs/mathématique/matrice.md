## Les calculs de base sur les matrices

Les matrices sont des tableaux de vecteurs. Par convention, chaque vecteur est positionné en colonne.

$X \Rightarrow^A \Rightarrow ^B \Leftrightarrow BAX$ avec A et B des opérations.

Trois opérations pour transformer les matrices :

* Homothétie : dilater un vecteur.
* Rotation : changer l'angle càd l'orientation.
* Projection : 

!!! note
    La simulation des environments dans les jeux vidéos utilise les matrices générer le changement de vue.
## Distance euclidienne ou norme

C'est la somme des valeurs absolues de chaque coordonnée (dans un espace avec des axes orthogonaux).
Le calcul est une généralisation de Pythagore
### Rotation 

La rotation d'un vecteur d'un angle $\theta$ :

$$\begin{cases}
 x' = x \cdot \cos \theta - y \cdot \sin \theta \\
 y' = x \cdot \sin \theta + y \cdot \cos \theta
\end{cases}$$
Avec les matrices, cela revient a faire :

$$\begin{bmatrix} x' \\ y' \end{bmatrix} = 
\begin{bmatrix}
    \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta
 \end{bmatrix}
\begin{bmatrix} x \\ y \end{bmatrix}$$

__Cosinus directeur__ angle entre deux vecteurs.
#### Produit scalaire

Propriété :

* Le cosinus de deux vecteurs perpendiculaires est nul alors le produit scalaire $= 0$.
## Matrice carré

__Matrice carré__ matrice avec autant de lignes que de colonnes.
### Déterminant

Le déterminant donne l'information si : 

* Un système d'équation possède une ou plusieurs solutions.
* Si la matrice est inversible.

Si $det(X) = 0$ alors :

* Pas de solutions.
* La matrice n'est pas inversible.

!!! example
    Lorsque deux lignes sont identiques.

Interprétations du déterminant :

* Le déterminant correspond au volume. Ainsi, l'absence de solution correspond à une absence de volume.

!!! note
    Méthode pour déterminer le déterminant d'une matrice : 

    1. Matrice de signe : si la somme de l'indice ligne $+$ colonne est pair -> $+$ sinon $-$
    2. pour les élément d'une ligne :
        * l'élément, on garde tous les éléments qui ne se trouvent pas dans la ligne et colonne.
        2 det( 2 1 -1 )

        $det(\begin{bmatrix} a & b \\ c & d \end{bmatrix}) = a \cdot d - b \cdot c$
### Matrice inverse

$A \cdot A^{-1} = A^{-1} \cdot A$

La matrice inverse se calcule comme 

$$A^{-1} = \frac{1}{\det A} \cdot \begin{bmatrix} a_{2,2} & -a_{2,1} \\ -a_{1,2} & a_{1,1} \end{bmatrix}$$
## Valeurs propres et vecteurs propres

Déterminer les valeurs propres consiste à résoudre $det(\delta - \alpha \cdot I) = 0$  avec $\alpha \in \mathbb{R}$.

Pour calculer les vecteurs, il faut ensuite calculer pour chaque valeur propre : $(\delta - \alpha I) \cdot \vec{v} = (0)$

Si $det = 0$ alors une valeur propre est à 0 donc pas de vecteurs propres et la matrice n'est pas inversible.

!!! note
    Pour les matrices $n \times m$, les valeurs propres sont appelées singulières.

!!! note
    Une matrice est dite positive si ses valeurs propres sont supérieures à 0 $\alpha \gt 0$.
## Fonctions à plusieurs variables

Les fonctions à plusieurs variables sont souvent trop complexes pour étudier leur sens de variations de façon absolue. On approche 
### Dérivées partielles

Gradient : $\nabla f = [ \frac{\partial f}{\partial x_1}; ...; \frac{\partial f}{\partial x_n} ]$

!!! note
    La dérivée partielle de $\frac{\partial f}{\partial x}$ d'ordre 1 par rapport à $y$ est notée $\frac{\partial ^2 f}{\partial y \cdot \partial x}$.

!!! note
    D'après le théorème de Shwarz, pour les fonctions dérivables n-fois, a dérivée $\frac{\partial ^2 f}{\partial y \cdot \partial x} = \frac{\partial ^2 f}{\partial x \cdot \partial y}$
### Matrice hessienne

Matrice de vecteurs de direction du sens de variations.

$\nabla^{2} f = \frac{\partial f}{\partial x_i \cdot \partial x_j}$ avec $i$ la ligne et $j$ la colonne.

!!! note
    Donne les vecteurs orientés dans le sens croissant de la fonction.

!!! note
    Une fonction est convexe si la matrice hessienne est positive.
## Développement limité

Développement limité ou dévéloppement en série ou de Taylor est une méthode mathématique qui permet d'approximer une fonction complexe par une fonction polynomiale autour d'un point d'intérêt.

$f(x + h) = f(x) + \nabla f(x) \cdot h + \frac{1}{2} \cdot h^T \cdot \nabla^2 f(x) \cdot h$
## Minimiser une fonction

Pour minimiser des fonctions plusieurs approches sont possibles. Elles sont itératives et nécessites d'être réalisée jusqu'a que le résultat est convergé sur la solution.

* Gradient $x - \rho \cdot \nabla f$ avec $\rho$ le poids de màj du point choisi.
* Approche de Newton $x - \nabla ^2 f^{-1} \cdot \nabla f$
#### Approche de Newton

1. La fonction est approchée par un polynôme de degré 2.
2. $x - \rho \cdot \nabla f$ l'idée est d'utiliser la matrice hessienne pour calculer la valeur de la mise à jour.

$x_1 = x_0 - \frac{\nabla f(x_0)}{\nabla^2 f(x_0)}$