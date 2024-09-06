# PCR quantitative (qPCR)

[[PCR]] quantitative (qPCR) ou PCR en temps réel permet de mesurer :

* La quantité de transcription d'un gène par l'ARN càd la quantité de protéines produite. L'ARNm est récupéré et rétro transcrit en ADNc.
* La quantité d'ADN présent au départ.

Elle permet de suivre en temps réel la quantité d'ADN à chaque cycle.

Le principe est de suivre la quantité de produits grâce au niveau de fluorescence. 

!!! warning
    Lors des premiers cycles, la fluorescence est souvent bruitée.

Deux approches sont possibles pour quantifier l'ADN :

* relative pour connaitre la quantité par rapport à un autre échantillon. Par exemple, pour connaitre le niveau d'expression d'un gène entre d'un malade et d'un patient sain. C'est la méthode qui permet une meilleure reproductibilité des résultats.
* absolue connaitre la quantité de façon absolue. Par exemple pour quantifier des protéines virales.

La valeur seuil (ou en anglais) doit être déterminer dans la phase exponentielle. Deux méthodes permettent de déterminer la phase exponentielle :

* A vue d'œil.
* En utilisant la dérivé seconde. On obtient une courbe qui décroit linéairement lorsqu'elle est exponentielle.

!!! warning
    Il n'est souvent pas possible d'utiliser un ADN comme standard car il n'existe pas de moyen de vérifier l'efficacité de la transcription inverse.

## Efficacité de la PCR

En théorie, à chaque cycle, on devrait avoir $N = N_0 \cdot 2^c$ copie.

En pratique, à chaque cycle, le nombre de copie est de $E = eff + 1$ avec $E$ l'efficacité.

!!! note
    Pour une efficacité de 100%, $eff = 1$ et le coefficient de copies est égale à 2.

En passant par log, on démontre que :

$$C_t = \frac{- 1}{\log E } \cdot \log N_0 + \frac{ \log N_{seuil}}{\log E}$$

Avec :

* $C_t$ le nombre de cycles au seuil.
* $N_{seuil}$ le nombre de séquence au seuil.

$$E = 10^{\frac{- 1}{pente}} - 1$$

!!! note
    Un Ct grand indique que le gène est faiblement exprimé.

### Optimisation et de la PCR 

L'efficacité de la réplication dépend de :

* Amorce à 90%.
* Pureté de l'échantillon.
* Séquence cible.
* Longueur de l'amplicon.

Pour optimiser le processus, il est possible de faire la gamme qu'une seule fois puis de créer des échantillons qui reprennent la gamme (càd des échantillons de gamme) avec les échantillons à quantifier.

* Une fait la gamme une seule fois
* Deux gammes contrôles et les échantillons à quantifier

## Méthode absolue

La méthode absolue permet d'obtenir le nombre exact de copie. Elle ne fonctionne que si les paramètres sont strictement identiques : amorces, type de matrice cible, tampons, etc.

Tracer la droite d'efficacité et déduire la valeur en reportant le Ct sur la droite.

## Méthode relative

La méthode relative consiste à exprimer la quantité d'ADN initiale par rapport un gène de référence.

Le ratio correspond au rapport de l'expression d'un gène cible sur un gène d'intérêt entre deux échantillons (une condition d'intérêt et une condition de référence).

Le gène d'intérêt et le gène endogène sont présents dans les mêmes échantillons.

* Normaliser les résultats entre les expériences.
* Validation de l'expérience comme contrôle positif.
* Possibilité d'utiliser les résultats pour une courbe standard relative.

$$R = \frac{{(N_{0\ intérêt} \cdot N_{0\ référence})}_{intérêt}}{{(N_{0\ intérêt} \cdot N_{0\ référence})}_{controle}}$$

## Sans calibreur

#### Méthode des courbes standards (standards externes)

Courbes standards avec des d'efficacité différentes mais constante entre le gène cible et de référence.

Indépendamment, on construit une gamme qui possède les deux gènes pour obtenir le graphique $C_t = f(\log N_0)$

