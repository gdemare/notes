[[enzyme]]

!!! note
	La cinétique càd les réactions sans enzymes sont présentes dans la partie chimie.

__Etat de saturation__ toutes les enzymes sont liées aux substrats.

__Etat stationnaire__ la quantité d'enzymes liées et non liées est constante.

!!! note
	L'état stationnaire caractérise un intermédiaire réactionnel.

### Réaction chimique avec catalyseur enzymatique

L'enzyme forme un complexe avec le substrat avec des liaisons :

* hydrogène
* Van der Val
$$[E] + [S] \rightleftarrows [ES] \rightarrow [E] + [P]$$

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

#### Modèle de Michaelis-Menten

Le modèle de Michealis-Menten suppose un l’état stationnaire. La proportion du complexe lié reste constante au cours de la réaction, c’est-à-dire que le taux de formation du complexe $[ES]$ est égal à son taux de dissociation.
On considère $k_{cat} \ll k_{-1}$ tel que $K_m = \frac{[E] \cdot [S]}{[ES]} = \frac{k_{- 1} + k_{cat}}{k_1}$ avec $K_m$ constante d'état stationnaire en $mol \cdot L^{-1}$

Pour déterminer la vitesse, car on est incapable de mesurer la concentration de $[ES]$. L'astuce de Michaelis-Menten consiste à écrire $v = k_2 \cdot [ES] \cdot \frac{[E_0]}{[E_0]}$ et d'exprimer $[E_0]$ en fonction de $[ES]$ :

* $[E_0] = [E] + [ES]$
* $[E] = K_m \cdot \frac{[ES]}{[S]}$

On obtient alors pour la vitesse (équation de)
$$v = \frac{k_{cat} \cdot [E_0] \cdot [S]}{K_m + [S]}$$
Avec :
- $K_m$ la concentration de substrat pour laquelle $v_0$ atteint la moitié de $V_{max}$​.

On peut déduire de l'équation :

* La vitesse maximum $v_{max}$. La quantité de substrat qui tend vers l’infini. On a alors $K_m \ll [S]$ d’où $v_{max} = \lim_{x \to \infty} {v} = k_{cat} \cdot [E_0]$. On a alors $k_{cat} = \frac{v_{max}}{[E_0]}$ ainsi l'équation de Micheal-Menden peut s'écrire $v = \frac{v_{max}[S]}{K_m + [S]}$.
* Efficacité de l’enzyme. Plus la vitesse est grande, plus $k_{cat}$ est grand.
* L'affinité (reconnaissance entre l'enzyme et le substrat) correspond à la proportion $\frac{[E]}{[ES]}$. Plus elle est élevée et plus $\frac{[E]}{[ES]}$ est petit d’où $K_m = \frac{[E]}{[ES]} \cdot [S]$ est petit.

!!! note
	Pour $[S] = K_m$, on a également $v = \frac{1}{2} \cdot v_{\max}$.

!!! note
	$v_{max}$ est atteinte lorsque tous les sites actifs des enzymes sont occupés. On dit alors que la solution est saturée en substrat. Cette situation est appelée état de saturation.

!!! note
	L'absorbance est reliée à la concentration par $A = \epsilon \cdot [C] \cdot l$.

##### Linéarisation (transformation de Lineweaver-Burk)

La vitesse peut être facilement linéarisée en posant : $\frac{1}{v} = f(\frac{1}{[S]})$ noté $y = f(x)$.
$$\frac{1}{v} = \frac{K_m}{v_{max}} \cdot \frac{1}{[S]} + \frac{1}{v_{max}}$$

On a remarque que :

* $x = 0 \rightarrow y = \frac{1}{v_{\max}}$. L'intersection à l'ordonnée.
* $y = 0 \rightarrow x = - K_m$. l'intersection à l'absisse ou sinon 

!!! notes Point méthode
	Pour savoir si la réaction enzymatique de type Michaelis-Menten, on vérifie que $f( \frac{1}{[S]} ) = \frac{1}{[P]}$ est une droite.
	On peut alors déterminer les constantes $v_{max}$ et $K_m$ d’après le graphique.
#### Modèle de Briggs-Haldane

Le modèle de Briggs-Haldane suppose que $[ES] = c$ avec $c$ une constante.

$$v = \frac{k_{cat} \cdot [E_0] \cdot [S]}{K_m + [S]}$$
### Inhibiteur

Les inhibiteurs permettent à la cellule de contrôler la vitesse de réaction pour s'adapter à ses besoins métaboliques en modulant l'activité enzymatique.

Les inhibiteurs peuvent se lier à l'enzyme :

* fortement ou faiblement (niveaux d'affinité).
* temporairement ou irréversiblement.

!!! note
	Une partie des toxines et des poisons agissent comme des inhibiteurs.

Il existe deux grands types d'inhibition :

|                              | Compétitive                        | Non compétitive                                                     |
| ---------------------------- | ---------------------------------- | ------------------------------------------------------------------- |
| Site bloqué par l'inhibiteur | Reconnaissance                     | Catalyse                                                            |
| Modifie                      | Équilibre entre enzyme et substrat | Efficacité de l'enzyme                                              |
| Affinité enzyme-inhibiteur   | $K_i = \frac{[E] \cdot [I]}{[EI]}$ | $K_{i} = \frac{[E] \cdot [I]}{[EI]} = \frac{[ES] \cdot [I]}{[ESI]}$ |
| $E_{0} =$                    | $[E] + [EI] + [ES]$                | $[E] + [EI] + [EIS] + [ES]$                                         |
| Remarque                     | $v_{\max}$ ne change pas           | $K_m$ ne change pas                                                 |

!!! note
	Il existe d'autres inhibiteurs hybrides.
#### Compétitif

L'inhibiteur compétitif se lie sur le site réactionnel de l'enzyme à la place d'un substrat. Cela se traduit par une diminution de l'affinité du substrat avec l'enzyme.

$$v_i = \frac{v_{\max} \cdot [S]}{K_m \cdot (1 + \frac{[i]}{K_i}) + [S]} = \frac{v_{\max} \cdot [S]}{K_{mI} + [S]}$$

!!! note
	On modifie la reconnaissance $K_m \lt K'_m = K_m \cdot (1 + \frac{[i]}{K_i})$

La constante d'inhibition :

$K_i = \frac{K_m \cdot [I]}{K_{mI} - K_m}$ avec $K_i$ est la quantité d'inhibiteurs nécessaire pour complétement arrêter la réaction. L'inhibition peut être levée en ajoutant du substrat.
#### Non compétitif

$v_{maxI} = \frac{v_{\max}}{1 + \frac{[i]}{K_i}}$

!!! note
	L'inhibiteur rend l'enzyme moins efficace (efficacité catalytique) ($v_{\max}$ plus petit).

$v_i = \frac{v_{\max}}{1 + \frac{[i]}{K_i}} \cdot \frac{[S]}{K_m + [S]} = \frac{v_{\max I} \cdot [S]}{K_m + [S]}$

$K_i = \frac{v_{\max I} \cdot [I]}{v_{\max} - v_{\max I}}$
