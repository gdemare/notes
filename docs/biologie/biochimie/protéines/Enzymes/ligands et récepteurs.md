[[enzymes]]
On considère le ligand comme la molécule qui se déplace et qui interagit avec une autre molécule, appelée récepteur. Le recepteur se trouve souvent à l'intérieur de la cellule.

#### Type de ligands

En biologie, la position du recpteur dépend du type de ligands. Ils sont situés :

* à l'extérieur de la cellule si le ligand est hydrosoluble.
* à l'intérieur de la cellule si le ligand est liposoluble.

!!! note 
	Le récepteur est parfois appelé site de reconnaissance.

Les principaux récepteurs en biologie sont :

* Les kinases (protéine capable de phosphoryler).
* Les récepteurs couplés aux protéines G.
* Les facteurs de transcription.

En fonction du type d'action que provoque le ligand, on dit qu'il est :

* agoniste lorsqu'il active/déclenche.
* antagoniste lorsqu'il bloque l'activité.

#### Formalisation de l'interaction ligand récepteur 

$R + L \rightleftharpoons RL$

On note pour :

* L'association $v_{ass}$ la vitesse et $k_{a}$ la constante d’association.
* La dissociation $v_{diss}$ la vitesse et $k_{d}$ la constante d’association.

À l'équilibre la vitesse d'association est égale à celle de dissociation. Les concentrations des différentes espèces chimiques n'évoluent plus. On a :

* la constante d'affinité à l'équilibre $k_d = \frac{k_{diss}}{k_{ass}} = \frac{[L] \cdot [R]}{[LR]}$
* la quantité de récepteurs $[R_0] = [R] + [RL]$

On obtient alors pour :

* la concentration de $[RL] = \frac{[R_0] \cdot [L]}{K_d + [L]}$
* la proportion de $\frac{[RL]}{[R_0]} = \frac{[L]}{K_d + [L]}$

!!! note
	Lorsque $RL = \frac{[R_0]}{2}$ on a $K_d = L$.

##### Linéarisation

On utilise la linéarisation pour déterminer :

* $B_{\max}$ nombre de sites récepteurs total ou capacité fixatrice.
* $R_0$ concentration de récepteurs (en Mol).
* $N = \frac{B_{\max}}{[R]}$ nombre de sites par mol.

On a $\frac{[RL]}{[L]} = \frac{- 1}{K_d} \cdot [RL] + \frac{R_0}{K_d}$

En ordonné, on a la quantité de ligand liée par rapport à celle libre.

Les points remarquables obtenus sont :

* Pour $[RL] = 0$, on a $y = B_{\max}$
* $a = \frac{- 1}{K_d}$
* Pour $y = 0$, on a $[RL] = R_0$

!!! warning
	On ne s'intéresse qu'au ligand : lié et libre.

__Dialyse__ méthode de purification pour isoler certains composés en fonction de leur taille. On les sépare grâce à une membrane qui ne laisse passer que les molécules inférieures à une certaine taille.

!!! note 
	Point méthode : dans le TD, on utilise les deux points les plus éloignés pour déterminer les coefficients de la droite.

#### Protocole expérimental

La quantité de ligands et de récepteurs initiale est connue. Pour mesurer les nombres l'association des deux composées, on fait interagir les deux composés en solution. Pour connaitre la quantité de ligands récepteurs, on utilise un filtre qui es imperméable au récepteur et perméable au ligand non lié. On peut alors mesurer la concentration de ce dernier et déduire les autres.

##### Ligand non spécifique

Certains ligands ne sont pas spécifiques c'est-à-dire qu'en plus d'être d'interagir avec les parties spécifiques du récepteur, ils sont capables de se lier avec des régions non spécifiques du récepteur ou d'autres molécules. Dans le cas, il faut réaliser une seconde expérience pour connaitre le nombre de liants non spécifiques.

On reprend la solution de départ et on la sature en ligands non marqués. Le liant marqué spécifiquement lié est alors remplacé par dû non marqués mais la quantité de liant marqué non spécifique n'est pas modifiée.

Expérience A : Ligand marqué non lié

Expérience B : Ligand manqué spécifique + ligand marqué non lié

La différence des concentrations permet d'obtenir le liant non spécifique.
