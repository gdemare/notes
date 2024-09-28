## Vocabulaire

__Norme de réaction__ ensemble des phénotypes observés en faisant varier les conditions environnementales pour un génotype.

__Plasticité phénotypique__ capacité d'un organisme à exprimer différents phénotypes à partir d'un génotype donné selon l'environnement.

__Locus (pluriel loci)__ position fixe, localisation d'un gène ou d'un marqueur génétique.

__Caractère__ variable, aspect d'un organisme qui peut être analysé.

__Génotype__ différentes valeurs pour un caractère c'est-à-dire l'ensemble des allèles qui code un caractère donné.

__Gène__ unité d'information qui code pour un caractère donné.

__Cline__ évolution graduelle d'un caractère en fonction de l'axe géographique. Il y a une corrélation entre la latitude et la fréquence de l'allèle.

__Population__ groupe d'individus d'une même espèce qui vive dans la même zone géographique, se reproduise et engendre une descendance féconde. Les individus d'une population sont fortement apparentés.

__Patrimoine génétique (ou pool génétique ou fond génétique)__ composition génétique d'une population.

Lorsqu'un seul allèle est présent dans une population on dit que l'allèle est fixé (par opposition à polymorphisme).

!!! warning
    Il n'existe pas de hiérarchies entre les allèles mais entre les phénotypes. Ainsi, on dira qu'un phénotype $[A]$ est dominant sur $[a]$.

!!! note
    Un allèle dominant ne s'exprime pas toujours. Il peut être caractérisé par l'absence d'expression.

## Objectifs

La génétique des populations s'intéresse à l'histoire des populations. En comprenant leur dynamique passée, on peut prévoir leur évolution future.

!!! example
    C'est utile pour anticiper les pertes de diversité génétique et prévenir les risques liés à la consanguinité en organisant par exemple des réintroductions pour maintenir un certain niveau de diversité génétique dans la population.
### Les indicateurs de diversité

* Taux d'allèles hétérozygotes.
* Taux de polymorphisme fréquence d'individus hétérozygotes.
## Fréquences alléliques

Estimation de la fréquence des différents allèles présent dans la population

La variation génétique des individus au sein d'une population est dû à la reproduction sexuée. Elle est responsable du brassage génétique à trois niveaux entre :