On reporte le $C_t$ de chaque valeur de fluorescence de caque gène pour déterminer la quantité de gènes à $N0$.

|                       | Gène d'intérêt                      | Gène de référence |
|------------------------|------------------------|------------------------|
| Echantillon intérêt   | $\log No$                             |                   |
| Echantillon référence |                                     |                   |
| Calcul du ratio       |                                     |                   |
| Ratio de quantité     | $\log No / \log No / \log No \ \log No$ |                   |

Hypothèse :

* L'efficacité est la même entre le gène étudié et celui de référence.
* Log de concentration on vérifie que c'est linéaire.

## Avec calibreur

Le gène calibreur n'a pas de différence d'expression (expression constante) entre les échantillons. Concrètement, on choisit généralement un gène de ménage (domestique/housekeeping) qui s'exprime de façon identique dans chaque cellule comme ceux qui codent pour l'actine...

!!! note
    Les gènes domestiques sont des gènes dont le niveau d'expression varie peu entre les types cellulaires et entre les conditions.

!!! note
    Le calibreur sert également de contrôle positif.

!!! exemple
    Exemples de gènes calibreurs :

    * Gène cible : transcrit de fusion BCR‐ABL
    * Calibreur lignée cellulaire : K562
    * Gène domestique : G6PDH

Deux méthodes :

* Sans correction d'efficacité appelé $\Delta \Delta C_t$ rapide et pas de gamme) juste deux échantillons.
* Avec correction d'efficacité càd lorsqu'elle n'est pas constante ou égale à 2.

Il faut deux échantillons :

* Intérêt- Référence appelé
* Calibreur-Référence |

### Sans correction d'efficacité

$$\Delta \Delta C_t = \frac{C_{t1\ int} - C_{t1\ réf}}{C_{t2\ cal} - C_{t2\ réf}}$$

Le ratio d'expression est égal à
$R = 2^{- \Delta \Delta C_t}$.

Cette méthode fonction uniquement si l'efficacité est :

* La même entre les deux échantillons.
* Constante et comprise entre 95% et 100%.
* La différence entre les droites ne dépasse pas $\Delta C_t \lt 0,1$.

### Avec correction d'efficacité

Cette méthode nécessite de connaitre les efficacités.

Pour chaque gène, $N_{seuil} = N_0 \cdot E^{C_t}$ puis on pose $\frac{N_{0\ intérêt}}{N_{0\ réf}}$.

$$R = \frac{E_{gène\ intérêt}^{\Delta C_t (contrôle - échantillon)}}{E_{géne\ référence}^{\Delta C_t (contrôle - échantillon)}}$$

## Validation des échantillons

Pour valider la PCR, il faut vérifier :

* La gamme de CT qui doit être comprise entre $[15; 30]$.
* La dispersion des échantillons entre eux et avec la valeur théorique.

### Dispersion des échantillons

La dispersion des réplicas :

$C_v = \frac{Ecart\ type}{Moyenne} \lt 1$

La division par la moyenne permet de compenser la différence exponentielle entre les échantillons dû à l'augmentation exponentielle des différentes quantités d'ADN.

Différence de quantité d'ADN observé et théorique :
 $RE = \vert \frac{observé - théorique}{théorique} \vert \lt 25,4$

__Précision__ (precision) dispersion des mesures.

__Justesse__ (accuracy) mesure l'éloignement entre la prédiction et la mesure.

## ddPCR

Une PCR est réalisée dans des gouttelettes de 1nL. La quantité de fragments dans chaque gouttelette suit la loi de Poisson. Ce qui permet d'estimer la quantité de départ :

$$T = \frac{-1000 \cdot D}{V_d} \cdot \ln(1 - \frac{P}{R})$$

Avec :

* $T$ concentration absolue copies par nL.
* $D$ facteur de dilution.
* $V_d$ volume moyen des gouttelettes
* $P$ nombre de gouttelettes positives.
* $P$ nombre de gouttelettes total.
