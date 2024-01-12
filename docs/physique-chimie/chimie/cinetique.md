Lors d'une réaction passe par un intermédiaire réactionnel, c'est l'aspect cinétique qui domine.

Pour qu'une réaction chimique puisse se produire, il faut que les réactifs :

* Soient les uns à côté des autres.
* Atteignent un certain niveau d'énergie appelé énergie d'activation càd que les réactifs se percutent avec une certaine quantité d'énergie c'est-à-dire suffisamment vite.

__Etat équilibre__ état d'équilibre relatif où les concentrations restent constantes.	

!!! note
	L'entalpie libre définit l'équilibre de réaction. Une réaction va toujours dans le sens de l'entalpie libre.

## Vitesse de réaction

On définit la vitesse de réaction comme la quantité de substrat se transformant en produit durant une certaine unité de temps.

!!! note 
	La vitesse consiste à mesurer l'ampleur de la variation de concentration du produit pour une petite variation de temps.

Ainsi, pour une réaction de type $A \rightarrow B$, on a comme loi cinétique, l'évolution du produit en fonction du temps $v = \frac{d[B]}{dt} = \frac{- d[A]}{dt}$ avec :

* $[B]$ et $[A]$ les concentration en Mol (ou $mol \cdot L^{-1}$)
* $v$ la vitesse en $mol \cdot L^{-1} \cdot s^{-1}$ ou $Mol \cdot s^{-1}$

La vitesse d'apparition du produit est proportionnelle à la quantité de produit présent qui disparait $v = k[A]$ avec $k$, la constante de vitesse en $s^{-1}$

Cela signifie qu'à chaque instant $k$ % du produit A se transforme en B.

### 


!!! note
	Dans le cas où un des réactifs est le solvant, la réaction ne change pas car sa concentration reste constante. En revanche, il y aura une diminution du volume.

!!! note 
	Dans le cadre d'un équilibre chimique ou d'état stationnaire, c'est-à-dire de $A + B \rightleftarrows C + D$.


Vitesse de disparition $2A \rightarrow B$

Vitesse                             | Loi de vitesse
------------------------------------|------------------------------------
$v = \frac{d[B]}{dt} = - \frac{d[A]}{2 \times dt}$ | $v = k{[A]}^{2}$

La vitesse de disparition de A est deux fois plus rapide que celle de B.

__Réaction élémentaire__ réaction en une seule étape.

__Molarité__ nombre d'entités chimiques (molécules, ions, radicaux) qui participe à une réaction élémentaire.

__Ordre partielle__ nombre de molécules de chaque espèce.

__Ordre de réaction__ évolution de la concentration de l'espèce.

Calcul de la vitesse en fonction de l' $A + B \rightarrow C$.

La vitesse est $v = - \frac{d[A]}{dt}$

Type de réaction    | Ordre | Loi vitesse   | Transformation | Loi de la vitesse intégrée
--------------------|-------|---------------|----------------|----------------------------
$A$                 | 0 | $v = k$  | $d[A] = -k \cdot dt$                  | $A = - k \cdot t$
$A \rightarrow B$   | 1 | $v = k[A]$        | $\frac{d[A]}{dt} = - k \cdot dt$      | $A = A_0 \cdot e^{-k \cdot t}$
$A + solvant \rightarrow B$	| 1 |$v = k \cdot [A] \cdot [sol]^0$   
$2A \rightarrow B$  | 2 | $v = k[A]^2$      | $- \frac{d[A]}{[A]^2} = k \cdot dt$   | $\frac{1}{A} = \frac{1}{A_0} + k \cdot t$
$A + B \rightarrow C$		| 2 | $v = k \cdot [A] \cdot [B]$	

$k$ constante de vitesse.

!!! note
    $\int_{A_{0}}^{A}\frac{d[A]}{[A]} = {[\ln A]}_{A_{0}}^{A} = \ln A - \ln A_{0} = - k \cdot dt \Longleftrightarrow A = A_0 \cdot e^{- k \cdot t}$

!!! note
    Pour tracer le graphique, on peut linéariser en utilisant $\ln A$ Demi-temps de vie, c'est $[A] = \frac{[A_0]}{2}$

Deux méthodes pour déterminer l'ordre d'une réaction :

* Intégrale. On suppose l'ordre de la réaction et on représente la forme linéaire pour chaque ordre hypothétique, l'ordre réel correspondra au graphique qui trace une droite.
* Différentielle (linéariser la vitesse et déterminer l'ordre à partir du coefficient $b$ de la droite).

### Méthode intégrale

On représente $f(x) = y$ pour chacun des ordres :

Ordre   | Représentation
--------|-----------
0       | $y = [A]$
1       | $y = \ln{[A]}$   
2       | $y = \frac{1}{[A]}$

L'ordre de la réaction correspond à la représentation graphique qui donne une droite.

### Méthode différentielle

On trace le graphique $f(\log[A]) = \log v$

Car $\log v = \log k + \log{[A]}$. Pour rappel la vitesse est la variation de concentration pour une petite unité de temps $v = - \frac{d[A]}{dt}$

## Température et énergie d'activation

$k = A \cdot e^{-\frac{E_a}{R \cdot T}}$

* $k$ constante de vitesse
* $A$ facteur de fréquence (même unité que $k$).
* $E_a$ énergie d’activation $J \cdot mol^{-1}$
* $R$ constante des gaz parfaits $8,314  J \cdot K^{-1} \cdot mol^{-1}$.
* $T$ température en $K$.

!!! note
    lorsque $E_a$ augmente, $k$ diminue et lorsque $T$ augmente $k$ augmente. Plus $k$ est grand plus la réaction est rapide.

### Linéarisation et représentation graphique 

$f(\frac{1}{T})= \ln K$

!!! note
    L'énergie d'activation correspond alors au coefficient de la droite.

!!! note 
    Méthode : Pour vérifier si la réaction suit la loi de la variation de la température, on trace sa représentation graphique et si c'est une droite alors la réaction suit bien cette loi.

### Effet de la température

On peut accélérer une réaction en augmentant la température ce qui a
pour effet de faciliter :

* La rencontre entre les molécules.
* La vitesse de collision et ainsi permettre de passer la barrière que constitue l'énergie d'activation.

!!! note
    Cela revient à augmenter la probabilité que la réaction ait lieu.

## La dissolution

La dissolution est une réaction chimique qui fait intervenir deux phénomènes :

* Dissociation polarité des molécules du solvant.
* Solvatation stabilisation des espèces formées nombre de molécules autour des ions. Dispersion taille et de la charge.

## La catalyse

Il existe deux types de catalyse en fonction de la solubilité de celui-ci :

* Homogène (soluble).
* Hétérogène (non soluble).

Cinétique passage par des intermédiaires non stable $K( = Q_r)$ faible.

__Composé de coordination__ molécule composé d'un cation central ou d'un métal.

