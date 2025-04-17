
DIA indépent la sélection des ions est faites par chauqe intervalle de masse pour la MS2. Permet d'augmenter le nombre d'identification d'environ 25%.

## Bottom up

1. Ionisation des molécules à l'entré du spectromètre.
2. Fragmentation des 20 ions avec le signale le plus intense. La fragmentation n'est pas ($a_1/Y_{n-1}$ ou $Y_{n-1} / b_1$). Elle aura tendance à favoriser certains types de fragments comme ce n'ayant perdu qu'un aa à l'extrémité.
3. MS/MS analyse des fragments en recoupant les informations et grâce à la précision des mesures, on est en mesure de déterminé une partie des acides aminés d'une chaine peptidique.

### Données importantes

Masse des acides aminés :

Acide Aminé | Poids moléculaires (Da)
---|---
Glycine | 57,02
Tryptophane | 186,08
__Moyenne__ | 110

[PeptideMass](https://web.expasy.org/peptide_mass/) caluler la masse théorique d'une peptide.

Propriétés sur les spectres :

* La perte d'eau d'une molécule d'eau se traduit par la perte de 18 Da.
* Les ions fils coupés au niveau d'une proline sont très intense.

## Traitement des données

La façon dont est traitée les données de MS dépend de l'objectif de
déterminer :

* la composition protéique d'un échantillon notamment dans le cas de contrôle qualité pour vérifier la présence d'un composé comme un biomarqueur de pathologie.
* la séquence d'une chaîne peptidique inconnue.

## Détermination

1. Les spectres sont générés grâce à des algorithmes de deep learning à partir de séquences d'aa des protéines présent dans les bases de données et comparer avec les spectres obtenus.
2. Seulement les molécules ave cun certain m/z vont être sélectionne.
3. Pour remonter au protéines, les peptides sont regroupés en protéine en faisant appel au principe de parcimonie maximale (le moins de données possible) càd l'hypothèse la plus probable est celle qui un nombre minimum de protéines. Ce principe suggère que si deux séquences différentes (uniques) sont présentes dans l'échantillon lors il est plus probable qu'ils proviennent d'une protéine qui possède c'est deux séquences que de deux protéines différentes qui possèdent chacune une séquence.

!!! note
    Chez les Eucaryotes, le génome qui sert contient l'information de la synthèse des protéines contient à cause de son organisation la présence de nombreuses homologies.

### Séquençage

Les peptides sélectionnées sont fragmentés. La différence de M/Z entre les fragments permet de déduire les acides aminées qui constituent le fragment peptidique.

Les séquences des fragments peptidiques sont superposées pour déterminer la séquence du peptide.

La hydroliser les protiéines. Deux stratégies pour l'étude protéomique par spectrométrie de masse.

Bottom up

Shotgun

of protein-protein interactions, absolute and relative protein
quantification, post-translational modifications, and protein stability

L'idenfication est faite par un algorithme qui comparer les spectres des peptides obtenus par le spectromètre et à ce génèrer informatiquement à partir d'une liste de candidat protéines. Les 

les 
Analyse statistique des données avec false et vrai positifs.

En fonction du moment où le clivage (hydrolyse à lieu :

Bottom-up en morceaux de peptides dont on déduit la présence de protéines. Parfois la protéine est déduite par la présence d'un seul petit fragment.

__Top-down__ toutes les protéines intacts protéoforms. Couvre moins la séquence peptidique que la méthiode bottom up.

Purifier les protéines avec la chromatographie.

### Méthodes de quantification

Les méthodes de quantification :

- relative :
  - LFQ (label free quantification)
  - Tandem Mass Tag (TMT)
  
- absolue : la quantification absolue passe par une gamme étalon avec un marquage à l'isotope. Les échantillons d'intérêts sont reportés sur une courbe étalon.


Méthodes de quantification relative :
  - 

#### LFQ (label free quantification)

La quantification sans marquage 

#### Tandem Mass Tag (TMT)

__Multiplexages__ techniques consistant à réunir plusieurs informations au sein d'un unique support (ou échantillon).

Le prinicpale avantage de cette méthode est de ne pas avoir à se soucier de une sélection différentes des ions entre chaque échantillon car les échantillons sont poolés avant l'injection. Un tag permet d'identifier la provenance de chaque peptide. Les tags sont composés de trois régions :

* Grouepement réactif avec la protéine attache le groupe rapporteur aux peptides an amine-réactive NHS-ester groupe.
* Le normalisateur ou groupement de liaison qui rend le TMT isobarique.
* Groupe rapporteur avec des masses différentes.

Les protéines sont marquées par un groupement chimique isobarrique (de même masse) ce qui permet de sélectionner le même peptide pour tout les échantillons. Dans la cellule de collision, le groupement rapporteur est clivé. La quantification se fait en comparant les intensités des groupements rapporteurs. 

### Bottom down


Bottom down chaque niveau de charge de 1. souvent pas la possibilité de déterminer le massif isotopique. Le niveau de charge est déterminer par la distribution des charges (1 entre chaque pic).

!!! note
    Les différences de charges sont souvent liés à des différences dans les PTM non uniforme.

glutamine terminal sont souvent cyclisée.

multi attibut monitoring intégration des modificaitions 

