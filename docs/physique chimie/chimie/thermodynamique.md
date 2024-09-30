L'unité de l'énergie est le Joule (J).

La thermodynamique est un domaine de la chimie qui permet de prévoir si une transformation chimique peut avoir lieu sans déterminer sa composition ou sa vitesse.

__Variable intensive__ (par opposition à extensive) variable indépendante de la quantité de matière (température, pression, volume,...)

!!! note
    Le produit de deux variables extensives est une variable intensive (ex : la masse volumique).

__Phase__ partie d'un système où les variables intensives sont des fonctions constantes.

__Capacité thermique__ variable intensive qui quantifie la quantité de chaleur qu'une matière est capable d'échanger.

__État standard__ pression atmosphérique (1 atm) et température 298K (utilisé par défaut).

Rappel : Pour les gaz parfaits, on a : $$p \cdot V = n \cdot R \cdot T$$

Avec :

* $V$ volume en $m^3$.
* $n$ quantité de matière en mole.
* $T$ température en Kelvin ($0K = -273,15°C$).
* $R = 8.314J \cdot K^{-1} \cdot mol^{-1}$ constante des gaz parfaits.

La masse molaire des principaux atomes est :

Atome     | Masse molaire ($g \cdot mol^{-1}$)
----------|-----------------------------
Hydrogène | 1
Carbone   | 14
Oxygène   | 16
##  Conservation de l'énergie

1er principe de la thermodynamique :
L'énergie interne d'un système est notée U. Elle est dû à :

* l'énergie [[cinétique]] (mouvement).
* aux interactions entre les particules.

Il n'est pas possible de déterminer l'énergie d'un système. En revanche, il est possible de connaitre la différence d'énergie entre deux états.

L'énergie d'un système peut être échangée sous deux formes :

* Énergie thermique = Chaleur ($Q$).
* Énergie mécanique = Travail ($W$).

On définit cette différent d'énergie :

$$\Delta U = \Delta Q + \Delta W$$

Dans le cas d'une réaction cyclique, on a $\sum{\Delta U} = 0$.

La nature des transformations possibles

Nature transformation   | Description                  | Implication                 
------------------------|------------------------------|-------------------
Isotherme               | Pas de changement de T°      | $T = cste$
Isochore                | Volume constant              | $V = cste$
Adiabatique             | Pas d'échanges de chaleur    | $Q = 0$
Isobare                 | Pression constante           | $P = cste$
### Le travail

(uniquement pour les gaz)

La notion de travail s'applique uniquement aux gaz car ils sont les seuls à subir une variation importante de volume : $\Delta W = - P \cdot dV$ avec $P$ pression (Pa).

!!! example 
    Pour une réaction isobare, on aura $\Delta W = - P \cdot dV = - P \cdot \frac{n \cdot R \cdot T}{P} = - n \cdot R \cdot T$
### La chaleur

La chaleur est une énergie. C'est une notion différente de la température.

!!! note
    Un changement de T° implique nécessairement un échange de chaleur.

!!! info 
    Point méthode : Pour chaque réaction, il faut d'abord noter sa nature (isotherme...).

La chaleur se calcule en utilisant une des formules suivantes :

* $\Delta Q = n \cdot C_v \cdot dT + P \cdot dV$  
* $\Delta Q = n \cdot C_p \cdot dT - V \cdot dP$

Avec :

* $\Delta Q$ Différence de chaleur pour trouver la chaleur il est nécessaire d'intégrer ($J \cdot mol^{-1}$).
* $P$ Pression (Pa).
* $V$ Volume ($m^3$).
* $C_p$ Capacité thermique isobare ($J \cdot K^{-1}$).
* $C_v$ Capacité thermique isochore ($J \cdot K^{-1}$).
* $dT$ différence de température.

!!! note
    $P \cdot dV$ et $V \cdot dP$ sont nulles pour les formes de la matière autre que gazeux.

!!! note
    On a également $R = C_p - C_v$
### Enthalpie

La plupart des réactions se font à pression constante (transformation isobare).

