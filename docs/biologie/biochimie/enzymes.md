
Les enzymes sont des catalyseurs naturels qui fonctionnent dans des conditions particulières (souvent dans les conditions physiologiques du corps). Ce sont en générale des protéines (mais aussi des ARN) impliquées dans le métabolisme c'est-à-dire qui ont une activité :

* Anabolisme (synthèse).
* Catabolisme (dégradation).

__Catalyseur__ substance qui augmente la vitesse d'une réaction chimique sans participer ou modifier la réaction.

Elles sont caractérisées par :

* Leur efficacité.
* Leur spécificité vis-à-vis du substrat.

!!! note 
	Le nom a été donné par Pasteur qui a découvert un composé issu de levure qu'il a utilisé pour transformer le surcre en alcool. Il a nommé ce composé enzyme, en- "dans" et -zyme "levure". 

### Principe de fonctionnement des enzymes

L'enzyme se fixe à un des réactifs ce qui modifie le chemin de la réaction et diminue l'énergie d'activation. La réaction a alors lieu plus souvent.

!!! note
	Les enzymes sont réutilisables et sont, en moyenne, capable de transformer 1 000 substrats en produits par seconde. Elles sont capable d'accélèrent une réaction en moyenne d'un facteur $10^{3}$ à $10^{6}$ et ce jusqu'à $10^{12}$.

En générale, la conformation des protéines n'est pas rigide mais elle oscille subtilement entre un ensemble de formes très proche. Lorsque le substrat se lie au site actif de l'enzyme , les interactions moléculaires modifient légérement leur structure spatiale et abaisser l'énergie d'activation de la réaction.

__Site actif__ site de l'enzyme qui se lie au substrat. Elle est composée au maximum de 10 acides aminés.

L'enzyme facilite la réaction en :

* Orientant le substrat ce qui permet de rendre accessibles les sites de réactions.
* Le rapprochement entre plusieurs substrats.
* Stabiliser l'état de transition en modifiant la forme du substrat.

D'autres molécules peuvent participer à l'action des enzymes comme :

* Cofacteur substance non protéiques dont ont besoin les enzymes pour fonctionner.
* Coenzyme cofacteur non protéique mais d'origine organique.

__Apoenzyme__ enzyme sans son coenzyme.

!!! note
	Pour les réactions anaboliques, il faut fournir de l'énergie pour que la réaction est lieu en brisant les molécules d'ATP.

### Les catégories d'enzymes

