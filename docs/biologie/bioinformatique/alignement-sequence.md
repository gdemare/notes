### Vocabulaire 

__covariation__ deux positions qui sont liées et qui dépendent l'une de l'autre.

__Domaine__

__Fragment__ 

__Motif__

__Mutation ponctuelle acceptée__ mutation d'aa qui n'ont pas affecté la fonction de la protéine.

__Région__ partie d'une séquence qui 

__Signature__ séquence commune à une famille de protéines ou de gènes.

## Base de données

Principales bases de données :

Séquences :
    
* Pour les gènes : GenBank (américain), EMBL-EBI (européen), DDBJ (Japon). 
* Les génomes GOLD.
* Pour les protéines : Uniprot.

Structres des acides nucléiques et des protéines :
    
* Protéines Data Bank

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

## Aligner des séquences

Il existe deux types d'alignements :

* Globaux sont plus fréquemment utilisés lorsque les séquences mises en jeu sont identiques et de taille égale. Ce type de méthodes est plutôt utilsier pour les séquences homologues avec une région similaire. Un des algorithmes couramment utilisé est l'algorithme de Needleman-Wunsch. Il est basée sur la programmation dynamique.
* Locaux sont plus fréquemment utilisés lorsque deux séquences dissemblables sont soupçonnées de posséder des motifs identiques malgré l'environnement. Ils sert principalement à comparer des séquences avec des motifs commumns analogues. L'algorithme de Smith-Waterman est une méthode d'alignement local générale basée aussi sur la programmation dynamique.

__Alignement multiples__ aligner plusieurs séquences permet notamment d'identifier des motifs communes à plusieurs séquences.

!!! note
    Avec des séquences suffisamment semblables, il n'y aucune différence dans les résultats.

Il faut : 

* Maximiser les identités càd les commune entre deux séquences.
* Minimiser les substituions ($y$), insertions ($z$), délétions ($z$) et les gaps.

Le principe de l'alignement consiste associé à l'alignement entre deux séquences une fonction soit :

* coût qu'il faut minimiser. Exemple, $\omega \times y + \omega \times z$ avec $x$ nbre de correspondances, $y$ de substitutions, $z$ nbre de gap.
* score qu'il faut maximiser. Exemple : $\frac{(n + m)}{2} - x = y + \frac{1}{2}z$

!!! note
    Cela revient à procéder en deux étapes, choisir :

    1. Le type d'alignement.
    2. Le critère de comparaion pour trier les alignements.

!!! note
    La différence entre ces deux types de méthodes est que les gaps et les extensions de gaps sont pénalisés différemment.

Plusieurs indicateurs permettent de caractériser un alignement : 

* __% d'identité__ % de bases identiques avec la même position.
* __% de similitudes__ nbre d'acides aminées alignée.
* __% gap__ % de trous dans la séquence.

!!! example 
    Alignement global entre deux séquences : le dot plot.
        Lecture en diagonal, permet d'idnetifier les l'alignement qui offre le plus de ressemblance.
        reprére des diagonales d'identités poids présents dan 
        Pour identifier l'alignement le plus intéressants, il faut identifier un chemin qui maximise le nombre de points.

!!! note 
    Généralement, le poids des gaps successifs est décroissants. Autrement dit, les séquences avec de nombreux gap sont plus pénalisés que celle avec de grands gaps.

#### Calcul de p-valeur de score

Pour le calcul de p-valeur de score, il est préférable d'utiliser la loi de Gumbel à la normale. Cette première est possède une disymétrie à droite. Elle considére qu'il est plus probable que des valeurs extrêmes se situent dans le maximum. 

La formule de la fonction de densité de Gumbel est $F(x) = e^{-e(-x)}$.

### Choix de l'alignement

1. On construit un tableau et compte le nombre d'identités, de substitution et de délétion.
2. On choisie une fonction coût ou score.

* Algorithme exact distance Fonction cout et on dresse une matrice 

### Alignement de deux séquences

* Dotplot en utilisant une matrice avec un point quand les bases sont identiques et on les relie en diagonale.
* Algorithme "exact" alignement global minimum
* Algorithme "exact" : Programmation dynamique

### BLAST : Basic Local Alignment Search Tool

Plusiseurs algorithmes permet de trouver des séquences :

* BLOSUM BLOcks SUbstitution Matrix
* PAM Point Accepted Mutations point de vue évolutif avec l'hypothétique des mutation se sont produites

!!! note
    PAM70 le chiffre correspond % identité entre deux bloques (sous séquence).