$\Delta Q_p = \Delta H$

__Enthalpie__ chaleur échangée à pression constante ($P = 1 atm$). Elle est notée $\Delta H$.

Une réaction est :

* Endotherme ($\Delta H \gt 0$) elle absorbe de la chaleur.
* Exotherme ($\Delta H \lt 0$) elle libère de la chaleur.

l' Energie de formation d'une réaction

Quatre méthodes pour déterminer l'enthalpie de réaction :

Méthodes                   | Principe
---------------------------|--------------------
Enthalpie de formation     | Énergie de formation des molécules
Énergie des liaisons       | Somme des liaisons créées et dissociées
Combinaison de réactions   | Combinaison linéaire de réactions intermédiaires.
Energie interne            | Uniquement pour les gaz

!!! info 
    Point méthode : lorsque l'on parle de réaction de formation sans préciser la formule de réaction, il s'agit de faire réagir des corps simples pour obtenir la molécule désirée.

### Enthalpie de formation

Loi de Hess : L'enthalpie de réactions est égale à l'énergie nécessaire pour former les produits moins celles des réactifs.

$$\Delta_r H_T^0 = \sum{\nu_ i} \cdot \Delta_f H_T^0 (\mathbf{produits}) - \sum{\nu _i \cdot \Delta _f H_T^0 (\mathbf{réactifs})}$$

Avec :

* $\nu$ coefficients stœchiométriques ($2H_2O$).
* $\Delta _r H_0^T$ enthalpie de réaction.
* $\Delta _f H_0 ^T$ enthalpie de formation.

!!! note
    L'enthalpie de formation des corps simples c'est-à-dire de molécules constituées d'un seul type d'atomes est nul ($0 K \cdot J \cdot mol^{-1}$).

Lorsqu'il y a un changement de température, il faut ajouter l'énergie nécessaire pour faire la transformation :

$$\Delta _r H_0^{T_2} = \Delta _r H_0^T + [\sum{\nu_i \cdot C_p ( \mathbf{produits})} - \sum{\nu _i \cdot C_p ( \mathbf{réactifs} )}] \cdot (T_2 - T_1)$$

avec $C_p$ capacité calorifique en $mol^{-1}$.
### Énergie de liaisons

L'idée c'est de déterminer l'énergie de formation à partir de celle nécessaire pour créer ou détruire des liaisons moléculaires. Cette méthode nécessite de connaitre la structure des molécules c'est-à-dire les liaisons électroniques entre les atomes.

!!! note
    L'énergie de dissociations est positive $E_d\gt 0$ car on libère de l'énergie lorsque l'on brise une liaison. Elle est égale à l'opposé de l'énergie de formation de liaisons $E_f = - E_d$.

!!! warning 
    On a généralement l'enthalpie de dissociation des réactions pour les éléments gazeux. Il faut donc réaliser une étape supplémentaire. Le changement d'état pour les autres états de la matière (solide...). Dans ce cas, il faut ajouter l'énergie de la transformation chimique. Il  faudra donc additionner :

    * L'énergie à fournir pour atteindre à la température de changement d'état.
    * L'énergie de changement d'état.
    * L'énergie pour revenir à la température initiale.

### Combinaison de réactions

On peut calculer l'enthalpie en réalisant des combinaisons linéaires de réactions chimiques intermédiaires. L'idée est de sommer des réactions pour obtenir celle désirée.

!! note
    Lorsqu'un élément est présent à la fois comme réactif et comme produit, il peut être supprimé.

!!! note 
    Lorsque l'on inverse une réaction, l'enthalpie change de signe.

!!! note
    Point méthode faire un tableau une colonne « réactif » et une autre « produit ».

### Energie interne

Pour les gaz, à pression constante, on a :

* $\Delta H_r = \Delta U + \Delta n \cdot R \cdot T$
* $\Delta n$ différence de quantité de matière.
## L'entropie
2ème principe de la thermodynamique : l'
Sans apport d'énergie extérieur, la matière se tend vers un état de désordre :

* La matière se désorganise
* L'énergie se disperse