* Oxydo-réductases, transfert d'électrons généralement par l'utilisation d'atomes d'oxygènes.
* Réaction de liaison :

	* Transférase d'un groupement chimique.
	* Lyase catalyse (avec les ligases qui utilisent de l'énergie).

* Hydrolases coupe une liaison covalente avec une molécule d'eau.
* Isomérase transforme en isomère.

!!! note
	L'enzyme dispose d'un matricule qui correspond la catégorie et au type de réactions catalysées.

!!! example
	La première étape de la digestion consiste à dénaturer les protéines grâce à la mise en place d'un milieu avec un pH 2. Elles sont ensuite dégradées par deux types d'enzymes de type catabolique qui agissent simultanément :

	* Les exopeptidases (coupent aux extrémités).
	* Les endopeptidases (coupent à l'intérieur).

#### Les endopeptidases

Spécificité de...          | Trypsine         | Chymotrypsine | Endonucléase
---------------------------|------------------|----------------|------------------
...réaction                | Hydrolyse        | Hydrolyse     | Hydrolyse
...liaison                 | Peptidique       | Peptidique    | Phosphodiester
...reconnaissance          | Lysine, arginine | Trp, Phe, tyr | Palindrome (AG)
...position de la réaction | C-term           | C-term        | Oxygène et phosphore
Stéréospécificité          | L                | L             | D

__Palindrome__ séquence dont le sens est indépendant de celui de lecture.

#### Les exopeptidases

Spécificité de...          | Aminopeptidase | Carboxypeptidase
---------------------------|----------------|------------------
...réaction                | Hydrolyse      | Hydrolyse
...liaison                 | Peptide        | Peptide
...reconnaissance          | N-term         | Carboxyle
...position de la réaction | N-term         | C-term
Stéréospécificité          | L              | L

===================================================

## Cinétique enzymatique 
!!! note
	La cinétique càd les réactions sans enzymes sont présentes dans la partie chimie.

__Etat de saturation__ toutes les enzymes sont liées aux substrats.

### Réaction chimique avec catalyseur enzymatique

L'enzyme forme un complexe avec le substrat avec des liaisons :

* Hydrogène
* Van der Val

$[E] + [S] \rightleftarrows [ES] \rightarrow [E] + [P]$

Ainsi, la réaction a pour vitesse : $v = k_{cat} \cdot [ES]$.

!!! note
	$K$ correspond à l'équilibre et $k$ au coefficient de vitesse.

Dans cette réaction enzymatique, lorsque le complexe enzyme-substrat se forme, il est soit immédiatement :

* Transformé en produit $k_{cat} \cdot [ES]$.
* Dissocié $k_{- 1} \cdot [ES]$.

D'où la vitesse de formation du complexe $ES$ est égale à : $k_1 \cdot [E] \cdot [S] = k_{- 1} \cdot [ES] + k_{cat} \cdot [ES]$.

Les deux modèles principaux pour modéliser la vitesse de réaction en présence d'enzymes sont :

* Michealis-Menten qui suppose un état d'équilibre entre le substrat et l'enzyme.
* Briggs-Haldane qui suppose l'existence d'un état stationnaire au complexe ES.

#### Modéle de Michaelis-Menten

Le modèle de Michealis-Menten suppose l'existence d'un état d'équilibre réactionnel entre le substrat et l'enzyme. Il existe ainsi un $k_{cat} \lt \lt k_{-1}$.

* $K_{m} = \frac{[E] \cdot [S]}{[ES]} = \frac{k_{- 1} + k_{cat}}{k_1}$ avec $K_{m}$ constante d'état stationnaire en $mol.L^{-1}$

Pour déterminer la vitesse, car on est incapable de mesurer la concentration de $[ES]$. L'astuce de Michaelis-Menten consiste à écrire $v = k_{2}[ES]\frac{[E_0]}{[E_0]}$ et d'exprimer $[E_0]$ en fonction de $[ES]$ :

* $[E_0] = [E] + [ES]$
* $[E] = K_m\frac{[ES]}{[S]}$

On obtient alors pour la vitesse (équation de) $v = \frac{k_{cat}[E_0][S]}{K_m + [S]}$

On peut déduire de l'équation :

* La vitesse maximum $v_{\max}$. La quantité de substrat qui tend vers l’infini. On a alors $K_m \ll [S]$ d’où $v_{\max} = \lim_{x \to \infty} {v} = k_{cat} \cdot [E_0]$. On a alors $k_{cat} = \frac{v_{\max}}{[E_0]}$ ainsi l'équation de Micheal-Menden peut s'écrire $v = \frac{v_{\max}[S]}{K_m + [S]}$.
* Efficacité de l’enzyme. Plus la vitesse est grande, plus $k_{cat}$ est grand.
* L'affinité (reconnaissance entre l'enzyme et le substrat) correspond à la proportion $\frac{[E]}{[ES]}$. Plus elle est élevée et plus $\frac{[E]}{[ES]}$ est petit d’où $K_m = \frac{[E]}{[ES]}[S]$ est petit.

!!! note
	Pour $[S] = K_m$, on a également $v = \frac{1}{2} \cdot v_{\max}$.

!!! note
	$v_{max}$ est atteinte lorsque tous les sites actifs des enzymes sont occupés. On dit alors que la solution est saturée en substrat. Cette situation est appelée état de saturation.

!!! note
	L'absorbance est reliée à la concentration par $A = \epsilon \cdot [C] \cdot l$.

##### Linéarisation

La vitesse peut être facilement linéarisée en posant : $\frac{1}{v} = f(\frac{1}{[S]})$ noté $y = f(x)$.

On a remarque que :

* $x = 0 \rightarrow y = \frac{1}{v_{\max}}$. L'intersection à l'ordonnée.
* $y = 0 \rightarrow x = - K_m$. l'intersection à l'absisse ou sinon 

!!! notes Point méthode
	Pour savoir si la réaction enzymatique de type Michaelis-Menten, on vérifie que $f( \frac{1}{[S]} ) = \frac{1}{[P]}$ est une droite.
	On peut alors déterminer les constantes $v_{max}$ et $K_{m}$ d’après le graphique.

#### Modèle de Briggs-Haldane

Le modèle de Briggs-Haldane suppose que $[ES] = c$ avec $c$ une constante.

$v = \frac{k_{cat}[E_0][S]}{K_m+[S]}$

### Les inhibiteurs de l'activité enzymatique

Les inhibiteurs permettent à la cellule de contrôler la vitesse de réaction pour s'adapter à ses besoins métaboliques en modulant l'activité enzymatique.

Les inhibiteurs peuvent se lier à l'enzyme :

* fortement ou faiblement (niveaux d'affinité).
* temporairement ou irréversibelemnt.

!!! note
	Une partie des toxines et des poisons agissent comme des inhibiteurs.

Il existe deux grands types d'inhibition :

|                                                                  | Compétitive                                                            | Non compétitive                                                                                                                       |
--------------------|-----------------------|-----------------------------|
Site bloqué par l'inhibiteur                                     | Reconnaissance                                                         | Catalyse                                                                                                                              |
| Modifie                                                          | Équilibre entre enzyme et substrat                                     | Efficacité de l'enzyme                                                                                                                |
| Affinité enzyme-inhibiteur                                       | $K_i = \frac{[E][I]}{[EI]}$ | $K_{i} = \frac{[E][I]}{[EI]} = \frac{[ES][I]}{[ESI]}$ |
| $E_{0} =$ | $[E] + [EI] + [ES]$           | $[E] + [EI] + [EIS] + [ES]$                                                     |
| Rmq                                                              | $v_{max}$ ne change pas                                               | $K_{m}$ ne change pas                                                                                                                 |

!!! note
	Il existe d'autres inhibiteurs hybrides.

#### Inhibiteur compétitif

L'inhibiteur compétitif se lie sur le site réactionnel de l'enzyme à la place d'un substrat. Cela se traduit par une diminution de l'affinité du substrat avec l'enzyme.

$v_i = \frac{v_{\max}[S]}{K_m \cdot (1 + \frac{[i]}{K_i}) + [S]} = \frac{v_{\max}[S]}{K_{mI} + [S]}$

!!! note
	On modifie la reconnaissance $K_{m} \lt {K'}_{m} = K_{m}(1 + \frac{[i]}{K_{i}})$

La constante d'inhibition :

$K_i = \frac{K_m.[I]}{K_{mI} - K_m}$ avec $K_i$ est la quantité d'inhibiteurs nécessaire pour complétement arrêter la réaction. L'inhibition peut être levée en ajoutant du substrat.

#### Inhibiteur non compétitif

$v_{maxI} = \frac{v_{\max}}{1 + \frac{[i]}{K_i}}$

!!! note
	L'inhibiteur rend l'enzyme moins efficace (efficacité catalytique) ( $v_{\max}$ plus petit).

$v_i = \frac{v_{\max}}{1 + \frac{[i]}{K_i}} \times \frac{[S]}{K_m + [S]} = \frac{v_{maxI}[S]}{K_m + [S]}$

$K_i = \frac{v_{maxI}.[I]}{v_{\max} - v_{\max I}}$

### Effet du pH et de la température

Les enzymes sont sensibles aux conditions de l'environnement notamment à cause de leur structure moléculaire, une enzyme possède des AA :

* Chargés et polaires en périphérie.
* Apolaires au centre.

Un organisme fabrique plusieurs enzymes légèrement différentes qui répondent au même besoin mais dont les conditions optimales de fonctionnement sont différentes. On parle d'isoenzyme.

__Isoenzyme__ enzyme qui fonctionne de manière optimale dans des conditions physicochimiques différentes.

#### Effet du pH 

Le changement de pH modifie l'activité de l'enzyme car cela modifie les AA polaires notamment la cystéine et les AA chargés impliqués sur le site de reconnaissance et de catalyse.

Rappel : Si le $pH \gt pKa+1$ alors l'espèce sera déprotonée à 90%.

!!! note
	Il est possible de déterminer les AA impliqués dans la reconnaissance et la catalyse en jouant sur le pH.

#### Effet de la température

L'augmentation de la température a deux effets antagonistes sur les
enzymes :

* Elle augmente la rencontre entre les molécules ce qui a tendance à accélérer la réaction.
* Elle provoque une dénaturation de l'enzyme et une diminution de son affinité avec le substrat en provoquant la cassure des liaisons hydrogènes et de Van der Vaal.

#### Mécanisme de protection 

Les enzymes sont stabilisées par :

* Le complexe qu'elles forment avec le substrat grâce aux liaisons hydrogènes et de Van Der Vaal.
* Grâce à des petits cations bivalents avec deux charges comme $Mg^{+2}$, $Ca^{2+}$, $Zn^{2+}$ qui entrent dans la structure moléculaire et la stabilisent via des liaisons ioniques. Par opposition, les métaux lourds comme le plomb $Pb^{2+}$ et le mercure $Hg^{2+}$, qui sont beaucoup plus gros, auront tendance à distordre la structure des enzymes.

!!! note
	Les métaux lourds sont des inhibiteurs toxiques.

### Intéraction ligand récepteur

On considère le ligand comme la molécule qui se déplace et qui interagit avec une autre molécule, appelée récepteur. Le recepteur se trouve souvent à l'intérieur de la cellule.

#### Les ligands en biologie

En biologie, la position du recpteur dépend du type de ligands. Ils sont situés :

* À l'extérieur de la cellule si le ligand est hydrosoluble.
* A l'intérieur de la cellule si le ligand est liposoluble.

!!! note 
	Le récepteur est parfois appelé site de reconnaissance.

Les principaux récepteurs en biologie sont :

* Les kinases (protéine capable de phosphoryler).
* Les récepteurs couplés aux protéines G.
* Les facteurs de transcription.

En fonction du type d'action que provoque le ligand, on dit qu'il est :

* Agoniste lorsqu'il active/déclenche.
* Antagoniste lorsqu'il bloque l'activité.

#### Formalisation de l'interaction ligand récepteur 

$R + L \leftrightarrow RL$

On note pour :

* L'association $v_{ass}$ la vitesse et $k_{a}$ la constante d’association.
* La dissociation $v_{diss}$ la vitesse et $k_{d}$ la constante d’association.

À l'équilibre la vitesse d'association est égale à celle de dissociation. Les concentrations des différentes espèces chimiques n'évoluent plus. On a :

* La constante d'affinité à l'équilibre $k_d = \frac{k_{diss}}{k_{ass}} = \frac{[L][R]}{[LR]}$
* La quantité de récepteurs $[R_0] = [R] + [RL]$

On obtient alors :

* Concentration de $[RL] = \frac{[R_0].[L]}{K_d + [L]}$
* Proportion de $\frac{[RL]}{[R_0]} = \frac{[L]}{K_d + [L]}$

!!! note
	Lorsque $RL = \frac{[R_{0}]}{2}$ on a $K_{d} = L$.

##### Linéarisation

On utilise la linéarisation pour déterminer :

* $B_{\max}$ nombre de sites récepteurs total ou capacité fixatrice.
* $R_0$ concentration de récepteurs (en Mol).
* $N = \frac{B_{\max}}{[R]}$ nombre de sites par mol.

On a $\frac{[RL]}{[L]} = \frac{- 1}{K_d}[RL] + \frac{R_0}{K_d}$

En ordonné, on a la quantité de ligand liée par rapport à celle libre.

Les points remarquables obtenus sont :

* Pour $[RL] = 0$, on a $y = B_{max}$
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
