## Fonction exponentielle

La fonction exponentielle est une fonction qui associe un nombre à son doublement (taux d'accroissement). C'est exactement comment le taux d'intérêt d'un livret. L'intérêt dépend de l'argent du compte : plus il y a d'argent plus la valeur de l'accroissement du compte sera élevé.

Pour une valeur qui 1 qui double à

$1 + 1 = 2$

$\left( 1 + 1 \times \frac{1}{2} \right) + (1 + 1 \times \frac{1}{2}) \times \frac{1}{2} = {(1 + \frac{1}{2})}^{2}$

$\left( 1 + 1 \times \frac{1}{3} \right) + \left( 1 + 1 \times \frac{1}{3} \right) \times \frac{1}{3} + \lbrack\left( 1 + 1 \times \frac{1}{3} \right) + \left( 1 + 1 \times \frac{1}{3} \right) \times \frac{1}{3}\rbrack \times \frac{1}{3} = {(1 + \frac{1}{3})}^{3}$

La généralisation des calculs précédent conduit à :
${(1 + \frac{1}{n})}^{n}$

La fonction exponentielle est$\lim_{n \rightarrow \infty}{\ {(1 + \frac{1}{n})}^{n}} = e( \approx 2,718\ldots)$

!!! note
	L'exponentiel et le logaritme sont systmétrique par rapport à $f(x) = x$.

Propriétés exponentielle :

* $\mathbf{e}^{\mathbf{a + b}}\mathbf{=}\mathbf{e}^{\mathbf{a}}\mathbf{\times}\mathbf{e}^{\mathbf{b}}\mathbf{\ }$
* $\mathbf{e}^{\mathbf{a}^{\mathbf{n}}}\mathbf{=}\mathbf{e}^{\mathbf{n \times a}}$

### Logarithme

Le logarithme népérien a été inventé pour simplifier le produit lors q. Il donne une correspondance entre deux opérations élémentaires : le produit et la somme.

Axe multiplicatif 	| Puissance | Axe additif
--------------------|-----------|---------------------
1                 	| $2^{0}$  	| 0
2 					| $2^{1}$	| 1
4 					| $2^{2}$ 	| 2
8 					| $2^{3}$ 	| 3
16 					| $2^{4}$ 	| 4
32 					| $2^{5}$ 	| 5
64 					| $2^{6}$ 	| 6
128 				| $2^{7}$ 	| 7
256 				| $2^{8}$ 	| 8
512 				| $2^{9}$ 	| 9

!!! example
	On cherche à calculer 8x2

	1. On 2 correspond à 1 et 8 correspond à 3
	2.  1+3=4
	3.  4 correspond 16

!!! note
  Les valeurs du log étaient regroupées dans des tables. Elles permirent de gagner un temps considérable dans les calculs avant l\'invention des calculateurs.

Propriétés du logarithme :

* $\ln\left( frac{a}{b} \right) = \ln(a) - ln(b)$
* $\ln\left( a^{n} \right) = n \times ln(a)$

## Équation différentielle

Equation différentielle	| Solution 			| Description
------------------------|-------------------|---
$y^{'} + Ay = 0$ 		| $y = ke^{- ax}$	| Equation différentielle d'ordre 2

## Les polynômes

Déterminer les valeurs pour lesquels $f(x) = 0$. Ces méthodes sont également pratiques pour connaître le signe de $f(x)$ :

* Par factorisation (forme canonique) : Cela revient à factoriser avec les identités remarquables.
* Par calcul du déterminant"
    1. Calculer le delta : $\mathrm{\Delta} = b^{2} - 4ac$
    2. Si delta est :

Delta 					| Nb de solutions
------------------------|----------------
$\mathrm{\Delta} < 0$	| 0
$\mathrm{\Delta} = 0$	| 1
$\mathrm{\Delta} > 0$	| 2

Solution donnée par $x_{i} = \frac{- b \pm\sqrt{}\mathrm{\Delta}}{2a}$