On appelle ce désordre, l'entropie et on le note $S$.

L'entropie est une approche probabiliste du monde. Elle se définit comme l'état ayant la plus grande probabilité d'exister. Si un gaz contenu dans une bouteille est libéré, la probabilité qu'il rentre à nouveau dans la bouteille est nul par rapport à l'ensemble des positions que chaque molécule peut occuper dans l'espace.

!!! note
    Sur Terre, les rayons du soleil constituent un apport en énergie.

Une réaction est spontanée seulement si l'entropie augmente c'est-à-dire $\Delta S_{\mathbf{tot}} \gt 0$ :

$\Delta S _{\mathbf{tot}} = \Delta S_{\mathbf{sys}} + \Delta S_{\mathbf{ext}}$ S entropie en $J.K^{-1}$

!!! warning
    L'entropie peut diminuer dans le système étudié mais augmenter à l'extérieur.

Une réaction réversible lorsque $\Delta S_{\mathbf{tot}} = 0$.

Si l'on considère que le milieu externe est stable et qu'il n'y a pas d'échanges de matière avec le système étudié alors : $S_{\mathbf{ext}} = \frac{Q}{T}$ pour connaitre la variation d'entropie entre un état initial et un final, il faut : $\Delta S_{\mathbf{ext}} = \int{\frac{Q}{T}}$

!!! info
    Déterminer l'entropie du système étudié
    On peut déterminer l'entropie à partir des entropies :
        * Standards mesurées.
        * De réactions intermédiaires.
### Entropie standard

Pour une réaction à température et à pression constante :

$\Delta _r S_T^0 = \sum{\nu_i \cdot S_T^0 ( \mathbf{produits})} - \sum{\nu _i \cdot S_T^0 ( \mathbf{réactifs} )}$

Lorsqu'il y a un changement de température, il faut ajouter une étape :

$\Delta _{r}S_{T2}^{0} = {\mathrm{\Delta}_{r}S}_{T1}^{0} + [ \sum{\nu_ i \cdot C_p(\mathbf{produits})} - \sum{\nu_ i \cdot C_p}(\mathbf{réactifs}) ] \cdot \ln \frac{T_2}{T_1}$

### Réactions intermédiaires

Par la combinaison linéaire de réactions. Cela revient à passer par des réactions intermédiaires.
## Enthalpie libre

À pression et à température constante, lorsqu'une réaction se déroule dans un milieu stable, la différence d'entropie du milieu extérieur égale à l'énergie reçue du système étudié c'est-à-dire $\Delta S_{\mathbf{ext}} = - \frac{\Delta H}{T}$

Pour qu'une réaction soit spontanée, on aura :

$\Delta S_{\mathbf{tot}} = \Delta S_{\mathbf{sys}} - \frac{\Delta H_{\mathbf{sys}}}{T} \gt 0$

Ce qui revient à calculer l'enthalpie libre

$\Delta G =\Delta H_{\mathbf{sys}} - T \cdot \Delta S_{\mathbf{sys}} \lt 0$   
Avec 

* $\Delta G$ enthalpie libre en $J \cdot mol^{-1}$.

On a donc $\Delta G \lt 0$ alors la réaction est spontanée autrement dit l'énergie va se dissiper.

## Équilibre chimique

L'état d'équilibre (ou final) d'une réaction correspond à une enthalpie minimale. L'évolution de l'enthalpie d'une réaction permet de connaitre son avancement.

### Potentiel chimique

Le potentiel chimique d'un constituant permet d'étudier la stabilité d'une espèce chimique :

$\mu _i = \frac{dG}{{dn}_i}$

La mesure du potentiel chimique de chaque composant a été déterminée à T=298K et P=1Bar. Elle est notée $\mu _i^0$.

La différence d'enthalpie libre correspond à la différence de potentiels chimiques entre les produits et les réactifs :

$\Delta _r G = \sum{\nu _i \cdot \mu _i (produits)} - \sum {\nu _i \cdot \mu_i (réactifs)}$

