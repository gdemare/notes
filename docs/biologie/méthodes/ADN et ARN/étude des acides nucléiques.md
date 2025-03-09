* Identifier une séquence d'[[ADN]].
* Extraire une séquence d'ADN.
* Quantifier la synthèse d'une protéine.
## Révélation

La révélation d'ADN double brins se fait en utilisant un intercalent fluorescence qui émet dans la lumière visible lorsqu'il est soumis à la lumière dans les UV comme le bromure d'éthidium fluorescente (BET). Le BET est maintenant remplacé par le GelGreen qui est une substance moins mutagène.
## Extraction des acides nucléiques

La purification des acides nucléiques se fait par l'utilisation de colonne de silice. Pour pouvoir récupérer l'ADN d'une cellule, il faut :

1. Libérer l'ADN des cellules en utilisant des détergents et des protéinases.
2. Purifier l'ADN génomique avec du phénol ou du chloroforme pour éliminer les protéines associées à l'ADN.
3. Précipiter l'ADN pour le concentrer. La précipitation a lieu en utilisant de l'éthanol ou de l'isopropanol.
### Extraction de l'ADN 

Pour extraire le plasmique d'un génome bactérien, on dénature le plasmide par pH basique. Le génome bactérien ne sera pas totalement dénaturé et précipitera avec les protéines.
### Extraction de l'ARN

Lors de l'extraction de l'[[ARN]], il faut faire attention au RNAse. Pour bloquer leur activité, on utilise généralement comme dénaturant le guanidinium-thiocyanate. Pour ne conserver que l'ARN, on sature l'ADN avec des sels.

Pour extraire l'ADN génique codant pour une protéine d'une cellule eucaryote pour le faire exprimer par une cellule procaryote

Chez les eucaryotes, l'épissage complique l'extraction du gène lorsque l'on souhaite le faire exprimer par une bactérie car ce processus est absent chez ces dernières. Il faut récupérer la séquence composée uniquement des exons. Pour cela, il faut :

1. Extraire l'ARNm mature càd après l'épissage du gène d'intérêt.
2. Rétro transcrire ARNm en ADNc (complémentaire) avec une transcriptase, une enzyme d'origine virale.
3. Supprimer le brin d'ARN avec une Rnase H.
4. Ajouter une amorce TTTTTTT appelée, oligo T. Elle vient se fixer sur la queue poly A de l'ARNm.
5. Ajouter un ADN polymérase pour synthétiser le brin complémentaire.

!!! note
    La transcriptase synthétise le brin non codant et l'ADN polymérase le brin codé appelé ADN complémentaire.

__Exome__ partie des gènes du génome.
## Concentration et pureté

La concentration d'ARN ou d'ADN peut être mesurer par deux méthodes :

Méthode         | Différencier ARN/ADN  | Aliquoté
----------------|-----------------------|---
Fluométrie      | Non                   | non
Spectrométrie   | Oui                   | oui

### Spectrométrie

La concentration d'ADN dans une solution peut être déduite par
l'absorbance. La longueur d'ondes d'absorption maximale des acides nucléiques est $\lambda_{\max} = 260nm$

Beer Lambert

$$D.O. = \varepsilon \cdot l \cdot c$$

* $D.O.$ Densité Optique 
* $\varepsilon$ Coefficient d'extinction molaire spécifique à la molécule en M ($mol \cdot L^{-1}$).
* $l$ Largeur de la cuve.

__Hyperchrome__ augmentation de l'absorption de l'ADN lorsque qu'il est sous la forme d'un simple brin.

La pureté de la solution se fait par l'analyse du ratio 260/280 nm. Une solution est considérée comme satisfaisante s'il est situé entre $1,9 ; 2.3$.

!!! warning
    le pH modifie dans l'absorbance de la tryptophane, l'aa qui donc le ratio.
## Transfection ou transformation

La transfection (eucaryote) ou la transformation (procaryote) est l'opération qui consiste à transférer un morceau d'ADN dans une cellule hôte et à le faire s'exprimer ou répliquer. Ces méthodes font parties du domaine du génie génétique.

Le contrôle de la transfection ou de la transformation se fait par l'utilisation d'un plasmide industriel.
### Le sens de l'insert

Il existe deux méthodes pour détecter le sens dans le cas d'une ligation non orientée :

