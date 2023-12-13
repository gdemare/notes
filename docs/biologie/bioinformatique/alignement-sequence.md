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

1. Les erreurs de lecture que ne permettent pas trouver un alignement exact.
2. La répétition de certaines séquences répétées qui peuvent être alignées à plusieurs endroits.
3. Recall above that we need to align $N=900,000,000$ reads to a length 3B genome. Therefore the naive process of scanning the entire genome for each read's match is too slow.

$C = \frac{NL}{G}$

* $G$ taille totale
* $L$ taille des fragments

Les paramètres important dans le séquençage sont :

* Read lengths, taille des fragments. 
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

### Choix de l'alignement

1. On construit un tableau et compte le nombre d'identités, de substitution et de délétion.
2. On choisie une fonction coût ou score.

* Algorithme exact distance Fonction cout et on dresse une matrice 

### Alignement de deux séquences

* Dotplot en utilisant une matrice avec un point quand les bases sont identiques et on les relie en diagonale.
* Algorithme "exact" alignement global minimum
* Algorithme “exact” : Programmation dynamique

### BLAST : Basic Local Alignment Search Tool

algorithme permet de trouver des séquences :

* BLOSUM BLOcks SUbstitution Matrix
* PAM Point Accepted Mutations point de vue évolutif avec l'hypothéque des mutation se sont produites

!!! note
    PAM70 le chiffre correspond % identité entre deux bloques (sous séquence).

Plusieurs paramètres :

* E-threshold (expectation) probabilité  le nbre de correspondances attendu dans une base aléatoire. Augmenter le E pour détecter de faible similarité ou des régions courtes  0.1 and 10 sont douteuse et supérieur à 10. Probabilité de trouver une similarité au hasard. 1 correspond à 1/100.
* Gapped permet les interstice entre deux parties.
* Hits nbre maximum de retours.
* word size 3 nbre minimum d'unité identitique exact entre les deux séquences.
 
!!! note
    diminuer le nombre de word size permet de détexcter des séquences homologues mais aussi la fragmeentaiton. augmenter trouver des régions communes.
 
## Phylogénie ou proximité entre des séquences

Pour des séquences qui sont homolgues ou la proximité entre des séquences, il est possible d'utiliser plusieurs algorithme pour : 

* 
*

### Méthode des groupes de paires non pondérées avec moyenne arithmétique (UPGMA)

###





## Motif

Pour savoir si un motif détecter dans une séquence n'est pas dû au hasard, on génére des séquences aléatoires pour calculer la p valeur associée. Deux principales méthodes sont utilisées :

* Séquence aléatoire.
* Modèle de Markov. La base dépend de celle précédente. 

Soit la séquence : $x_1x_2x_3...x_n$

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

#### Choix des séquences

##### Vraissemblance

En comparant les bases par leur position : $\Sigma f_x(a) \cdot \log \mu (a)$

En comparant les bases en fonction de la base précédente $L = \log \mu _1 (x_1) + \Sigma F(T,G) \cdot \log \pi(T,G)$

Avec :

* $F_x(a)$ l'effectif de la base.
* $\mu (a)$ la fréquence estimée de la base.$\pi (T, G) = \frac{F(T,G)}{F(G)}$

##### AIC et BIC

Le choix de la méthode de génération de séquences aléatoire doit prendre en compte la complexité. Evaluer la qualité d'un modèle càad le compris entre nombre de paramètres et le modèle obtenu se fait par :

Log de vraissemblance $L = \log{\mu_{1}} $

* AIC (Akaike Information Criterion) $AIC = -2L + 2K$
* BIC (Bayesian Information Criterion) $BIC = K \cdot \log{n} - 2 \log{L}$

Avec :

* $n$ le nombre d'observations.
* $K$ le degré de liberté qui correspond au nombre de paramètres.

### Conservation du motif 

La conservation d'une base de la séquence à une position particulière comme 
$R_{seq} = S_{max} - S_{obs} = \log N - ( - \Sigma p_n \cdot \log p_n)$

La différence entre l'entropie maximum et celle observé la conservation maximum est de 2 bits.

====================================

## Quantifier une séquence

Quantifier l'ARN expectation--maximization (EM) algorithm