Il vari en cas de changement de la pression du milieu :
$\mu _i = \mu _i^0 + R \cdot T \cdot \ln a_i$

$a_i$ correspond à l'activité de l'espèce chimique. Il vaut si c'est :

* Solide
* Liquide :
    * $a_i = 1$ avec pour le solvant $a_i = 1$
    * pour le soluté $a_{i} = \frac{[i]}{C_0}$, $[i]$ la concentration de l'espèce active. $C_0 = 1 mol \cdot L^{-1}$ 
* Gaz $a_i = \frac{P_i}{P_0}$ avec $P_i$ la pression partielle, $P_0 = 1 Bar$

!!! note 
    $C_0$ et $P_0$ permettent d'obtenir une valeur sans unité.
#### La pression partielle

La pression partielle d'un gaz se calcule de la manière suivante :

$x_i$ fraction molaire = $p_i = x_i \cdot p_{tot}$

Avec : 

$\frac{n_i}{n_{tot}}$ avec $n$ le nombre de mol
$P_{tot}$ est la pression totale du mélange (réactifs + inerte).

!!! note
    Pour calculer les pressions partielles en utilisant la relation des gaz parfaits ($\frac{P_{ini} \cdot V}{P_{eq} \cdot V}$) à $t_0$ ou $t_{ini} et $t_{final}$ ou $t_{eq}$. Pour cela, on a besoin de connaitre la quantité de matière à $t_0$ et $t_{final}$, on aura alors $P_{eq} = \frac{{(n_{tot})}_{ini}}{{(n_{tot})}_{eq}} \times P_{ini}$.

## Quotient réactionnel

Le quotient réactionnel permet de caractériser l'avancement de la réaction noté $Q_r$.

$\Delta _r G = \sum{\nu _i \cdot \mu _i} (produits) - \sum{\nu _i \cdot \mu_i} (réactifs) = \Delta _r G^0 + R \cdot T \cdot \ln Q_r$

C'est le rapport entre les produits et les réactifs.

$Q_r = \frac{{\prod_{a_i} (produits)} ^{\nu _i}} {{\prod_{a_i}(réactifs)}^{\nu _i}}$

### Constante d'équilibre

L'équilibre d'une solution $\Delta _r G = 0$ lorsqu'il n'y a plus de variation de l'enthalpie. Le quotient réactionnel est noté : $K = Q_r$ .

$\Delta _r G^0 = - R \cdot T \cdot \ln K$

!!! note
    La constante d'équilibre K peut s'obtenir en passant par des réactions intermédiaires. Attention, la somme et la différence deviennent des puissances.

!!! note 
    Le coefficient d'équilibre pour la réaction inverse est : $\frac{1}{K_1} = K_2$

Lorsque K :

* $K \gt 1$ les produits majoritaires.
* $K \lt 1$ les réactifs majoritaires.

La réaction est totale pour $< 10^{-3}$ ou $\gt 10^3$.

## Modification des conditions de la réaction

L'équilibre est modifié lorsque l'on change :

* La température.
* La concentration des réactifs/produits.    
* La pression.

Il se déplacera de manière à compenser l'augmentation ou la diminution.

!!! example
    Pour une augmentation de la pression, il faudra déterminer la réaction qui produit le moins de matière. La modification de pression peut se faire par trois moyens :

    * Ajout d'un gaz inerte.
    * Compression de volume.
    * Ajout d'un constituant de la réaction.

!!! warning 
    L'ajout d'un gaz inerte à pression constante modifie les pressions partielles.

### Tableau d'avancement

Pour suivre une réaction, on utilise généralement un tableau d'avancement :

Temps          | Réactifs → Produits
---------------|--------------------------
$t = 0$        | Nbre de mol ou pression partielle
$t(x)$$        |
$t_{final}$    |

Le réactif limitant permet de déduire la quantité de matière obtenue.

Taux d'avancement = coefficient de dissociation

Effet de la température : $\ln K - \ln K^{'} = \frac{\Delta _r H^0}{R}(\frac{1}{T} - \frac{1}{T'})$
