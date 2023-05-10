## Principes de la spectrométrie de masse (MS)

La spectrométrie de masse s'appuie sur l'analyse de la trajectoire de particules chargées soumises à un  champ électromagnétique. Leur trajectoire dépend de deux facteurs :

* Leur charge.
* Leur masse.

!!! info
    Des informations sur la conformation peuvent être obtenu en la répartition des charges et de la masse dans l'espace.

Leur mouvement modifie à son tour le champ électromagnétique. Ce sont ces variations qui sont mesurées et qui fournissent les informations sur les particules en mouvement (vitesse et orbite). L'appareil est sensible à de faibles variations.

La précision de la masse est de l'ordre de 0,2 Da (Dalton). Par rapport à la masse d'un atome d'hydrogène qui est de 1 Da. La sensibilité est suffisante pour distinguer des isotopes.

!!! note
    Ainsi, seules les molécules chargées peuvent être analysées.

!!! warning 
    Le spectromètre n'est sensible de la même manière à toutes les molécules. Cette variation constitue une difficulté pour la quantification absolue. Il est nécessaire de passer par une gamme étalon.

!!! warning
    La quantification relative ne fonctionne que lorsque l'on est dans des conditions comparables.

Utilités :

* Le listage de molécules.
* La quantification relative ou absolue.

Pour faciliter la détection des molécules, des charges sont enlevées ou rajoutées afin de maximiser le nombre de charges totales (positif ou négatif, cation (+) ou anion (-).).

_Rmq_ La qualité des résultats et leur pertinence dépendent grandement de la qualité de l'échantillon.

## Fonctionnement technique du spectromètre de masse

Le spectromètre est constitué de trois unités :

* La source d'ions.
* L'analyseur et le détecteur. C'est l'analyseur qui transforme les orbites en spectre (m/z) grâce à la transformation de Fourriers.

## La source d'ions

Il existe plusieurs types de sources d'ions pour charger les particules :

* Ionisation electrospray ESI. Un gaz est nébulisé autour de l'échantillon. Il est adapté aux échantillons liquides et il permet du haut débit.
* MALDI une matrice solide désintégré par l'utilisation d'un laser.

__Source douce__ pression atmosphérique.

### Ionisation electrospray (ESI)

ESI gaz nébulisation. Les gouttelettes situés autour des molécules d'intérêt sont éjectés par un courant et chargées.

Dissociation des molécules par la répulsion d'électrique dû aux charges.

## Analyseur de trajectoire

Analyseur (séparateur) time of fly

### Quadripôle

Le quadripôle analyse la stabilité de la trajectoire. Les 20 ions plus intenses sont ensuite analysés en MS/MS. Les autres molécules éjectées par des variations du champs électrique.

### Orbitrap

## Interprétation des spectres MS

C'est l'analyseur qui transforme les données de trajectoires en spectre.

Les données obtenues après l'analyse des trajectoires forment un spectre
avec :

* En abscisse, $\frac{m}{z}$ où $m$ poids moléculaire apparent (Da) et z la charge.
* En ordonnée, l'intensité du signal.

_Rmq_ L'intensité du signale dépend de la quantité de
protéines présentes dans l'échantillon.

## La charge

La charge est déterminée par la différence entre deux pics
isotopiques : $\mathrm{\Delta} = \frac{1}{Charge}$

Isotope molécule ayant un ou plusieurs neutrons supplémentaires.

Composé radioactif isotope non stable.

## Quantification absolue

La quantification absolue passe par une gamme étalon avec un marquage à l'isotope. Les échantillons d'intérêts sont reportés sur une courbe étalon.

## Protéomique

Nature de l'échantillon de la nature de la molécule les plus + protéines $H^{+}$. Jusqu'à z. Azote et oxygène doublet non liant donneur.

Les protéines peuvent être des molécules compliquées. La chaine d'acides aminés. On réalise généralement une découpe des protéines. C'est la présence de chaine peptides avec des séquences uniques dans chaque type de protéines qui permet de remonter au type de la protéine.

Comme la plupart des appareils de haute précision, ils possèdent une plage de mesure avec des conditions expérimentales optimales. Dans le cadre d'analyser des chaines peptidiques.

La précision des mesures réalisés permet une polyvalence dans les réponse que peut apporter une analyse par spectrométrie :

* Modifications post traductionnelles
* La détection des protéines isomères.

On réalise généralement une découpe des protéines en peptides par l'utilisation d'endopeptidase (par exemple, la trypsine). Les endopeptidases utilisées possèdent des sites de clivage spécifique.

Nécessite de dénaturer la protéine notamment de la suppression des ponts disulfures. On ajoute un groupement pour empêcher leur reformation.

## Préparation des échantillons pour la spectrométrie de masse

