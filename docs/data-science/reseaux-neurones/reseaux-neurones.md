## Concept

Mathématiquement, cette méthode permet d'approcher n'importe quelle fonction.

Le modèle est constitué de plusieurs couches formées de plusieurs neurones. Les couches sont disposées de tel sorte que les données sont transmises vers celle en avale. On distingue les couches :

Une entrée                           | Une ou plusieurs cachées      | Une couche de sortie
-------------------------------------|-------------------------------|---------------------
Recoit les données brutes en entrée  | des couches intermédiaires    | une couche qui génére la probabilité d'appartenance à la classe

Les connexions entre les neurones sont appelées synapses. Il en existe de deux types de synapses : 

* inhibiteur
* excitateur

Si un neurone pré et post synaptique s'excitent ensemble alors ils renforceront leur lien càd le poid synaptique de la synapse qui les relie.

Chaque neurone applique une fonction à la donnée qu'il recoit en entrée. On utilise principalement trois fonctions :

* Sigmoïde $f(x) = \frac{1}{1 + e^{-x}}$
* Unité de rectification linéaire douce. $f(x)= \ln(1+e^{x})$

!!! note
    Il existe aussi des fonctions discontinues mais elles posent des problèmes d'optimisation car elles ne sont pas dérivables.

!!! example

    * Marche ou heaviside, $x<0$ alors $f(x)=0$ et $x>=0$ alors $f(x)=1$.
    * Unité de rectification linéaire $f(x)=0$ si $x<0$ et $f(x)=x$ si $x>=0$ (appelé relu).
    * tanh fonction qui ressemble à la sigmoid en plus "typée" sur un intervalle de -1 à 1. 

!!! note
    Il existe la fonction softmax qui renvoie la classe avec la plus grande valeur (càd avec la plus grande probabilité). Elle sert notamment à renvoyer avec plus grande valeur dans le cas d'une classifciation avec plus de deux classes.

Pour faciliter les opérations, les données sont manipulées et transformées dans un objet mathématique appelé matrice.
En général, cnn puis activation puis pooling.

La fonction max pooling réduit la dimension de la matrice d'activation (activation map) en conservant la valeur maximum sur les régions. Cela permet de réduire l'impact de petits changements qui pourrait se produire dans l'image.

#### Rétropropagation et modification des coefficients

Les coefficients sont ajustés par la descente de gradients stochastiques. Les coefficients sont choisis aléatoirement (stochastiques) et ajustés lorsque le modèle se trompe. L'ajustement se fait en étudiant le sens de variation de chaque neurone qui est déterminé par le calcul de la dérivé partielle.

!!! note
    D'où l'utilité d'avoir des fonctions dérivables.

## Paramètres

Avantages                       | Inconvénients
--------------------------------|-------------------
Pas de paramètres à vérifier    | surapprentissage
Demande beaucoup de ressources  |

## Echantillonage 

Pour limiter le surapprentissage : autant d'individus de chaque classe pour la prédiction.

## Agrégation de réseaux de neurones

L'agrégation de réseaux de neurones (boosting ou bagging) n'apporte pas un gain significatif de pouvoir prédicteur. La manière même d'élaborer des réseaux de neurones conduit souvent à des poids et des réseaux quasi identiques.

## le réseau de neurones

Un réseau de neurones est un empilement de couches. Ils en existent plusieurs notamment les couches :

* Base.
* Convulsives inspirées de la vision chez les mammifères.
* Pooling qui compresse l'information. Elle est utile notamment après l'utilisation d'une couches convulsives pour ne garder que l'information pertinente. Il en existe deux types : max et moyenne.
* récurrentes adaptées au traitement textuel. Elle garde en mémoire l'ordre notamment celui des mots. 
* Normalisation
* Régularisation complexifie le modèle en créant un bruit aléatoire (Dropout qui met des 0). Contribue a rendre le modèle plus performant et moins sensible au bruit.

### convergeance des poids vers les valeurs optimum 

L'initialisation des poids peut avoir des répercussions importantes sur le modèle.

Pour limiter l'impact des variables, les données sont standarisés avant d'être utilisée : on soustrait par la moyenne et on divise par l'écart type.

Ensemble de méthodes qui permettent aux poids de converger plus rapidement vers les optimum.

Mommentum des poids d'apprentissage permet d'éviter certains minimums locaux trop petit.

### Entrainement du réseau de neurones

Créer des lots de fichiers (batch) qui seront soumis plusieurs fois au modèle.

## Les images : Augmenter le nombre de données et la polyvalence du modèle

Générer un jeu de données d'apprentissage à partir d'un dosssier. Les images créées par des transformations sont ajoutés aux jeux de données (training, validation) tels que :

* Rotations
* Cisaillement
* Changements d'échelle
* Rotation de l'image
* Zoom

## Bibliothèques

Il existe principalement deux bibliothéques pour faire de l'apprentissage profond.

Library             | Développer    | Avantages
--------------------|---------------|---------------
`torch` pytorch     | Méta          | Beaucoup plus flexible et personalisable
`tensorflow`        | Google        | Plus simple à utiliser

## Créer un modèle

1. Créer le modèle avec les couches.
2. Compiler le modèle et définir les indicateurs à minimiser.
3. Entrainer le modèle.

## Considération mathématique d'un neurone et d'un réseau

### Un neurone (ou perceptron)

$z = w_{1}x_{1} + w_{2}w_{2} + b$ avec $w_{i}$ les poids pour chaque variable $x_{i}$ donnée en entré au neurone. Attention, il faut standariser les valeurs.

On applique ensuite la fonction qui renvoie une valeur sur $[0 ;1]$

$a(z) = \frac{1}{1 + e^{- z}}$

#### Performance du modèle

On compare la probabilité d'appartenance de la classe avec la réalisation. Ainsi, la qualité de prédiction du modèle avec la classe réelle pouvant être $y={0 ;1}$ : $p(Y = y) = {a(z)}^{y} \times {(1 - a(z))}^{1 - y}$

L'ensemble des données d'apprentissage suit une loi de Bernoulli ce qui donne: vraisemblance $L = \prod_{i}^{n}{a_{i}}^{y_{i}} \times {(1 - a_{i})}^{1 - y_{i}}$

!!! note
    Elle tend vers 0 plus on a de données.

L'augmente avec la qualité de prédiction du modèle et le nombre de données. Pour faciliter les calculs et la lecture, on applique la fonction log qui conserve l'ordre (croissante) :

On cherche à minimiser la fonction cout noté log loss $L = - \frac{1}{m}\sum_{i = 1}^{}y_{i}.log(a_{i}) + (1 - y).log(1 - a_{i})$

On applique :

* une pondération m (nbre de données) pour que la qualité ne dépende pas du nombre de données.
* un signe --

#### Calcul des poids

L'optimisation du modèle passe par l'ajustement des poids. On cherche à minimiser le log L

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

$b = b - \alpha\frac{\partial L}{\partial b}$

$\frac{\partial L}{\partial b} = \frac{1}{m}\sum_{}^{}{(A - y)}$