Plusieurs paramètres :

* `E-threshold (expectation)` probabilité que la correspondance obtenu soit dûe à l'aléatoire. Augmenter le E pour détecter de faible similarité ou des régions courtes  0.1 and 10 sont douteuse et supérieur à 10. Probabilité de trouver une similarité au hasard. 1 correspond à 1/100.
* `Gapped` permet les interstice entre deux parties.
* `Hits` nbre maximum de retours.
* `word size 3` nbre minimum d'unités identitiques exacts entre les deux séquences.
 
!!! note
    diminuer le nombre de word size permet de détexcter des séquences homologues mais aussi la fragmeentaiton. augmenter trouver des régions communes.
 

## Aligné et étudier plusieurs séquences 

### Profil ou matrice consensus

Matrice des positions qui contient la fréquence possible pour dans les divers possibilités.

Utilités :

* Constuire des matrices scores (type PAM ou BLOSUM).
* Construire des matrices profils qui servent à la détection :

    * D'homologues plus lointain.
    * De motifs.
    * Prédiction de structures.

* Détecter les séquences conservés (ayant par exemple un rôle ou une strucutre importante).
* Construire des arbres phylogénétiques.

### Matrice des distances

### Nbre de différences

Les séquences sont comparées deux à deux pour construire la matrice des différences : $\frac{nb\ substitution}{taille\ séquence}$

!!! note
    Pour faciliter la lecture, on multiplie généralement les distances pas $10^3$.

### Distance génétique 

Distance génétique entre deux séquences $X$ et $Y$ est $d(X, Y) = 2 \cdot u \cdot t$ avec :

* $u$ le taux de substitution.
* $t$ le temps de divergence.

!!! note
    La distance génétique ne refète pas exactement la distance évolutive entre deux séquences car il peut y avoir un retour sur certains changements d'où l'existence de modèle évolutif.

#### Modéle évolutif moléculaire

Les modèles évolutifs 

* Processus stochastique.
* Avec taux de substitutions constant.

##### Processus stochastique

$\begin{bmatrix} x_1 \\ ... \\ x_i \end{bmatrix}_t = M \cdot \begin{bmatrix} x_1 \\ ... \\ x_i \end{bmatrix}_{t+1}$  

avec :

