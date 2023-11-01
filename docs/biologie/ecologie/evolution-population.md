## Le modèle à une variable

### Modèle de Malthus simple

La quantité x à un instant t dépend proportionnellement de celle qui se trouvait avant $x^{'}(t) = r \times x(t)$ avec :

* $r$ est le taux de croissance/décroissance.

Les solutions sont du type $x(t) = x_{0} \times e^{rt}$ avec :

* $x_{0}$ est la condition initiale.

Le principal défaut de ce modèle est que pour les grandes valeurs, il tend vers l'infini ce qui impossible dans le monde réel et fini dans lequel on vit. Il fonctionne plutôt bien pour des petites valeurs.

### Le modèle de Malthus avec coefficient de latence

!!! note
    $y^{'} = f(t,\ y)$ est équivalent à $y^{'}(t) = f\left( t,\ y(t) \right)$.

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><span
class="math display"><em>y</em>′ = <em>r</em> × <em>y</em> × (1−<em>e</em><sup>−<em>α</em><em>t</em></sup>)</span></td>
<td><p><span class="math inline"><em>α</em> &gt; 0</span> Coefficient de
latence</p>
<p><span class="math inline"><em>r</em> &gt; 0</span> Taux de
croissance</p></td>
</tr>
</tbody>
</table>

La solution est du type $y(t) = y_{0}.e^{rt}.e^{\frac{r}{\alpha}(e^{- \alpha t} - 1)}$

On remarque que lorsque :

|                 | $$\mathbf{t\ est\ petit}$$ | $$\mathbf{t\ est\ grand}$$        |
|-----------|------------------------|--------------------------------------|
| $$\mathbf{y'}$$ | $$0$$                      | On se ramène au modèle de Malthus |
| $$\mathbf{y}$$  | $$y_{0}$$                  |                                   |

## Le modèle logistique

<table>
<colgroup>
<col style="width: 40%" />
<col style="width: 59%" />
</colgroup>
<tbody>
<tr class="odd">
<td><span class="math display">$$N^{'}(t) = rN(t) \times (1 -
\frac{N(t)}{K})$$</span></td>
<td><p><span class="math inline"><em>K</em></span> Capacité biotique</p>
<p><span class="math inline"><em>r</em> &gt; 0</span> Taux de croissance
intrinsèque</p></td>
</tr>
</tbody>
</table>

La solution est du type :$\ N(t) = \frac{K}{1 + \left( \frac{K}{N_{0}} - 1 \right)e^{- rt}}$

## Modèle logistique avec population critique (effet Allée)

$N^{'} = rN(1 - \frac{N}{K})\frac{N - A}{K}$

La fonction décroit lorsque l'effectif est inférieur à la population critique (A).

## Déterminer la solution sans connaitre la solution explicite

L'idée consiste à déterminer les propriétés de la fonction solution
d'une équation différentielle $y'(t) = f(t,y_{0})$.

### Déterminer quand la fonction est constante

Si la fonction est constante alors la dérivée est nulle.

!!! note
    Cela revient à chercher les populations initiales pour lequel l'effectif ne varie pas dans le temps.

#### Équilibre (ou état stationnaire)

L'équilibre est l'ensemble des solutions telles que $F(y) \equiv C$ où $C$ est une constante. Cela revient à trouver les solutions telles que $F^{'}(y) = f(y) = 0$.

$C$ est un équilibre stable ou attractif (par opposition instable ou répulsif) si $f^{'}(C) < 0$. Cela signifie que toutes fonctions solutions convergent vers la solution $C$.

## Déterminer les variations de la fonction

On étudie les variations de la dérivée notamment les valeurs pour lesquelles elle s'annule : $f^{'}(y) = 0$ c'est-à-dire les valeurs où la fonction change de variation.

!!! note
    Les valeurs correspondent également aux maximums et minimums locaux.

Pour rappel, $f^{'}(y) < 0$ la fonction est décroissante sinon elle est croissante.

### Le champ des tangentes

On trace les tangentes pour avoir une idée des solutions. La pente correspond à la valeur de la dérivée.

### Déterminer les variations de la fonction à court terme

Il suffit de calculer $y'(0) = f(0,y_{0})$

Si $y^{'}(0) > 0$ alors les solutions sont croissantes au voisinage de 0.

## Modèle avec interaction

### Modèle proie prédateur basé sur celui de Malthus (modèle de Lotka-Volterra)

Par exemple dans le cas d'une population de sardines et de requins :

$S'(t) = \alpha_{1} s(t) − \beta _{1}s(t)R(t)
$R′(t) = − \alpha_{2} s(t) + \beta_{2} s(t) R(t)$
Avec :

* $\alpha _{1}, \alpha _{2} \gt 0$
les taux de croissance
* $\beta _{1}, \beta _{2} \gt 0$
coefficient exprimant l’influence des rencontres.

Aucune solution évidente.

#### Champs des tangentes (voir dessus)

Calculer le coefficient directeur des tangentes à $t = 0$ pour plusieurs populations initiales différentes (càd les vecteurs
$({S^{'}(0);R}^{'}(0))$ ).

#### Les équilibres

De la même manière que précédemment, on étudie les solutions d'équilibre c'est-à-dire valeurs où les deux dérivées s'annulent c'est-à-dire où les vecteurs sont un point. Dans le cas

* $(0;0)$
* $\left( \frac{\alpha_{2}}{\beta_{2}};\frac{\alpha_{1}}{\beta_{1}} \right)$

### Modèle proie prédateur basé sur celui logistique

$$S^{'}(t) = \alpha_{1}.S.\left( 1 - \frac{S}{K} \right) - \beta_{1}.S.R$$

$${R^{'}(t) = - \alpha}_{2}.R + \beta_{2}.S.R$$

#### Champs des tangentes (voir dessus)

#### Les équilibres

* $(0;0)$
* $\left( \frac{\alpha_{2}}{\beta_{2}};\frac{\alpha_{1}}{\beta_{1}} \right)$
* $(\frac{\alpha_{2}}{\beta_{2}};\frac{\alpha_{1}}{\beta_{1}}(1 - \frac{\frac{\alpha_{2}}{\beta_{2}}}{K})$

On remarque que $R_{eq} < \frac{\alpha_{1}}{\beta_{1}}$ les proies se multiplient moins vite.

## Déterminer la solution sans connaitre la solution explicite

Soit un système à deux équations dépendantes de t dont la solution n'est pas explicite :

$\mathbf{x}^{\mathbf{'}}\mathbf{= f}\left( \mathbf{x,y} \right)$
$\mathbf{y}^{\mathbf{'}}\mathbf{= g}\left( \mathbf{x,y} \right)$

### Déterminer les équilibres

Les équilibres correspondent à des points pour lesquelles au moins une des populations n'évolue plus.

__Isocline__ courbe au long de laquelle les courbes solutions d'une équation différentielle ont la même pente.

Pour les trouver, on cherche tels que les dérivées soient nulles.

$\mathbf{x}^{\mathbf{'}}\mathbf{= f}\left( \mathbf{x,y} \right)\mathbf{= 0}$
$\mathbf{y}^{\mathbf{'}}\mathbf{= g}\left( \mathbf{x,y} \right)\mathbf{= 0}$

!!! note
    Le calcul des équilibres revient à déterminer l'intersection de droites. Il faut pour cela résoudre un système à deux équations.

On peut calculer les vecteurs situés sur ces droites pour avoir une idée de la façon dont les solutions se comporte à leur proximité. Les vecteurs :

* $x^{'} = 0$ sont horizontaux.
* $y^{'} = 0$ sont verticaux. |

Généralement, on ne s'intéresse qu'aux points où aucune des populations n'est nul càd où les équilibres sont \>0. On désigne généralement ce point $P = (p;q)$.

#### Comportement au voisinage des équilibres

Dérivé partielle : Une dérivée partielle est une fonction qui dépend de plusieurs variables pour laquelle on calcule la dérivée en fonction d'une seule variable. Les autres étant considérées comme des constantes. Elle est notée : $\frac{\partial f}{\partial x}$.

Soit P un équilibre du système avec p et q des isoclines du système $\gt 0$.

$$x^{'} = \frac{\partial f}{\partial x}(p;q)(x - p) + \frac{\partial f}{\partial y}(p;q)(y - q)$$

$$y^{'} = \frac{\partial g}{\partial x}(p;q)(x - p) + \frac{\partial g}{\partial y}(p;q)(y - q)$$

On définit la matrice jacobienne :

$$A(p;q) = \begin{matrix}
\frac{\partial f}{\partial x}(p;q) & \frac{\partial f}{\partial y}(p;q) \\
\frac{\partial g}{\partial x}(p;q) & \frac{\partial g}{\partial y}(p;q) \\
\end{matrix}$$

Soit une matrice carrée $\begin{matrix}
a & b \\
c & d \\
\end{matrix}$ . On définit :

* $tr(A) = a + d$ la trace comme la somme des termes en diagonale.
* $\det(A) = ad - bc$ le déterminant.

| Condition                            | Type          | Comportement                                      |
|------------------------|-------------|-----------------------------------|
| $$\det(A) < 0$$                      | Col           | S'en approche puis s'en éloigne.                  |
| $0 < det(A)$ et $tr(A) = 0$          | Centre        | Oscille de façon périodique autour de l'équilibre |
| $$0 < \frac{tr(A)^{2}}{4} < det(A)$$ | Foyer         | Tend ou s'éloigne du nœud avec oscillation.       |
| $$0 < det(A) < \frac{tr(A)^{2}}{4}$$ | Nœud          | Tend ou s'éloigne du nœud sans oscillation.       |
| $$0 < det(A) = \frac{tr(A)^{2}}{4}$$ | Nœud dégénéré |                                                   |

Si $\mathbf{tr}(A) > 0$ instable ou répulsif $\mathbf{tr}(A) < 0$ stable ou attractif.

#### Tracer l'allure des fonctions x(t) et y(t)

Grace à la représentation du champ des tangentes, on est capable de
tracer l'allure générale des fonctions $x(t)$ et $y(t)$.

La valeur de t est déduite du sens des tangentes. La pente est déduite de

### Courbe de niveau

!!! note
    Si deux vecteurs sont perpendiculaires alors le produit scalaire est nul : $u.v = x_{1}x_{2} + y_{1}y_{2}$

Soit $h(x,y) = k$ est une fonction à deux variables et un point dans le plan $(p,q)$

On détermine k en calculant $h(p,q) = k$

Le vecteur gradient $gradh(p,q) = (\frac{\partial h}{\partial x}(p,q),\frac{\partial h}{\partial y}(p,q))$

Il est perpendiculaire à la courbe et dirigé dans le sens des niveaux croissants.

#### Loi de conservation

$h(x,y)$ est une loi de conservation si les trajectoires des solutions sont exactement les courbes de niveau.

!!! note
    Point méthode : on calcule $\mathbf{gradh}$ *et* on vérifie que le produit scalaire est nul.

Le vecteur $V = ( - \frac{\partial h}{\partial y}(p;q);\frac{\partial h}{\partial x}(p;q))$
en $(p;q)$ est la tangente à la courbe de niveau.

!!! example
    Pour le modèle de Lorka, on a $H(x,y) = \alpha_{1}\ln y - \beta_{1}y + \alpha_{2}\ln x - \beta_{2}x$ est une loi de conservation.

### Quelques modèles supplémentaires

#### Modèle compétitif

Deux espèces sont en compétition pour la nourriture.

$$
{\mathbf{x}^{\mathbf{'}}\mathbf{=}\alpha_{1}x\left( 1 - \frac{x}{K_{1}} \right) - \beta_{1}\frac{\alpha_{1}}{K_{1}}xy = \alpha_{1}x\ (1 - \frac{x}{K_{1}} - \beta_{1}\frac{y}{K_{1}})}$$

$$\mathbf{y}^{\mathbf{'}}\mathbf{=}\alpha_{2}y\left( 1 - \frac{y}{K_{2}} \right) - \beta_{2}\frac{\alpha_{2}}{K_{2}}xy = \alpha_{2}x\ (1 - \frac{y}{K_{2}} - \beta_{2}\frac{x}{K_{2}})$$

Sur le long terme on aboutit à l'un de ces trois scénarios : extinction d'une ou des deux espèces, coexistence.

### Modèle pour la cinétique enzymatique

En se basant sur les données obtenues expérimentalement, on obtient un système d'équations :

$$\lbrack S'\rbrack = - k_{1}\lbrack E\rbrack\lbrack S\rbrack + k_{- 1}\lbrack ES\rbrack$$

$$\lbrack E'\rbrack = - k_{1}\lbrack E\rbrack\lbrack S\rbrack + k_{- 1}\lbrack ES\rbrack + k_{2}\lbrack ES\rbrack$$

$$\lbrack P'\rbrack = k_{2}\lbrack ES\rbrack$$

$$\lbrack ES'\rbrack = k_{1}\lbrack E\rbrack\lbrack S\rbrack - k_{- 1}\lbrack ES\rbrack - k_{2}\lbrack ES\rbrack$$

Or on voit que $\lbrack E\rbrack + \lbrack ES'\rbrack = 0$ donc
$\lbrack E'\rbrack + \lbrack ES'\rbrack = cste$

Supposons : $\left\lbrack {ES}_{0} \right\rbrack = 0$ alors
$\lbrack E\rbrack + \lbrack ES\rbrack = \left\lbrack E_{0} \right\rbrack$

Alors :

$\lbrack S'\rbrack = - k_{1}\lbrack E\rbrack\lbrack S\rbrack + k_{- 1}(\left\lbrack E_{0} \right\rbrack - \lbrack E\rbrack)$

$$\lbrack E'\rbrack = - k_{1}\lbrack E\rbrack\lbrack S\rbrack + k_{- 1}.k_{2}(\left\lbrack E_{0} \right\rbrack - \lbrack E\rbrack)$$

Hypothèse : la concentration de $\lbrack ES\rbrack$ est constante.$\ \frac{k_{- 1} + k_{2}}{k_{1}} = \frac{\lbrack E\rbrack\lbrack S\rbrack}{\lbrack ES\rbrack} = K_{m}$

$$\lbrack ES\rbrack = \left\lbrack E_{0} \right\rbrack - \lbrack E\rbrack$$

$$\lbrack ES\rbrack = \frac{\lbrack E_{0}\rbrack}{\frac{K_{M}}{\lbrack S\rbrack} + 1}$$

En particulier
$v_{0} = \left\lbrack P^{'} \right\rbrack(0) = k_{2}\frac{\lbrack E_{0}\rbrack}{\frac{K_{M}}{\lbrack S_{0}\rbrack} + 1}$