Les échantillons sont préparés pour faciliter la collecte des données par l'analyseur en réduisant la variabilité des molécules (différences de taille, de masse...) mais également la lecture et l'interprétation des résultats.

Pour faciliter l'analyse des protéines par MS :

1. les protéines sont découpées en peptides.
2. Les peptides sont analysés en sortie de chromatographie. Ils sont élués au fur et à mesure par des propriétés physico-chimiques proches.

La chromatographie

### Fragmentation des protéines par digestion enzymatique

Les protéines fragmentées sont découpées en peptides notamment avec la trypsine. Cette peptidase est extrêmement spécifique à son site de clivage et très efficace, elle rate peu de sites.

_Rmq_ Le découpage des protéines par les protéases complexifie l'échantillon (nombre de molécules beaucoup important) mais cela diminue la complexité du spectre après la fragmentation (les fragments sont suffisamment petits pour être facile à analyser).

### Chromatographie

La chromatographie permet de Fractionner l'échantillon. Cela facilite l'analyse (à la fois pour le spectromètre mais aussi pour l'utilisateur). Les molécules sont analysées par groupe partageant avec des propriétés chimiques très proches.

_Rmq_ La chromatographie permet aussi de retirer les sels.

### FAIM

Le FAIM est module supplémentaire qui ajoute un filtre supplémentaire à la sortie du spray. Il permet de filtrer les ions en fonction de leur charge.

Par exemple il permet d'éliminer les ions mono-chargés qui généralement ne sont pas des protéines.

## Spectrométrie protéomique

1.  Ionisation des molécules à l'entré du spectromètre.
2.  Fragmentation des 20 ions avec le signale le plus intense. La
    fragmentation n'est pas (a~1~/Y~n-1~ ou Y~n-1~/b~1~). Elle aura
    tendance à favoriser certains types de fragments comme ce n'ayant
    perdu qu'un aa à l'extrémité (.

3.  MS/MS analyse des fragments en recoupant les informations et grâce à
    la précision des mesures, on est en mesure de déterminé une partie
    des acides aminés d'une chaine peptidique.

### Données importantes

Masse des acides aminés :

Acide Aminé | Poids moléculaires (Da)
---|---
Glycine | 57,02
Tryptophane | 186,08
__Moyenne__ | 110

Propriétés sur les spectres :

* La perte d'eau d'une molécule d'eau se traduit par la perte de 18 Da.
* Les ions fils coupés au niveau d'une proline sont très intense.

# Traitement des données

La façon dont est traitée les données de MS dépend de l'objectif de
déterminer :

* la composition protéique d'un échantillon notamment dans le cas de contrôle qualité pour vérifier la présence d'un composé comme un biomarqueur de pathologie.
* la séquence d'une chaîne peptidique inconnue.

## Détermination

1. Les spectres sont générés grâce à des algorithmes de deep learning à partir de séquences d'aa des protéines présent dans les bases de données et comparer avec les spectres obtenus.
2. Seulement les molécules ave cun certain m/z vont être sélectionne.
2. Pour remonter au protéines, les peptides sont regroupés en protéine en faisant appel au principe de parcimonie maximale (le moins de données possible) càd l'hypothèse la plus probable est celle qui un nombre minimum de protéines. Ce principe suggère que si deux séquences différentes (uniques) sont présentes dans l'échantillon lors il est plus probable qu'ils proviennent d'une protéine qui possède c'est deux séquences que de deux protéines différentes qui possèdent chacune une séquence.

_Rmq_ Chez les Eucaryotes, le génome qui sert contient l'information de la synthèse des protéines contient à cause de son organisation la présence de nombreuses homologies.

### Séquençage

Les peptides sélectionnées sont fragmentés. La différence de M/Z entre les fragments permet de déduire les acides aminées qui constituent le
fragment peptidique.

Les séquences des fragments peptidiques sont superposées pour déterminer la séquence du peptide.


La hydroliser les protiéines. Deux stratégies pour l'étude protéomique
par spectrométrie de masse.

Bottom up

Shotgun

of protein-protein interactions, absolute and relative protein
quantification, post-translational modifications, and protein stability

les protéines sont transcrite de l'ARNm qui est transcrit de l'ADN.

Rentre en phase gazeuse sans détruire les protéines.

Algorithme qui fait matcher les petptides avec une base de données.

Analyse statistique des données avec false et vrai positifs.

En fonction du moment où le clivage (hydrolyse à lieu :

Bottom-up en morceaux de peptides dont on déduit la présence de
protéines. Parfois la protéine est déduite par la présence d'un seul
petit fragment.

Top-down tout les protéines intacts protéoforms. Couvre moins la
séquence peptidique que la méthiode bottom up.

Purifier les protéines avec la chromatographie.
