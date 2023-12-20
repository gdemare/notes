L'optimisation des algortihmes possède deux composantes :

* temps. Cela correspond aux nombres d'opérations.
* mémoire allouées. Cela correspond aux nombres de bits (caratères = 1 byte, un entier = 4 bytes et un décimal = 8 bytes).

!!! note 
    1 byte = 8 bits

## Notation 

###

* `if condition` si.
* `while condition do` tant que c'est vrai, la boucle est appliquée.
* `for i from 1 to n-1 do`

## Calcul de la complexité

Le calcul de la complexité consiste à calculer les fonctions de coût associés à un algorithme.

### Notation de dominance

La notation de dominance consiste à comparer le taux d'accroissement.

$g$ domine $f$ ie $f \in O(g)$ si pour tout $n \gt n_0$, il existe une constante $c$ telle que $f(x)\lt c \cdot g(x)$. 

!!! note
    Si la dominance est réciproque alors on note $f \in \Theta(g)$ et inversement.

!!! note
    Pour déterminer la complexité d'un algorithme il peut être simple encadrer la complexité de l'agorithme. Exemple $1 \lt \frac{1}{2^0} + \frac{1}{2^2}+ \frac{1}{2^4} + ... \lt \Sigma \frac{1}{2^k} = 2$

### Algorithme de tri

Quatre algorithmes principaux pour le tri :

Algorithme          | Complextité spaciale    | Complexité temporelle
--------------------|-------------------------|---
Par sélection       | 1                       | $n^2$
Par insertion       | 1                       | $n \log n$
Fusion              | n                       | $n \log n$              
Rapide              |                         | $n^2$

!!! note
    Trier les données avant de les utiliser peut permettre de diminuer la complexité.

#### Tri par sélection

```
SelectionSort(A: array of n integers)
    i, j, posmin : integer

    for i from 0 to n-2 do
        posmin = i
        for j from i+1 to n-1 do
            if (A[j] < A[posmin]) then
                posmin = j
            swap(i, j) // échange de place les deux éléments
```

#### Tri par insertion

```
InsertionSort(A:array of n integers)
    i, j: integer

    for i from 1 to n-1 do
        j = i
        while (j > 0 and A[j] < A[j-1]) do
            swap(A[j], A[i])
            j = j-1
```

####  Tri Fusion

Utilise le principe de récursivité. Le tableau est partagé en deux et le tri est appliqué sur les deux parties.

```
MergeSort (A: array of n integers; begin, end: integer)
    m: integer // variable for the middle position

    if (end - begin > 1) then // |A|<2, nothing to do
    m = (begin + end)/2 // the middle position
    MergeSort(A, begin, m) // sort left half
    MergeSort(A, m, end) // sort right half
    Merge(A, begin, m, end) // merge sorted halves

```

```
Merge (A: array of n integers; b, m, e: integer)
    L: array of m-b integers
    R: array of e-m integers
    i,j,k: integer

    // copie des éléments dans deux tableaux séparés
    for k from b to m-1 do
        L[k-b] = A[k] //copy A[b],...,A[m-1] in L
        
    for k from m to e-1 do
        R[k-m] = A[k] //copy A[m],...,A[e-1] in R
    
    i = 0
    j = 0

    // si les éléments sont 
    while (i < m-b) and (j < e-m) do //the loop with the comparisons
        if (L[i] <= R[j]) then
            A[k] = L[i]
            i = i+1
        else
            A[k] = R[j]
            j = j+1
        k = k+1
    
    // copier les éléments restant lorsqu'un des tableaux est vide
    while (i < m-b) do //if there are still elements of L to copy
        A[k] = L[i]
        i = i+1
        k = k+1

    while (j < e-m) do //if there are still elements of R to copy
        A[k] = R[j]
        j = j+1
        k = k+1
```

#### Trie rapide

```
QuickSort(A:array of n integers; begin, end: integer)
    indexpivot: integer

    if (end-begin > 1) then
        indexpivot = ChoosePivot(begin, end)
        indexpivot = Partition(A, begin, end, indexpivot)
        QuickSort(A, begin, indexpivot)
        QuickSort(A, indexpivot+1, end)
```

```
Partition(A:array of n integers; begin, end, indexpivot : integer): integer
    i, j: integer
    
    tmp = A[begin] // swap the pivot with the first element
    A[begin] = A[indexpivot]
    A[indexpivot] = tmp
    i = begin + 1 // position the two cursors
    j = end - 1
    while (j>i) do
        if A[i] < A[begin] then
            i=i+1
        else if A[i-j] > A[begin] then
            j = j-1
        else // if you get here, A[i] and A[j] must be swapped
            swap(A[i], A[j])
            i = i+1
            j = j-1

    swap([begin], A[j]) // final swap to put pivot in final positon
    return(j)
```

## Fonctions récursives

Les fonctions récursives sont des fonctions qui s'appellent à eux mêmes.

```
fct_recursive(input)
    if condition 
        return valeur
    else
        return fct_recursive(input-1)    
```