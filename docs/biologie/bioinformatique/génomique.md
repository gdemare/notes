__Reads__ courte séquence lue par le séquenceur.

__k-mer__ taille d'une sous séquence.

__configs__ séquence génomique continue résultant de l'assemblage de reads.

__Scaffolds__ ensemble de contigs dont l’orientation et la taille des gaps est connue.

__Unitigs__ aligenment de séquences non ambigues.

1. Préparer ces séquences (preprocessing)
2. Réaliser l'étude associée.

!!! warning
    La préparation des séquences dépend de l'objectif.

Single ou paired-end. Les séquences sont lues par l'extrémité 5' et 3'.

Généralement, la méthode la plus utilisée (illumina) est 

1. Découpage du génomes : fragementation de la séquence.
2. Ajout de deux amorces aux extrémités de la séquence : au début et à la fin.
3. Amplification des fragments.
4. Lecture de la séquence par chacune des deux extrémités.

!!! note
    Généralement, la lecture est limitée à un nombre de bases après les amorces.

!!! warning
    Il y a souvent des erreurs à la fin des reads.

Principales utilisations :

* Séquençage De novo : déterminer la séquence sans information préalable.
* Transcriptomique (ou ARN quantificition) quantifier le niveau d'expression des protéines.
* Métagénomique : lister les espèces et quantifier l'[[ADN]] d'un échantillon.
## Prétraitement des données

Les principaux programmes permettant le prétraitement des séquences sont :

* trimmomatic
## Séquencage de novo

Déterminer la génome d'un organisme.

!!! warning
    Chez les Eucaryotes, les séquences répétés sont souvent plus grandes que celles des reads.
### Alogrithmes d'assemblage

Deux types :

* gourmands. Une séquence est sélectionner puis elle est allongée au fur et à mesure.
* basé sur la théorie des graphs deux types. Différence en fonction de la taille des k-mer :

    * over lap liaison uniqument si un chevauchement. L'objectif est de trouvé le chemin le plus long. Le k-mer est la taille des reads k.
    * découpage des séquences en k-mer possible (graph de debruyn). graphs
    * over lap liaison uniqument si un chevauchement. L'objectif est de trouvé le chemin le plus long. Le k-mer est la taille des reads k.
    * découpage des séquences en k-mer possible (graph de debruyn). graphs

Listes d'algorithmes :

* ABySS "Assembly By Short Sequences," programme de séquençage de novo conçu pour assembler des données de séquençage provenant de courtes lectures.​
### Graph de de Bruijn

1. On créé un graph de tous les combinaisons de chevauchements possibles pour les k-mer (théorique). 
2. comparaison avec les séquences obtenues durant le séquençage.
## Métagénomique

Lister les espèces présentes dans un échantillon.
## Transcriptomique

La transcriptomique doit permettre de lister et quantifier l'[[ARN]] exprimer dans un tissu à un moment donnée.