* Une PCR en utilisant deux amorces, une sur le vecteur et l'autre sur l'insert. En fonction du sens de l'insert, l'amplification pourra ou ne pourra se faire en fonction de si les amorces sont sur le même brin.
* Par l'utilisation de enzymes de restriction. La taille des fragments dépendra du sens de l'insert. On compare les tailles de fragments théoriques avec ceux obtenus en électrophorèse.
## Séquençage : déterminer la séquence de nucléotides

Pour déterminer la suite de nucléotides, on utilise la technique de terminaison. L'ADN, monobrin, est polymérisé avec des nucléotides fluorescents. Le code de la séquence est lu grâce à un laser.

Auparavant, on utilisait :

* Le séquençage chimique. Le brin d'ADN est clivé par des molécules qui clivent chaque base de manière spécifique en petits fragments.
* La copie de la séquence avec des nucléotides appelé ddbase avec un H à la place du groupement 3-OH ce qui empêche la liaison appelée terminateur de chaine. Le brin monocaténaire amorce puis le fragment est testé avec chaque type de ddbase en faible proportion en DNtP.
## Extraire une séquence d'ADN d'intérêt

L'extraction et l'identification de la séquence d'ADN d'intérêt.
### Reconnaitre et sélectionner le fragment d'intérêt

Pour déterminer le fragment d'intérêt, il est possible de procéder :

* En utilisant une sonde d'hybridation avec la séquence étudiée.
* Par sélection fonctionnelle en synthétisant la protéine.

__Sonde d'hybridation__ courte séquence complémentaire de celle étudiée.

__Vecteur d'expression__ vecteur de clonage avec un promoteur bactérien.

L'organisme modèle eucaryote utilisé est la levure. Elle offre l'avantage d'être facile à cultiver et est de posséder la capacité de pouvoir utiliser les plasmiques, une capacité rare chez les eucaryotes.
### Couper la séquence d'intérêt

Une séquence d'ADN peut être couper par l'utilisation d'enzymes soit endonucléase et exonucléase.

L'ADN peut être coupé à un endroit particulier en utilisant une endonucléase de restriction. Ce type d'enzyme reconnait un palindrome.

!!! note
    Contrairement aux autres endonucléases, les enzymes de restrictions coupent l'ADN au niveau de la zone de reconnaissance.

__Enzyme de restriction__ enzyme qui reconnait et supprime des séquences d'ADN. Elles ont été découvertes chez les Bactéries et servent initialement de mécanismes de défense contre les virus.

__Palindrome__ séquence reconnue par l'endonucléase de restriction. Elle ne dépend pas du brin.

__Site de clonage__ site reconnu par l'enzyme de restriction.

Les enzymes de restriction se composent de deux sous unités (dimère). Elle réalise deux types de coupe :

* Franche, les deux brins sont coupés au même niveau.
* Cohésive, la séparation a lieu à des endroits différents les deux brins.

L'ADN bactérien est protégé des enzymes de restriction par méthylation.

Lorsque les extrémités sont cohésives, il faut préciser l'extrémité sortante 5' ou 3'. 

!!! example
    Enzyme II (G/ATC) coupe au premier nucléotide du palindrome : G-ATC et CTA-G.

!!! note
    Deux enzymes différentes peuvent produire des extrémités complémentaires.
## Hybridation in situ (dans un tissu)

Détecter la présence d'une séquence ARN ou d'ADN dans un organisme.

L'hybridation in situ posent plusieurs problèmes :

* Les séquences ARN et ADN masquées par des protéines. 
* Les interactions non spécifiques (sonde et anticorps). Solution :
Lavage et saturé en composé organique (protéines, ADN ARN).

!!! note
    aux RNAses et aux DANases présent dans les lysosomes.

!!! warning
    Il est utile de détruire les sondes non hybridées avec une DNAse ou une RNAse pour limiter le bruit.

Il est possible d'ajouter de modifier la concentration de $Mg^{2+}$ qui est à la fois :

* Cofacteur de la Taq polymérase.
* Un ion bivalent qui stabilise l'hybridation de l'ADN et donc les liaisons non spécifique.
## Visualiser l'ADN ou ARN
Pour visualiser l'ADN et l'ARN dans une cellule. On utilise un marqueur radioactif qui se fixe sur la thymine ou sur l'uracile.