* $i$ le nombre d'unité (bases, acides aminées).
* $x_i$ le nombre d'occurence.
* $t$ le temps ($t$ l'anacien été et $t+1$ le nouveau).

!!! note
    La proportion dans chaque unité tend vers un état stationnaire.

##### 

Hypothèse : le taux de substitution $\alpha$ est constant au cours du temps.

La matrice de transition est $\begin{bmatrix} 1-3 \cdot \alpha &  \alpha & \alpha \\ \alpha & 1-3 \cdot \alpha & \alpha \\ \alpha & \alpha & 1-3 \cdot \alpha \end{bmatrix}$

## Phylogénie ou proximité entre des séquences

Pour des séquences qui sont homolgues ou la proximité entre des séquences, il est possible d'utiliser plusieurs algorithme pour : 

* Méthode des groupes de paires non pondérées avec moyenne arithmétique.
* Neighbor­Joining.

Le principe de consiste réunir itérativement les séquences les plus proches : 

1. Cacluler de la matrice des distances.
2. Choisir la plus petite distance et réunir les deux séquences.

### Méthode des groupes de paires non pondérées avec moyenne arithmétique (UPGMA)

La moyenne des distances la plus petite en prenant en compte le nombre d'individus dans le groupe. 


!!! warning
    Le noeud se situe à la moitié de la distance calculée et pensez à pondérer par l'effectif du groupe.

### Méthode du Neighbor ­Joining 

1. Pour chaque séquence, calculer les distances transformées $d_{i,j} - \frac{R_i + R_j}{N - 2}$ avec:

    * $R$ est le nombre du substitutions de la séquences pour la séquence i ou j avec toutes les séquences.
    * $N$ nombre total de séquences.

et sélectionner la distance minimimum. 

!!! note
    La distance transformée est uniquement utilisée pour trouver le minimum.

2. Calculer la distance entre le noeud et chaque séquence. Par exemple entre le noeud noté $u$ et $i$ : $d_{i, u} = \frac{d_{i,j}}{2} + \frac{R_i - R_j}{2 \cdot (N-2)}$.

!!! note
    La distance $d_{i,j} = d_{i,u} + d_{u,j}$

4. Calculer la nouvelle matrice de distance. La distance du noeud avec les autres points devient $d_{u,k} = \frac{d_{k,i} + d_{k,j} - d_{i,j}}{2}$

!!! note
    Il est possible d'enraciner l'arbre.

## Motif

Pour savoir si un motif détecté dans une séquence n'est pas dû au hasard, on génère des séquences aléatoires pour calculer la p valeur associée. Deux principales méthodes sont utilisées :

* Séquence aléatoire.
* Modèle de Markov. La base dépend de celle précédente. 

Soit la séquence : $x_1, x_2, x_3...x_n$

### Séquences aléatoires

1. Calculer la fréquence associée à chaque base.
2. A partir de la fréquence, générer de nouvelles séquences.

!!! note
    Le modèle aléatoire est équivalent à générer des séquences en changeant l'ordre des bases de la séquence originelle sauf que cette dernière méthode s'avère peu efficace.

#### Modèle de Markov

Les séquences sont générées à partir d'une matrice de transition qui contient les fréquences de permutations entre les bases càd que la base à ajouter dépend des bases précédentes.

Pour construire une matrice de transition. Il faut par exemple :

1. Mettre en ligne la base précédente et en colonne la base suivante.
2. Compter les effectifs.
3. Calculer les fréquences par ligne.

Si on prend en considération la succession des bases

### Choix de la méthode de génération des séquences

#### Vraissemblance

En comparant les bases par leur position : $\Sigma f_x(a) \cdot \log \mu (a)$

En comparant les bases en fonction de la base précédente $L = \log \mu _1 (x_1) + \Sigma F(T,G) \cdot \log \pi(T,G)$

Avec :

* $F_x(a)$ l'effectif de la base.
* $\mu (a)$ la fréquence estimée de la base.$\pi (T, G) = \frac{F(T,G)}{F(G)}$

#### AIC et BIC

Le choix de la méthode de génération de séquences aléatoire doit prendre en compte la complexité. Evaluer la qualité d'un modèle càad le compris entre nombre de paramètres et le modèle obtenu se fait par :

Log de vraissemblance $L = \log \mu _1$

* AIC (Akaike Information Criterion) $AIC = -2 \cdot L + 2 \cdot K$
* BIC (Bayesian Information Criterion) $BIC = K \cdot \log n - 2 \cdot \log L$

Avec :

* $n$ le nombre d'observations.
* $K$ le degré de liberté qui correspond au nombre de paramètres.

### Méthode des groupes de paires non pondérées avec moyenne arithmétique

Cette méthode suppose que le taux de substitutione est constant.

1. Calulcuer la distance entre les deux séquences.
2. 

### Autres

Matrice

### Recherche d'une sous séquence en fonction de caractéristiques

Cette méthode est utilisées pour trouver une sous séquence avec des caractéristiques particulières. Il faut définir :

* La taille de la sous-séquence cherchée $h$.
* Les caractéristiques par le score $S$. 

!!! note
    On note entre [] ce que l'on doit trouvé et \{\} pour ce qui ne contient pas (négation).

!!! example
    $S([c,g]) = 1$ et $S([a,t]) = -1$.

La séquence local du motif est celle qui maximise le score $H = \max \sum{S(X_k)}$ avec $X_k$ les séquences de taille $h$.

### Les motifs

#### Déterminer la structure d'un motif

On calcul la matrice de fréquence à partir de celle d'occurences. La conservation d'une base de la séquence à une position particulière est ainsi :

$$R_{seq} = S_{max} - S_{obs} = \log N - ( - \Sigma p_n \cdot \log p_n)$$

La différence entre l'entropie maximum et celle observé. 

!!! example
    L'entropie maximum pour une base à une position données pour une séquence d'ADN (4 bases différentes) est de 2 bits $I_j = 2 - (- A \cdot \sum_{i = 1}{f_{i, j} \cdot \log f_{i, j}})$

!!! warning
    Avoir des zéros dans la matrice d'occurence est problématique pour calculer la probabilité de présence du motif. On ajoute la fréquence des bases pour retirer les 0. 

### Recherche d'un motif dans une séquence

Pas compris, ci dessous est faux.

On utilise la matrice de score du motif et on calcule $\prod{p_{r_i}}$ fréquence des résidus à la position $i$.


Fréquence corrigé pour le calcul du score pour les séquences aléatoires $

Le motif aléatoire est $W_s = \log \frac{\sum_{f'_{i,j}}}{p_i}$
avec :

* $f'_{i,j}$
* $`p_i` la probabilité de la base.

====================================

## Quantifier une séquence

Quantifier l'ARN expectation--maximization (EM) algorithm