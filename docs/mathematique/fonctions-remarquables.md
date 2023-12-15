## Fonction exponentielle

La fonction exponentielle est une fonction qui associe un nombre à son doublement (taux d'accroissement). C'est exactement comment le taux d'intérêt d'un livret. L'intérêt dépend de l'argent du compte : plus il y a d'argent plus la valeur de l'accroissement du compte sera élevé.

Pour une valeur qui 1 qui double à $1 + 1 = 2$

$( 1 + 1 \cdot \frac{1}{2} ) + (1 + 1 \cdot \frac{1}{2}) \cdot \frac{1}{2} = {(1 + \frac{1}{2})}^{2}$

$( 1 + 1 \cdot \frac{1}{3} ) + ( 1 + 1 \cdot \frac{1}{3} ) \cdot \frac{1}{3} + [ ( 1 + 1 \cdot \frac{1}{3} ) + ( 1 + 1 \cdot \frac{1}{3} ) \cdot \frac{1}{3} ] \cdot \frac{1}{3} = {(1 + \frac{1}{3})}^{3}$

La généralisation des calculs précédent conduit à :
${(1 + \frac{1}{n})}^n$

La fonction exponentielle est $\lim_{n \rightarrow \infty}{\ {(1 + \frac{1}{n})}^n} = e( \approx 2,718\ldots)$

!!! note
	L'exponentiel et le logaritme sont systmétrique par rapport à $f(x) = x$.

Propriétés exponentielle :

* $e^{a + b} = e^{a} \cdot e^b$
* $e^{a^n} = e^{n \cdot a}$

### Logarithme

Le logarithme népérien a été inventé pour simplifier le produit. Il donne une correspondance entre deux opérations élémentaires : le produit et la somme.

Axe multiplicatif 	| Puissance | Axe additif
--------------------|-----------|---------------------
1                 	| $2^0$  	| 0
2 					| $2^1$		| 1
4 					| $2^2$ 	| 2
8 					| $2^3$ 	| 3
16 					| $2^4$ 	| 4
32 					| $2^5$ 	| 5
64 					| $2^6$ 	| 6
128 				| $2^7$ 	| 7
256 				| $2^8$ 	| 8
512 				| $2^9$ 	| 9

!!! example
	On cherche à calculer $8 \times 2$

	1. On 2 correspond à 1 et 8 correspond à 3.
	2.  $1 + 3 = 4$.
	3.  4 correspond 16.

!!! note
	$\log 16 = 4$

!!! note
	Les valeurs du log étaient regroupées dans des tables. Elles permirent de gagner un temps considérable dans les calculs avant l'invention des calculateurs.

Propriétés du logarithme :

* $\ln \frac{a}{b} = \ln a  - \ln b $
* $\ln a^n  = n \cdot \ln a$

## Les polynômes

Déterminer les valeurs pour lesquels $f(x) = 0$. Ces méthodes sont également pratiques pour connaître le signe de $f(x)$ :

* Par factorisation (forme canonique) : Cela revient à factoriser avec les identités remarquables.
* Par calcul du déterminant :
  
    1. Calculer le delta : $\Delta = b^2 - 4 \cdot a \cdot c$
    2. Si delta est :

Delta 			| Nb de solutions reels
----------------|----------------
$\Delta \lt 0$	| 0 (des solutions dans le plan des complexes)
$\Delta = 0$	| 1
$\Delta \gt 0$	| 2

Solution donnée par $x_i = \frac{- b \pm \sqrt{\Delta}}{2 \cdot a}$

