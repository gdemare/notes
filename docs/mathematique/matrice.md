# Les calculs de base sur les matrices

Les matrices sont des tableaux de vecteurs. Par convention, chaque vecteur est positionné en colonne.

$X \Rightarrow^{A} \Rightarrow ^{B} \Leftrightarrow BAX$ avec A et B des opérations.

Trois opérations pour transformer les matrices :

* homothétie : dilaté un vecteur.
* Rotation : changer l'angle càd l'orientation.
* Projection : 

!!! note
    La simulation des environements dans les jeux vidéos utilise les matrices générer le changement de vue.

distance euclidienne


### Rotation 

$\begin{bmatrix} \cos(\omega) & -\sin(\omega) \\ \sin(\omega) & \cos(\omega) \end{bmatrix}$

$\begin{equation}x' = x \cos(\omega) - y \sin(\omega) \\ y' = x \sin(\omega) - y \cos(\omega)$


#### Produit scalaire

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