* Les séquences d'un même chromosome (crossover).
* Les chromosomes (lors de l'assortiment des chromosomes).
* Les parentes (fécondation).

La population correspond à l'ensemble des allèles.

| Allèles | Fréquence |
| ------- | --------- |
| A       | $P_n$     |
| a       | $Q_n$     |

| Zygotes formés | Fréquence (tot = 100%) |
| -------------- | ---------------------- |
| AA             | $P_n^2$                |
| Aa             | $2P_n \cdot Q_n$       |
| aa             | $Q_n^2$                |

| Allèles | Fréq à la génération +1 (tot = 100%)            |
| ------- | ----------------------------------------------- |
| A       | $P_n^2 + P_n \cdot Q_n = P_n \cdot (P_n + Q_n)$ |
| a       | $Q_n^2 + P_n \cdot Q_n$                         |

!!! warning 
    Pour une population N d'individus diploïdes, l'ensemble des allèles $2N$.

Population allélique = fréquence allélique.

!!! example
    Pour une population avec N individus de phénotype et avec comme allèles possibles A et B, la fréquence allélique de A : $f(A)$.

Point méthode : calcul des fréquences alléliques

Génotype | Effectif
---------|----------
AA       | 35
AB       | 40
BB       | 25

Calcul des fréquences alléliques $\mathbf{Freq}(A) = \frac{2 \cdot n_{AA} + n_{AB}}{2\cdot N} = \frac{2 \cdot 35 + 40}{200} = 0,55$

!!! note
    Dans le cas où le phénotype intermédiaire n'existe pas, on peut calculer les fréquences alléliques en faisant l'hypothèse que la population est à l'équilibre.
### L'équilibre

L'équilibre est stable si l'état des paramètres n'évolue plus càd que les fréquences alléliques sont constantes. Ainsi, à chaque génération, on retrouve les fréquences de départ des allèles, ce qui correspond mathématiquement à $\Delta P = P_{n + 1} - P_n = 0$.

!!! note
    Généralement une population est à l'équilibre uniquement sur certains gènes précis.

Cela stipule que la recombinaison allélique et la ségrégation mendélienne sont indépendantes. Un allèle a une chance identique d'être présent à la génération suivante.

Dans la réalité, il existe de multiples causes qui peuvent modifier les fréquences alléliques d'une génération à l'autre :

* les mutations dans les cellules germinales (gamètes).
* la dérive génétique. Cela correspond au « tirage au sort » lors de la formation des gamètes qui peut ne pas être représentatif de la population.
* lorsque la rencontre entre les deux gamètes n'est pas aléatoire.
* des différences de taux de survie et de fécondité en fonction des allèles. C'est ce que l'on appelle la valeur sélective.
* les migrations avec des fréquences alléliques différentes de la population étudiée.

__Distorsion de ségrégation miotique__ groupe de gènes souvent situé sur le même chromosome transmis ensemble qui confère un avantage sélectif. Par exemple, l'absence de ce groupe entraine la mortalité du gamète.

En fonction du nombre d'allèles, on qualifiera l'équilibre de :

* polymorphe (plusieurs allèles)
* monomorphe (1 seul allèles).

Pour vérifier si une population est à l'équilibre :

1. Calculer les effectifs théoriques.
2. Comparer les résultats attendus avec les fréquences réelles $X^2 = \sum{\frac{(eff\ théor. - eff\ obser)^2}{eff\ théor}}$.
3. Pour cela on utilise un test statistique :
    
    * $H_0$ les résultats théoriques sont conformes à ceux obtenus.
    * $H_1$ les résultats théoriques ne sont pas conformes à ce obtenus.

Utilisation du test du Khi-2 :

* Le degré de liberté : nombre de paramètres indépendants, c'est le nombre d'allèles pour un gène -1 car la somme des fréquences alléliques est égale à 1.
* $\alpha$ le taux d'erreur accepté : probabilité de rejeter $H_0$ alors que c'est vrai.
* $\beta$ probabilité d'accepter $H_0$ alors que c'est faux.

Si $X^2 \lt X^2(\alpha)$, on dira alors que l'on ne rejette pas $H_0$. La population est à l'équilibre.

!!! note
    Généralement, on calcul à partir des fréquences alléliques observées les phénotypes théoriques à obtenir si la population est à l'équilibre. On vérifie ensuite que la conformité des résultats en utilisant le test du Khi-2.
### Mutation

On parle notamment du taux de mutation par gamète et par génération.

Pour un allèle A de fréquence $P_n$ avec un taux de mutation $u$, sa fréquence à la génération suivante est :
$$P_{n + 1} = P_n - u \cdot P_n$$
Les mutations récurrentes influencent peu les fréquences alléliques seules. Combinées avec d'autres facteurs évolutifs (environnement...), elles permettent de créer la variabilité initiale.

__Taux mutation reverse__ taux de mutation qui annule la mutation.

Le taux de mutation chez les Végétaux et les Animaux est d'environ 1 pour 100 000 gènes.
### Dérive génétique

__Dérive génétique__ fluctuation aléatoire des fréquences alléliques d'une
génération à une autre. Elle n'est pas prédictible.

Les effets de la dérive génétique sont particulièrement importants sur les populations avec de petits effectifs comme lorsqu'un groupe d'individus fonde une nouvelle population. La dérive peut alors provoquer l'accumulation d'allèles néfastes pour la survie de la population.

Ces changements de fréquences ont un impact important sur les populations de faibles effectifs et particulièrement vulnérables à l'apparition de mutants même si elles sont rares.

__Effet fondateur__ perte de la diversité génétique qui se produit lorsqu'un petit nombre d'individus fonde une nouvelle population.

__Effet goulot__ réduction radicale du nombre d'individus d'une population et ainsi de sa diversité génétique à la suite d'une catastrophe.

[La théorie neutraliste]{.mark}

La probabilité de substitution d'un allèle

On cherche à déterminer pour un individu quelqu'une à quelle fréquence il y a de posséder chaque type d'allèles.

* Déterminer les génotypes possibles.
* Déduire les fréquences des allèles en utilisant le phénotype double récessif et les identités remarquables.

!!! note 
    La dérive génétique entraine une diminution des allèles et donc de la variabilité génétique.

Elle est d'autant plus rapide pour les populations de faibles effectifs.
### Les rencontres non aléatoires entre les gamètes 

On parlera de pangamie lorsque les gamètes se rencontrent au hasard (et de panmixie pour les rencontres entre les individus).

Les causes de croisements non-panmixie peuvent être dû à :

* Autofécondation
* Consanguinité (de choix, de position ou dû au faible effectif)
* Homogamie (et hétérogamie) c'est lorsqu'un individu a tendance à se reproduire avec un partenaire avec qui, il partage le même phénotype.
#### Autofécondation

À l'équilibre, on aura uniquement des homozygotes car même si l'individu est hétérozygote (Aa), ces descendants auront 50% de chance de conserver l'hétérozygote : $1 = \frac{1}{4} \cdot AA + \frac{1}{2} \cdot Aa + \frac{1}{4} \cdot aa$

La probabilité d'hétérozygote diminue de moitié à chaque génération : $H_{n + 1} = 0,5 \cdot H_n$

La perte des hétérozygotes est extrêmement rapide et tout le génome est concerné.

$$A_n = A_0 + H_0 \cdot (1 − 0, 5)^n \cdot 0,5$$
Avec : 

* $A_0$ la fréquence d’homozygotes AA dans la population.
* $H_0$ la fréquence d’hétérozygotes Aa dans la population.

Ainsi, sur le long terme (c'est-à-dire quand $n$ tend vers $+ \infty$), les fréquences alléliques ne changent pas.

Dans la Nature et notamment chez les plantes, il existe des mécanismes d'auto-incompatibilité qui permettent de prévenir en partie l'autofécondation.
#### Consanguinité

Les principales causes de consanguinité sont :

* Des facteurs culturels pour les hommes.
* L'absence de choix de partenaires les populations avec peu d'individus.

Un individu est autozygote s'il possède pour un gène deux allèles identiques issue d'un unique ancêtre.

__Parenté__ deux individus partageant au moins un ancêtre commun. 

__Coefficient de parenté__ probabilité qu'un allèle à un locus soit identique entre deux individus. Cela revient à calculer le coefficent de consanguinité pour un descendant fictif entre ces deux individus.

__Consanguinité__ individu issu d'un croisement de deux individus apparentés. 

Le coefficient de consanguinité noté $f_i$ issu d'un croisement de deux individus apparentés. C'est le pourcentage de gènes autozygotes pour un individu.

Soit A a deux descendants : B et C. On sait que A possède pour F~a~ de gènes identiques (autozygotes).

Quelle est la probabilité de trouver des gènes identiques entre C et B ?

* Pour les gènes non identique ($1-F_a$), on a une chance sur deux de transmettre le même gène à ses descendants $\frac{1}{2} \cdot (1 - F_a)$.
* Pour les gènes identiques $F_a$, on a 100% de chance de retrouver le gène chez les descendants $F_a$.

La proportions de gènes communs entre B et C est
$\frac{1}{2} \cdot (1 - F_a) + F_a = \frac{1}{2} \cdot (1 + F_a)$
### La sélection

!!! note
    C'est le phénotype qui est soumis à la sélection et indirectement le génotype.

Le nombre moyen de descendants viables et fertiles dépend du taux de :

* Survie (valeur adaptative).
* Fécondité (valeur sélective).

__Valeur sélective (ou fitness)__ nombre moyen de descendants viables et fertiles laissé par cet individu.

__Valeur adaptative__ contribution d'un individu à la génération suivante en nombre de descendants.

Par convention, la valeur sélective maximale est 1.

$$valeur\ sélective\ absolue = \frac{Nbre\ de\ descendants}{Fertilité}$$

$$valeur\ sélective\ relative = \frac{valeur\ sélective\ absolue}{valeur\ sélective\ absolue\ maximum}$$

Soit deux allèles A et a de fréquences respectives $(p,q)$ pouvant donner les génotype AA, Aa et aa ayant pour valeur sélective $w_1$, $w_2$, $w_3$.

On note $w = w_1 \cdot p^2 + 2 \cdot w_2 \cdot p \cdot q + w_3 \cdot q^2$ . Pour obtenir les fréquences alléliques ont a besoin de diviser par $w$.

$$\Delta p = p_{n + 1} - p_n = \frac{p \cdot q}{w} \cdot [(w_1 - w_2) \cdot p + (w_2 - w_3) \cdot q]$$

!!! note
    La formule se démontre facilement. Il faut penser à $p = 1 - q$.

__Superdominance__ la valeur sélective de l'hétérozygote est supérieure à celles des homozygotes. Elle prend la valeur de référence càd 1.

## Sélection naturelle

Pour un caractère donné, la sélection naturelle conduit soit à favoriser :

* un extrême. On parle de sélection directionnelle.
* les extrêmes sont avantagés par rapport au phénotype intermédiaire. On parle de sélection divergente ou disruptive.
* Le phénotype intermédiaire est favorisé. Toutes déviations sont désavantagées. On parle de sélection stabilisante ou normalisante.
## Sélection sexuelle

La sélection sexuelle peut donner lieu à un dimorphisme :

* Intrasexuelle (entre les individus du même sexe). Cela donne souvent lieu à un mâle dominant qui dispose d'un groupe de femelles. La dominance s'établie souvent au cours de parade ou de lutte entre les individus du même sexe.
* Sélection intersexuelle : sélection par un des sexes sur l'autre. C'est généralement la femelle qui choisit le partenaire qui maximise le nombre de caractères indicateurs de « bons gènes ».
## Migration

__Flux génétique__ échange d'allèles entre des populations.

Le flux génétique tend à diminuer les différences génétiques entre les populations.

L'évolution de la fréquence allélique peut être modéliser par une suite $u_n = a \cdot u_n + b \leftrightarrow u_n = a^n \cdot ( u_0 - r) + r$

Démonstration :

1. on pose $r = \frac{b}{1 - a}$ et $v_n = u_n − r$.
2. En développant $u_n = a \cdot (v_n + r) + b$.
3. On démontre que $u_n = a^n \cdot (u_0 − r) + r$ est une suite arithmétique.

!!! note
    Les flux génétiques peuvent empêcher les populations de s'adapter pleinement à un environnement en empêchant la sélection naturelle de s'exercer. L'arrivé d'allèles de populations étrangères empêche la diminution de la fréquence des allèles désavantageux. Cela peut également être l'inverse, les flux génétiques peuvent permettre à des allèles de se répendre rapidement.

Les activités humaines ont rendu le flux génétique plus présent et courant qu'il ne l'était.

!!! note
    Point méthode : 
    * il est parfois plus simple de faire les calculs de probabilité de l'événement inverse.
    * penser toujours au fait que $q = 1 - p$ notamment pour déterminer les paramètres initiaux pour obtenir un équilibre.