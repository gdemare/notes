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

#### Produit scalaire

Propriété :

* Le cosinus de deux vecteurs perpendiculaires est nul => le produit scalaire = 0

### Cosinus directeur 

Cosinus directeur__ angle entre deux vecteurs.


## Matrice carré

__Matrice carré__ matrice avec autant de lignes que de colonnes.

### Déterminant

Le déterminant donne l'information si : 

* Un système d'équation possède une ou plusieurs solutions.
* Si la matrice est inversable.

Si $det(X) = 0$ :

* Pas de solutions.
* La matrice n'est pas inversible.

Interprétations du déterminant :

* Le déterminant correspond au volume. Ainsi, l'absence de solution correspond à une absence de volume.

!!! note
    Méthode pour déterminer le déterminant d'une matrice : 

    1. Matrice de signe : si la somme de l'indice ligne + colonne est pair -> + sinon -
    2. pour les élément d'une ligne :
        * l'élément, on garde tous les éléments qui ne se trouvent pas dans la ligne et colonne.
        2 det( 2 1 -1 )

        $det(\begin{bmatrix} a & b \\ c & d \end{bmatrix}) = ad-bc$