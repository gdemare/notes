Image 
Antécédent 

* Injective, la fonction renvoie une image pour l'ensemble des antécédents. $\forall x, \exists y, f(x) = y$ 
* Surjective, toute les images possèdent au moins un antécédent, $\forall y, ! \exists x, f(x) = y$
* Bijective, est équivalent à une fonction surjectif et injective càd tout les antécédents possèdent une unique image, $\forall x, !\exists y, f(x) = x$

!!! Note
	Si $f$ est bijective alors il existe une fonction $f^{-1}(y) = x$

## Dérivé et primitive

La dérivée correspond à la fonction qui donne l'évolution de la pente. C'est le coefficent de la droite qui par passe par un point $x_{0}$ : 

* Coefficient de la droite $f'(x) = \lim_{h \to \infty} {\frac{f(x-h)+f(x)}{h}}$
* Tangente :   $f'(a)(x - a) + f(a)$

!!! note
	La dérivé seconde $f''(x)$ donne pour $f un plateau = f'(x_0) = 0$ le sens de variation.

Son approximation en un point $x_{0}$

$tangente + correction$

Le signe de la dérivé permet de connaitre la variation de $f(x)$ grâce au signe de la dérivée.

Calculer l'aire sous la courbe (primitive) : $\int_{}^{}{f(x) \cdot dx} = F(x) + C$

$\mathbf{f(x)}$					| $\mathbf{f'(x)}$
--------------------------------|---
$u + v$ 				| $u' + v'$
$u^n$		| $n \cdot u' \cdot u^{n - 1}$
$u \cdot v$			| $u' \cdot v + u \cdot v'$
$\frac{u}{v}$	| $\frac{u' \cdot v - u \cdot v'}{v^2}$

$f(x)$ 			| $f'(x)$
----------------------------|---
$e^u$	| $u' \cdot e^{u}$
$\ln u$	| $\frac{u'}{u}$
$\cos u$	| $- u' \cdot \sin u$
$\sin u$ | $u' \cdot \cos u$
$\tan u$ | $u' \cdot (1+ \tan u)^2$

Intégration par partie

$\int u(x) \cdot v'(x) dx = \lbrack u \cdot v \rbrack + \int u'(x) \cdot v(x) dx$

### Équation différentielle

Equation différentielle	| Solution 			| Description
------------------------|-------------------|---
$y' + A \cdot y = 0$ 		| $y = k \cdot e^{- a \cdot x}$	| Equation différentielle d'ordre 2

## Limites

Quatres formes indéterminées $- \infty + \infty$, $\frac{\infty}{\infty}$, $\frac{0}{0}$.

Méthodes pour sortir d'une forme indéterminer :

* factoriser, par exemple en passant par me conjugué $(a + \sqrt{b})(a - \sqrt{b})$.
* Pour les polynômes, cela revient à déterminer la limite du terme de plus haut degré.


## Sens de variation

Un fonction est convexe (puit) si $f''(x) \ge 0$