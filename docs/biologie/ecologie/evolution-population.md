
!!! note
    $y' = f(t, y)$ est équivalent à $y'(t) = f(t, y(t))$.

## Déterminer les solutions

Déterminer la solution sans connaitre la solution explicite.

L'idée consiste à déterminer les propriétés de la fonction solution d'une équation différentielle $y'(t) = f(t, y_0)$.

### Fonction constante

Si la fonction est constante alors la dérivée est nulle.

!!! note
    Cela revient à chercher les populations initiales pour lequel l'effectif ne varie pas dans le temps.

#### Équilibre (ou état stationnaire)

L'équilibre est l'ensemble des solutions telles que $F(y) \equiv C$ où $C$ est une constante. Cela revient à trouver les solutions telles que $F'(y) = f(y) = 0$.

$C$ est un équilibre stable ou attractif (par opposition instable ou répulsif) si $f'(C) \lt 0$. Cela signifie que toutes fonctions solutions convergent vers la solution $C$.

## Déterminer les variations

On étudie les variations de la dérivée notamment les valeurs pour lesquelles elle s'annule : $f'(y) = 0$ càd les valeurs où la fonction change de variation.

!!! note
    Les valeurs correspondent également aux maximums et minimums locaux.

Pour rappel, $f'(y) \lt 0$ la fonction est décroissante sinon elle est croissante.

### Le champ des tangentes

On trace les tangentes pour avoir une idée des solutions. La pente correspond à la valeur de la dérivée.

### Déterminer les variations de la fonction à court terme

Il suffit de calculer $y'(0) = f(0, y_0)$

Si $y'(0) \gt 0$ alors les solutions sont croissantes au voisinage de $0$.


## Déterminer la solution sans connaitre la solution explicite

Soit un système à deux équations dépendantes de t dont la solution n'est pas explicite :

$$\begin{cases} x' = f(x,y) \\ y' = g(x,y) \end{cases}$$

### Déterminer les équilibres

Les équilibres correspondent à des points pour lesquelles au moins une des populations n'évolue plus.

__Isocline__ courbe au long de laquelle les courbes solutions d'une équation différentielle ont la même pente.

Pour les trouver, on cherche tels que les dérivées soient nulles.

$$\begin{cases} x' = f(x,y) = 0 \\ y' = g(x,y) = 0 \end{cases}$$

!!! note
    Le calcul des équilibres revient à déterminer l'intersection de droites. Il faut pour cela résoudre un système à deux équations.

On peut calculer les vecteurs situés sur ces droites pour avoir une idée de la façon dont les solutions se comporte à leur proximité. Les vecteurs :

* $x' = 0$ sont horizontaux.
* $y' = 0$ sont verticaux.

Généralement, on ne s'intéresse qu'aux points où aucune des populations n'est nul càd où les équilibres sont $\gt 0$. On désigne généralement ce point $P = (p;\ q)$.

#### Comportement au voisinage des équilibres

Dérivé partielle : Une dérivée partielle est une fonction qui dépend de plusieurs variables pour laquelle on calcule la dérivée en fonction d'une seule variable. Les autres étant considérées comme des constantes. Elle est notée : $\frac{\partial f}{\partial x}$.

Soit P un équilibre du système avec $p$ et $q$ des isoclines du système $\gt 0$.

$$\begin{cases} x' = \frac{\partial f}{\partial x}(p;\ q) \cdot (x - p) + \frac{\partial f}{\partial y}(p;q) \cdot (y - q) \\ y' = \frac{\partial g}{\partial x}(p;q) \cdot (x - p) + \frac{\partial g}{\partial y}(p;q) \cdot (y - q) \end{cases}$$

On définit la matrice jacobienne :

$$A(p;q) = \begin{matrix}
\frac{\partial f}{\partial x}(p;q) & \frac{\partial f}{\partial y}(p;q) \\
\frac{\partial g}{\partial x}(p;q) & \frac{\partial g}{\partial y}(p;q) \\
\end{matrix}$$

Soit une matrice carrée $\begin{bmatrix}
a & b \\
c & d \\
\end{bmatrix}$ . On définit :

* $\mathbf{tr}(A) = a + d$ la trace comme la somme des termes en diagonale.
* $\det(A) = a \cdot d - b \cdot c$ le déterminant.

