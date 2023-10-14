Image 
Antécédent 

* Injective, la fonction renvoie une image pour l'ensemble des antécédents. $\forall x, \exist y, f(x) = y$ 
* Surjective, toute les images possèdent au moins un antécédent, $\forall y, ! \exist x, f(x) = y$
* Bijective, est équivalent à une fonction surjectif et injective càd tout les antécédents possèdent une unique image, $\forall x, !\exist y, f(x) = x$

!!! Note
	Si f est bijective alors il existe une fonction $f^{-1}(y) = x$

## Dérivé et primitive

La dérivée correspond à la fonction qui donne l'évolution de la pente. C'est le coefficent de la droite qui par passe par un point $x_{0}$ : 

* Coefficient de la droite $f'(x) = \lim_{h \to \infty} {\frac{f(x-h)+f(x)}{h}}$
* Tangente :   $f'(a)(x - a) + f(a)$

!!! note
  La dérivé seconde $f''(x)$ donne pour $f un plateau = f'(x_0) = 0$ le sens de variation.

Son approximation en un point $x_{0}$

$tangente + correction$

Le signe de la dérivé permet de connaitre la variation de $f(x)$ grâce au signe de la dérivée.



Calculer l'aire sous la courbe (primitive) : $\int_{}^{}{f(x)\ dx} = \ F(x) + C$

$\mathbf{f(x)}$					| $\mathbf{f'(x)}$
--------------------------------|---
$\mathbf{u + v}$ 				| $u' + v'$
$\mathbf{u}^{\mathbf{n}}$		| $n \times u' \times u^{n - 1}$
$\mathbf{u \times v}$			| $u^{'}v + uv'$
$\frac{\mathbf{u}}{\mathbf{v}}$	| $\frac{u^{'}v - uv'}{v^{2}}$

$\mathbf{f(x)}$ 			| $\mathbf{f'(x)}$
----------------------------|---
$\mathbf{e}^{\mathbf{u}}$	| $u'e^{u}$
$\mathbf{ln}\mathbf{(u)}$	| $\frac{u'}{u}$
$\mathbf{\cos}\mathbf{(u)}$	| $- u' \times \sin u$
$\mathbf{\sin}\mathbf{(u)}$ | $u' \times \cos u$
$\mathbf{\tan}\mathbf{(u)}$ | $u' \times (1{{+ (tan}u)}^{2})$

Trouver une primitive $\int_{}^{} \mathbf {u' \times v} \mathbf{=}\left\lbrack$

Intégration par partie

$\int u(x) \cdot v'(x) dx = \lbrack u \cdot v \rbrack + \int u'(x) \cdot v(x) dx$

### Équation différentielle

Equation différentielle	| Solution 			| Description
------------------------|-------------------|---
$y^{'} + Ay = 0$ 		| $y = ke^{- ax}$	| Equation différentielle d'ordre 2

## Limites

4 formes indéterminées $\mathbf{- \infty + \infty}$, $\frac{\mathbf{\infty}}{\mathbf{\infty}}$ , $\frac{\mathbf{0}}{\mathbf{0}}$.

... factoriser.
... avec des racines

Multiplié par le conjugué $(a + \sqrt{}b)(a - \sqrt{b})$

  Limite polynômes en |  | Terme de plus haut degré.
  $\mathbf{\  \pm \infty}$