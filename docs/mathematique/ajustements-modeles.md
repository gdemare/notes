Les ajustements conistent à trouver la fonction $\min (Y_obs - Modèle(x))^2$.

## Modèle linéaire

$y = a \cdot x + b$ les observations $+ e ~ N(O, \sigma )$

On cherche les coefficients qui minisent l'écart moyen avec les points $min F(a,b) = \sum_{i=1}^{n}{(a \cdot x_i + b - y_i)^2}$

Consiste à résoudre :

$$\begin{cases}
    2 \cdot (a \cdot x_i + b - y_i) \cdot x_i = 0 \\ 
    2 \cdot (a \cdot x_i + b - y_i) = 0
\end{cases}$$

## Ajustements et modèles

Nom	 		| Fonction 
------------|---
Exponentiel	| $a \cdot e^{- b \cdot x}$


