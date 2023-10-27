## Base de données

Principales bases de données :

Séquences :
    
* Pour les gènes : GenBank (américain), EMBL-EBI (européen), DDBJ (Japon). 
* Les génomes GOLD.
* Pour les protéines : Uniprot.

Structres des acides nucléiques et des protéines :
    
* Protéines Data Bank

## Séquençage : assembler des séquences

L'objectif est de reconstituer une séquence à partir de morceaux car la majorité des techniques de séquençage fonctionne par la découpe de polymères et leur analyse en petits fragments. Les principales difficultés sont :

1. Les erreurs de lecture que ne permettent pas trouver un alignement exact.
2. La répétition de certaines séquences répétées qui peuvent être alignées à plusieurs endroits.
3. Recall above that we need to align N=N= 900,000,000 reads to a length 3B genome. Therefore the naive process of scanning the entire genome for each read's match is too slow.

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

__Alignement multiples__ aligner plusieurs séquence perme notamment d'identifier des motifs communes à plsuieurs séquences.

!!! note
    Avec des séquences suffisamment semblables, il n'y aucune différence dans les résultats.

Il faut : 

* Maximiser les identités, càd les commune entre deux séquences.
* Minimiser les substituions ($y$), insertions ($z$), délétions ($z$) et les gaps.

 Le principe de l'alignement consiste associé à l'alignement entre deux séquences une fonction soit :

* coût qu'il faut minimiser. Exemple, $\omega \times y + \omega \times z$ avec $x$ nbre de correspondances, $y$ de substitutions, $z$ nbre de gap.
* score qu'il faut maximiser. Exemple : $\frac{(n + m)}{2} - x = y + \frac{1}{2}z$

!!! note
    Cela revient à procéder en deux étapes, choisir :

    1. Le type d'alignement
    2. Le critère de comparaion pour trier les alignements.

!!! note
    La différence entre ces deux types de méthodes est que les gaps et les extensions de gaps sont pénalisés différemment.

Plusieurs indicateurs permettent de caractériser un alignement : 

* __% d'identité__ % de bases identiques avec la même position.
* __% de similitudes__ nbre d'acides aminées alignée.
* __% gap__ % de trous dans la séquence.

!!! example 
    Alignement global entre deux séquences : le dot plot.
        Lecture en diagonal, permet d'idnetifier les l'alignement qui offre le plus de ressemblacnce.
        reprére des diagonales d'identités poids présents dan 
        Pour identifier l'alignement le plus intéressants, il faut identifier un chemin qui maximise le nombre de points.

!!! note 
    Généralement, le poids des gaps successifs est décroissants. Autrement dit, les séquences avec de nombreux gap sont plus pénalisés que celle avec de grands gaps.

### Vocabulaire 

__covariation__ deux positions qui sont liées et qui dépendent l'une de l'autre.
__Domaine__
__Fragment__ 
__Motif__
__Mutation ponctuelle acceptée__ mutation d'aa qui n'ont pas affecté la fonction de la protéine.
__Région__ partie d'une séquence qui 
__Signature__ séquence commune à une famille de protéines ou de gènes.

## Phylogénie ou proximité entre des séquences

Pour des séquences qui sont homolgues ou la proximité entre des séquences, il est possible d'utiliser plusieurs algorithme pour : 

## Quantifier une séquence

Quantifier l'ARN expectation--maximization (EM) algorithm
