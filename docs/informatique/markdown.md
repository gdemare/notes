## Ressources

* [Markdown pour les mathématiques](https://www.bearnok.com/grva/it/knowledge/software/mathjax)
* [MathJax symboles](https://www.bearnok.com/grva/it/knowledge/software/mathjax)
* [autre markdown](https://rpruim.github.io/s341/S19/from-class/MathinRmd.html)
* [Wikipedia markdown](https://fr.wikipedia.org/wiki/Table_des_symboles_litt%C3%A9raux_en_math%C3%A9matiques)
## Autres 

* `![description](lien)` insérer une image.

    * `{ width=50% }` préciser la largeur.

* `[comment]: <> (commentaire)` ajouter un commentaire dans le code markdown qui ne sera pas affiché.

!!! wanring 
   Pour les parenthèses présentes dans les commentaires, les faire précéder de `\`.
## Bloc code

Colorer le code.

```
`''' py
import tensorflow as tf
'''
```
## Lettres grecs

Pour les majuscules, il faut mettre la première lettre en majuscule.

| Mascule   | Minuscule  | Fonction   | Lettre |
| --------- | ---------- | ---------- | ------ |
| .         | $\partial$ | `\partial` | d rond |
| $\Delta$  | $\delta$   | `\delta`   | delta  |
| $\Lambda$ | $\lambda$  | `\lambda`  | lambda |
| .         | $\mu$      | `\mu`      | mu     |
| .         | $\nabla$   | `\nabla`   | nabla  |
| .         | $\nu$      | `\nu`      | nu     |
| .         | $\phi$     | `\phi`     | phi    |
| $\Pi$     | $\pi$      | `\pi`      | pi     |
| $\Psi$    | $\psi$     | `\psi`     | psi    |
| $\Omega$  | $\omega$   | `\omega`   | omega  |
| .         | $\rho$     | `\rho`     | rho    |
| $\Sigma$  | $\sigma$   | `\sigma`   | sigma  |
| $\Theta$  | $\theta$   | `\theta`   | theta  |
## Symbole

Markdown    | Fonction      | Lettre
------------|---------------|-------
`\circ`     | $\circ$       | Cercle
`\infty`    | $\infty$      | infini
### Fonctions

Markdown | Fonction | Définition
---------|----------|---------------
`\cos`   | $\cos$   | cosinus
`\det`   | $\det$	| déterminant
`\log`   | $\log$   | logarithme
`\sin`   | $\sin$   | sinus
`\tan`   | $\tan$   | tangente
### Comparaisons

Markdown  | Symbole   | Définition 
----------|-----------|-----------
`\gt`     | $\gt$     | supérieur à
`\ge`     | $\ge$     | supérieur ou égale à
`\gg`     | $\gg$     | strictement supérieur
`\lt`     | $\lt$     | inférieur à 
`\le`     | $\le$     | inférieur ou égale à 
`\ll`     | $\ll$     | strictement inférieur
`=`       | $=$       | égale
`\neq`    | $\neq$    | inégale
`\approx` | $\approx$ | approximation
### Opérateurs

Markdown			| Opérateur			| Définition
--------------------|-------------------|-------
`\cdot`       		| $\cdot$			| fois (avec le point)
`\times` 			| $\times$			| multiplié
`\frac{a}{b}`       | $\frac{a}{b}$       | fraction
`^{val}`            | $^{val}$	        | puissance
`\sqrt{}`           | $\sqrt{}$         | racine carré
`\sqrt[n]{x}`       | $\sqrt[n]{x}$     | racine n 
`\vert{x}\vert`     | $\vert{x}\vert$   | valeur absolue
`\Vert x \Vert`     | $\Vert{x}\Vert$ | norme
`\pm`               | $\pm$             | plus et moins

Markdown			| Opérateur			| Définition
--------------------|-------------------|-------
`_{indice}`   		| $_{indice}$		| indice
`\mathbf{objet}`    | $\mathbf{objet}$  | objet
`\mathrm{test}`     | $\mathrm{objet}$  | objet
`\hat{x}`			| $\hat{x}$ 		| chapeau
`\exists`			| $\exists$			| existe
`\cup` 				| $\cup$			| union
`\cap` 				| $\cap$ 			| intersection		
`\in` 				| $\in$				| appartient
`\notin`			| $\notin$ 		| n'appartient pas
`\varnothing` 		| $\varnothing$ 	| ensemble vide
`\infty` 			| $\infty$			| infini
`\mathbb{N}` 		| $\mathbb{N}$		| ensemble (N, Z, Q, I, R C)
`\widehat{xy}`		| $\widehat{xy}$ 	| chapeau
`\dot{x}` 			| $\dot{x}$			| x point
`\ddot{x}` 			| $\ddot{x}$		| x deux points
`\vec{x}`           | $\vec{x}$         | vecteur
`\forall` 			| $\forall$			| pour tout
### Expressions

| Markdown                                       | Math ajax                                      | Définition         |
| ---------------------------------------------- | ---------------------------------------------- | ------------------ |
| `\lim_{x \to \infty} {1 \over x }`             | $\lim_{x \to \infty} {1 \over x }$             | limite             |
| `{n+1 \choose 2k}`                             | ${n+1 \choose 2k}$                             | combinaison        |
| `\sum_{n=1} ^{N}`                              | $\sum_{n=1} ^{N}$                              | somme de n         |
| `\prod_{n=1} ^{N}`                             | $\prod_{n=1} ^{N}$                             | produit            |
| `\begin{bmatrix} a & b \\ c & d \end{bmatrix}` | $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ | matrice            |
| `\int_0^1{x dx}`                               | $\int_0^1{  x \cdot dx}$                       | intégrale de 0 à 1 |

Markdown 							                    | Math ajax								| Définition
--------------------------------------------------------|---------------------------------------|----------------
`\begin{aligned}ligne 1 \\ ligne 2 \end{aligned}`       | $\begin{aligned}ligne 1 \\ ligne 2 \end{aligned}$ | répartir sur plusieurs lignes
`\begin{cases} y \\ x \end{cases}`                      | $\begin{cases} y \\ x \end{cases}$ | système d'équations.
## Flèches

Markdown			| Opérateur			| Définition
--------------------|-------------------|-------
`\to`    	        | $\to$             | Fléche
`\Leftrightarrow` 	| $\Leftrightarrow$ | équivalent
`\Rightarrow` 		| $\Rightarrow$		| implique 
`\rightleftharpoons`    | $\rightleftharpoons$ | réaction chimique
`\rightarrow`       | $\rightarrow$ | flèche droite
`\leftarrow`        | $\leftarrow$  | flèche gauche
