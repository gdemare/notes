# Un neurone (ou perceptron)

$z = w_{1}x_{1} + w_{2}w_{2} + b$ avec $w_{i}$ les poids pour chaque
variable $x_{i}$ donné en entré au neurone. Attention, il faut les
valeurs normalisées.

On applique ensuite la fonction qui renvoie une valeur sur \[0 ;1\]

$$a(z) = \frac{1}{1 + e^{- z}}$$

## Performance du modèle

On compare la probabilité d'appartenance de la classe avec la
réalisation. Ainsi, la qualité de prédiction du modèle avec la classe
réel pouvant être y={0 ;1} : *\
*$$p(Y = y) = {a(z)}^{y} \times {(1 - a(z))}^{1 - y}$$

L'ensemble des données d'apprentissage suit une loi de Bernoulli ce qui
donne: vraisemblance.*\
*$$L = \prod_{i}^{n}{a_{i}}^{y_{i}} \times {(1 - a_{i})}^{1 - y_{i}}$$

*Elle tend vers 0 plus on a de données.*

L augmente avec la qualité de prédiction du modèle et le nombre de
données. Pour faciliter les calculs et la lecture, on applique la
fonction log qui conserve l'ordre (croissante) :

On cherche à minimiser la fonction cout noté log loss

$$L = - \frac{1}{m}\sum_{i = 1}^{}y_{i}.log(a_{i}) + (1 - y).log(1 - a_{i})$$

On applique :

-   une pondération m (nbre de données) pour que la qualité ne dépende
    pas du nombre de données.

-   un signe --

## Calcul des poids

L'optimisation du modèle passe par l'ajustement des poids. On cherche à
minimiser le log L

Cela passe par le calcul du gradient cad des dérivés partielles.

$w_{i + 1} = w_{i} - \alpha\frac{\partial L}{\partial w_{i}}$ avec
$\alpha$ un pas d'apprentissage.

$\frac{\partial L}{\partial w_{i}} = \frac{1}{m}X^{T}.(A - y)$ où avec X
la matrice chaque ligne correspond aux valeurs d'une variable
$X = \begin{matrix}
x_{1} & x_{2} & x_{3} \\
 & & \\
\end{matrix}$

Avec A la matrice colonne des $a_{i}$

$$b = b - \alpha\frac{\partial L}{\partial b}$$

$$\frac{\partial L}{\partial b} = \frac{1}{m}\sum_{}^{}{(A - y)}$$

# Réseau de neurones
