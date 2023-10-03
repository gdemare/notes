Principales bases de données accessibles :

* Séquences :
    * Pour les gènes : GenBank (américain), EMBL-EBI (européen), DDBJ (Japon). 
    * Les génomes GOLD.
    * Pour les protéines : Uniprot.
* Strucutres acides nucléiques et protéines : Protéines Data Bank


## Aligner deux séquences

L'analyse des séquences se fait par l'étude des correspondances.
être capable de déterminer des informations sur les séquences et pouvoir prédire.

* Choix du type d'alignement.
* Un critère de comparaison.

### Les types d'alignements

Deux types d'alignements :

* global. Comparer deux séquences. généralement d'une région similaire. plutot pour les séquences homologue.
* local. Comparer des séquences avec des motifs commumns. Par exemple trouver un motif commun analogue.

* alignement multiples pour identifier des motifs communes à plsuieurs séquences.

__signature__ séquence commune à une famille de protéines ou de gènes.

__covariation__ deux positions qui sont liés et qui dépendent l'une de l'autre.

Minimiser les gaps.
Maximiser les identités.
Et moins important, préférer les substitutions au délétions....

Généralement, on compte les alignements :

* x nbre de correspondances.
* y nbre de substitutions.
* z nbre de gap.

Fonction coût à minimser :

* $\omega * y + \omega * z$ avec y et z 

!!! note 
    Généralement, le poids des gaps successifs est décroissants. Autrement dit, les séquences avec de nombreux gap sont plus pénalisés que celle avec de grands gaps.

Comparer deux séquences gloablement dot plot.
Lecture en diagonal, permet d'idnetifier les l'alignement qui offre le plus de ressemblacnce.
reprére des diagonales d'identités poids présents dan 
Pour identifier l'alignement le plus intéressants, il faut identifier un chemin qui maximise le nombre de points.

Diagonale inversée la séquence a été inversé.
Tache répétition. palindrome
tache rayé répétition de séquences identiques 

### Algorithme d'alignements gobaux

#### Algorithme "exact"

Dot plot en partant en haut à gauche, pour chaque déplacement on applique les coûts que l'on aditionne à chaque case. Le trajet optimal est celui avec le plus petit score.

# Séquençage à partir de 

Les techniques de séquençages se basent sur la découpe de polymères et l'analyse des petits fragments. Les

1.  Séquençages
2.  Assembleur
3.  Alignement

C=NL/GC=NL/G.

G taille totale
L taille des fragments

# Séquençage

Parameter important dans le séquençage.

Read lengths:

Error rates and types of errors:

# Assembleur

Principale difficulté est la redondance de motif.

1. There are errors in the reads, and therefore looking for exact alignment is challenging.
2. The genome is quite repetitive, and therefore a read may have several places it can align to. In fact, there are regions of the genome (e.g. Alu repeats) that are repeated millions of times.

3. Recall above that we need to align N=N= 900,000,000 reads to a length 3B genome. Therefore the naive process of scanning the entire genome for each read's match is too slow.

Quantifier l'ARN expectation--maximization (EM) algorithm

Mutation ponctuelle accepté mutation d'aa qui n'ont pas affecté la fonction de la protéine.

# Alignement

% de similitude d'un alignement = nbre d'acides aminées bien alignée.

Les alignements globaux sont plus fréquemment utilisés lorsque les séquences mises en jeu sont identiques et de taille égale. Une technique générale, nommée algorithme de Needleman-Wunsch est basée sur la
programmation dynamique.

Les alignements locaux sont plus fréquemment utilisés lorsque deux
séquences dissemblables sont soupçonnées de posséder des motifs
identiques malgré l'environnement. L'algorithme de Smith-Waterman est
une méthode d\'alignement local générale basée aussi sur la
programmation dynamique.

Avec des séquences suffisamment semblables, il n'y aucune différence
dans les résultats.

Des méthodes hybrides, des méthodes semi-locales, s'avèrent utiles lorsque...

$S_{bit} = \frac{\lambda S_{r} - lnK}{ln2}$

Match value --- Value assigned for matching characters

Mismatch value --- Value assigned for mismatching characters

Gap penalty --- Value assigned for spaces

Global Needleman-Wunsch algorithm.

Local Smith-Waterman algorithm

Score pour un match, mismatch, gap, extension de gap

% d'identité % de bases les mêmes  nbre de position identique 
% de similarité identitié + similitude 
% gap   
