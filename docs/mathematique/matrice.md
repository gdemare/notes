# Les calculs de base sur les matrices

Les matrices sont des tableaux de vecteurs. Par convention, chaque vecteur est positionné en colonne.

$X \Rightarrow^{A} \Rightarrow ^{B} \Leftrightarrow BAX$ avec A et B des opérations.

Trois opérations pour transformer les matrices :

* homothétie : dilaté un vecteur.
* Rotation : changer l'angle càd l'orientation.
* Projection : 

!!! note
    La simulation des environements dans les jeux vidéos utilise les matrices générer le changement de vue.

## Distance euclidienne ou norme

C'est la somme des valeurs absolues de chaque coordonées (dans un espace avec des axes orthogonaux).
Le calcul est une généralisation de Pythagore

### Rotation 

La rotation d'un vecteur d'un anle $\theta$ :

$\begin{cases}
 x' = x \cos(\theta) - y \sin(\theta) \\
 y' = x \sin(\theta) + y \cos(\theta)
\end{cases}$

Avec les matrices, cela revient a faire :

$\begin{bmatrix} x' \\ y' \end{bmatrix} = 
\begin{bmatrix}
    \cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta)
 \end{bmatrix}
\begin{bmatrix} x \\ y \end{bmatrix}$

__Cosinus directeur__ angle entre deux vecteurs.

#### Produit scalaire

Propriété :

* Le cosinus de deux vecteurs perpendiculaires est nul alors le produit scalaire = 0.

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

    1. Matrice de signe : si la somme de l'indice ligne + colonne est pair -> + sinon -
    2. pour les élément d'une ligne :
        * l'élément, on garde tous les éléments qui ne se trouvent pas dans la ligne et colonne.
        2 det( 2 1 -1 )

        $det(\begin{bmatrix} a & b \\ c & d \end{bmatrix}) = ad-bc$

### Matrice inverse

$A \times A^{-1} = A^{-1} \times A$

## Valeurs propres et vecteurs propres

Déterminer consiste à résoudre $det(\delta - \alpha I) = 0$ 

Est ce que si le $det = 0$ est équivalent à une des valeurs propres est égale à 0.

Si une valeur propre est égale à 0 pas de matrice de valeur propre.

!!! note
    Pour les matrices $n \times m$, les valeurs propres sont dites singulières.

## Fonctions à plusieurs variables

Les fonctions à plusieurs variables sont souvent trop complexe pour étudier leur sens de variations de façon absolue. On approche 


### Dérivées partielles

Gradient : $\nabla f = [ \frac{\partial f}{\partial x_{1}}; ...; \frac{\partial f}{\partial x_{n}} ]$

!!! note
    La dérivée partielle de $\frac{\partial f}{\partial x}$ d'ordre 1 par rapport à $y$ est notée $\frac{\partial ^{2} f}{\partial y \partial x}$.

!!! note
    D'après le théorème de Shwarz, pour les fonctions dérivables n-fois, a dérivée $\frac{\partial ^{2} f}{\partial y \partial x} = \frac{\partial ^{2} f}{\partial x \partial y}$

## Matrice hessienne

$[ \nabla^{2} f ] = \frac{\partial f}{\partial x_{i} \partial x_{j}}$ avec $i$ la ligne et $j$ la colonne.

!!! note
    Donne les vecteurs orientés dans le sens croissant de la fonction.

Une fonction est convexe si la matrice hessienne est positive càd si toutes ses valeurs sont positives.