| Condition                            | Type          | Comportement                                      |
|------------------------|-------------|-----------------------------------|
| $\det(A) \lt 0$                      | Col           | S'en approche puis s'en éloigne.                  |
| $0 < \det(A)$ et $\mathbf{tr}(A) = 0$          | Centre        | Oscille de façon périodique autour de l'équilibre |
| $0 < \frac{ \mathbf{tr}(A)^2}{4} < \det(A)$ | Foyer         | Tend ou s'éloigne du nœud avec oscillation.       |
| $0 \lt \det(A) \lt \frac{\mathbf{tr}(A)^2}{4}$ | Nœud          | Tend ou s'éloigne du nœud sans oscillation.       |
| $0 \lt \det(A) = \frac{\mathbf{tr}(A)^2}{4}$ | Nœud dégénéré |                                                   |

Si $\mathbf{tr}(A) > 0$ alors instable ou répulsif sinon, si $\mathbf{tr}(A) < 0$ alors stable ou attractif.

#### Tracer l'allure des fonctions x(t) et y(t)

Grace à la représentation du champ des tangentes, on est capable de tracer l'allure générale des fonctions $x(t)$ et $y(t)$.

La valeur de $t$ est déduite du sens des tangentes. La pente est déduite de

### Courbe de niveau

!!! note
    Si deux vecteurs sont perpendiculaires alors le produit scalaire est nul : $\vec{u} \cdot \vec{v} = x_1 \cdot x_2 + y_1 \cdot y_2$

Soit $h(x, y) = k$ est une fonction à deux variables et un point dans le plan $(p,q)$

On détermine k en calculant $h(p,\ q) = k$

Le vecteur gradient $gradh(p,q) = (\frac{\partial h}{\partial x}(p,q),\frac{\partial h}{\partial y}(p,q))$

Il est perpendiculaire à la courbe et dirigé dans le sens des niveaux croissants.

#### Loi de conservation

$h(x,y)$ est une loi de conservation si les trajectoires des solutions sont exactement les courbes de niveau.

!!! note
    Point méthode : on calcule $gradh$ *et* on vérifie que le produit scalaire est nul.

Le vecteur $\vec{v} = ( - \frac{\partial h}{\partial y}(p;q);\ \frac{\partial h}{\partial x}(p;q))$
en $(p;q)$ est la tangente à la courbe de niveau.

!!! example
    Pour le modèle de Lorka, on a $H(x,y) = \alpha _1 \cdot \ln y - \beta _1 \cdot y + \alpha _2 \cdot \ln x - \beta _2 \cdot x$ est une loi de conservation.

###### a ajouter

#### Champs des tangentes (voir dessus)

Calculer le coefficient directeur des tangentes à $t = 0$ pour plusieurs populations initiales différentes càd les vecteurs $(S'(0); R'(0))$.

#### Les équilibres

De la même manière que précédemment, on étudie les solutions d'équilibre càd valeurs où les deux dérivées s'annulent c'est-à-dire où les vecteurs sont un point. Dans le cas

-----------------------------------

## Les modèles

### Sans intéraction

#### Modèle de Malthus 

##### Simple

La quantité $x$ à un instant $t$ dépend proportionnellement de celle qui se trouvait avant. Le principal défaut de ce modèle est que pour les grandes valeurs, il tend vers l'infini ce qui impossible dans le monde réel et fini dans lequel on vit. Il fonctionne plutôt bien pour des petites valeurs.

$$x'(t) = r \cdot x(t)$$

Avec $r$ est le taux de croissance/décroissance.

Les solutions sont du type $x(t) = x_0 \cdot e^{r \cdot t}$ avec $x_0$ est la condition initiale.

##### Avec coefficient de latence

$$y' = r \cdot y \cdot (1 - e^{- \alpha  \cdot t})$$

Avec : 

* $\alpha \gt 0$ le coefficient de latence.
* $r \gt 0$ Taux de croissance.

La solution est du type $y(t) = y_0 \cdot e^{r \cdot t} \cdot e^{\frac{r}{\alpha} \cdot (e^{- \alpha \cdot t} - 1)}$

!!! note 
    Lorsque :

    * $t$ est petit $y' = 0$ et $y = y_0$.
    * $t$ est grand, on se ramène au modèle de Malthus.

#### Modèle logistique

##### Simple

$$N'(t) = r \cdot N(t) \cdot (1 - \frac{N(t)}{K})$$

Avec :

* $K$ la capacité biotique.
* $r \gt 0$ le taux de croissance intrinsèque.

La solution est du type : $N(t) = \frac{K}{1 + ( \frac{K}{N_0} - 1 ) \cdot e^{- r \cdot t}}$

