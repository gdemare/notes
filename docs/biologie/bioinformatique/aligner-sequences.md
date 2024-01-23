## Assembler des séquences

L'objectif est de reconstituer une séquence à partir de morceaux car la majorité des techniques de séquençage fonctionne par la découpe de polymères et leur analyse en petits fragments. Les principales difficultés sont :

* Les erreurs de lecture que ne permettent pas trouver un alignement exact.
* La répétition de certaines séquences répétées qui peuvent être alignées à plusieurs endroits.
* Dans le cas d'un grand nombre de séquences, l'alignement est trop lent.

$C = \frac{N \cdot L}{G}$

* $N$ nombre de fragments.
* $G$ taille totale.
* $L$ taille des fragments

Les paramètres important dans le séquençage sont :

* La taille des fragments. 
* Le taux et le type d'erreurs.