##### Avec population critique

(effet Allée)

$$N' = r \cdot N \cdot (1 - \frac{N}{K}) \cdot \frac{N - A}{K}$$

!!! note
    La fonction décroit lorsque l'effectif est inférieur à l'effectif critique $A$.

### Avec interactions

#### Proie-prédateur

##### Basé sur Malthus

Modèle proie prédateur basé sur celui de Malthus (modèle de Lotka-Volterra)

Par exemple dans le cas d'une population de sardines et de requins :

$$\begin{cases} S'(t) = \alpha _1 \cdot s(t) − \beta _1 \cdot s(t) \cdot R(t) \\ R′(t) = − \alpha _2 \cdot s(t) + \beta _2 \cdot s(t) \cdot R(t) \end{cases}$$

Avec :

* $\alpha _1,\ \alpha _2 \gt 0$ les taux de croissance.
* $\beta _1,\ \beta _2 \gt 0$ coefficient exprimant l’influence des rencontres.

Aucune solution évidente.

Les équilibre sont :

* $(0; 0)$
* $( \frac{\alpha _2}{\beta _2}; \frac{\alpha _1}{\beta _1})$

##### Basé sur logistique

$$\begin{cases} S'(t) = \alpha _1 \cdot S \cdot ( 1 - \frac{S}{K} ) - \beta _1 \cdot S \cdot R \\ R'(t) = - \alpha _2 \cdot R + \beta _2 \cdot S \cdot R \end{cases}$$

Les équilibres sont :

* $(0; 0)$
* $( \frac{\alpha _2}{\beta _2}; \frac{\alpha _1}{\beta _1} )$
* $(\frac{\alpha _2}{\beta _2}; \frac{\alpha _1}{\beta _1} \cdot (1 - \frac{\frac{\alpha _2}{\beta _2}}{K}) )$

!!! note
    A l'équilibre, $R_{eq} \lt \frac{\alpha _1}{\beta _1}$ les proies se multiplient moins vite.

## Autres modèles

### Modèle compétitif

Deux espèces sont en compétition pour la nourriture.

$$\begin{cases} x' = \alpha _1 \cdot x \cdot (1 - \frac{x}{K_1}) - \beta _1 \cdot \frac{\alpha _1}{K _1} \cdot x \cdot y = \alpha _1 \cdot x (1 - \frac{x}{K_1} - \beta _1 \cdot \frac{y}{K_1}) \\ y' = \alpha _2 \cdot y \cdot (1 - \frac{y}{K _2}) - \beta _2 \cdot \frac{\alpha _2}{K _2} \cdot x \cdot y = \alpha _2 \cdot x \cdot (1 - \frac{y}{K_2} - \beta _2 \cdot \frac{x}{K_2}) \end{cases}$$

Sur le long terme on aboutit à l'un de ces trois scénarios : extinction d'une ou des deux espèces, coexistence.

### Modèle pour la cinétique enzymatique

En se basant sur les données obtenues expérimentalement, on obtient un système d'équations :

$$\begin{cases} S' = - k_1 \cdot [E] \cdot [S] + k_{-1}[ES] \\ [E'] = - k_1 \cdot [E] \cdot [S] + k_{- 1} \cdot [ES] + k_2[ES] \\ [P'] = k_2 \cdot [ES] \\ [ES'] = k_1 \cdot [E] \cdot [S] - k_{-1} \cdot  [ES] - k_2 \cdot [ES] \end{cases}$$

Or on voit que $[E] + [ES'] = 0$ donc $[E'] + [ES'] = cste$.

Supposons : $[ES_0] = 0$ alors $[E] + [ES] = [E_0]$.

Alors :

$$\begin{cases} [S'] = - k_1 \cdot [E] \cdot [S] + k_{- 1} \cdot ( [E_0] - [E] ) \\ \lbrack E'\rbrack = - k_1 \cdot [E]\cdot [S]+ k_{- 1} \cdot k_2 \cdot ([E_0] - [E]) \end{cases}$$

Hypothèse : la concentration de $[ES]$ est constante $\frac{k_{-1} + k_2}{k_1} = \frac{[E] \cdot [S]}{[ES]} = K_m$.

$$[ES] = [E_0] - [E]$$

$$[ES]= \frac{[E_0]}{\frac{K_m}{[S]} + 1}$$

En particulier
$v_0 = [P']$ $(0) = k_2 \cdot \frac{[E_0]}{\frac{K_m}{[S_0]} + 1}$