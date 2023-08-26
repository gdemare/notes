# Thermodynamique

La thermodynamique est un domaine de la chimie qui permet de prévoir si une transformation chimique peut avoir lieu sans déterminer sa composition ou sa vitesse.

__Variable intensive__ (par opposition à extensive) variable indépendante de la quantité de matière (température, pression, le volume,...)

!!! note
    Le produit de deux variables extensives est une variable intensive (ex : la masse volumique).

__Phase__ partie d'un système où les variables intensives sont des fonctions constantes.

__Capacité thermique__ variable intensive qui quantifie la quantité de chaleur qu'une matière estcapable d'échanger.

Par défaut, la température est de 298K et la pression de 1atm.

__État standard__ pression atmosphérique et température 298K.

Rappel : Pour les gaz parfaits, on a : $pV = nRT$

Avec :

* V volume en $m^{3}$.
* n quantité de matière en mole.
* T température en Kelvin (0K = -273,15°C).
* $R = 8.314J K^{-1}.mol^{-1}$ constante des gaz parfaits.

La masse molaire des principaux atomes est :

Atome     | Masse molaire ($g.mol^{-1}$)
----------|-----------------------------
Hydrogène | 1
Carbone   | 14
Oxygène   | 16

## 1er principe de la thermodynamique : la conservation de l'énergie

L'énergie interne d'un système est notée U. Elle est dû à :

* L'énergie cinétique (mouvement).
* Interactions entre les particules.

Il n'est pas possible de déterminer l'énergie d'un système. En revanche, il est possible de connaitre la différence d'énergie entre deux états.

L'énergie d'un système peut être échangée sous deux formes :

* Énergie thermique = Chaleur (Q)
* Énergie mécanique = Travail (W)

On définit cette différent d'énergie :
$\mathrm{\Delta}U = \mathbf{\mathrm{\Delta}}Q + \mathbf{\mathrm{\Delta}}W$

!!! note
    L'unité de l'énergie est le Joule (J).

Dans le cas d'une réaction cyclique, on a $\sum_{}^{}{\mathrm{\Delta}U} = 0$.

## La nature des transformations possibles

Nature transformation   | Description                  | Implication                 
------------------------|------------------------------|-------------------
Isotherme               | Pas de changement de T°      | $T{^\circ} = cste$
Isochore                | Volume constant              | $$V = cste$$
Adiabatique             | Pas d'échanges de chaleur    | $$Q = 0$$
Isobare                 | Pression constante           | $$P = cste$$

## Le travail (uniquement pour les gaz)

La notion de travail s'applique uniquement aux gaz car ils sont les seuls à subir une variation importante de volume : $$\mathbf{\mathrm{\Delta}W = - PdV}$$ avec P pression (Pa).

!!! example 
    pour une réaction isobare, on aura $\ \mathrm{\Delta}W = - PdV = - P \times \frac{nRT}{P} = - nRT$

## La chaleur

La chaleur est une énergie. C'est une notion différente de la
température.

!!! note
    Un changement de T° implique nécessairement un échange de chaleur.

Point méthode : Pour chaque réaction, il faut d'abord noter sa nature (isotherme...)

La chaleur se calcule en utilisant une des formules suivantes :

+----------------------------------+-----------------------------------+
| $$\mathbf{\                      | $$\ma                             |
| mathrm{\Delta}Q = n.}\mathbf{C}_ | thbf{\mathrm{\Delta}Q = n.}\mathb |
| {\mathbf{v}}\mathbf{.dT + PdV}$$ | f{C}_{\mathbf{p}}\mathbf{.dT -}$$ |
|                                  |                                   |
|                                  | $$\mathbf{VdP}$$                  |
+----------------------------------+-----------------------------------+
| -   $\mathrm{\Delta}Q$           |                                   |
|     Différence de chaleur pour   |                                   |
|     trouver la chaleur il est    |                                   |
|     nécessaire d'intégrer.       |                                   |
|     (J.mol^-1^)                  |                                   |
|                                  |                                   |
| -   $P$ Pression (Pa)            |                                   |
|                                  |                                   |
| -   $V$ Volume (m^3^)            |                                   |
|                                  |                                   |
| -   $C_{p}$ Capacité thermique   |                                   |
|     isobare (J.K^-1^)            |                                   |
|                                  |                                   |
| -   $\mathbf{C}_{\mathbf{v}}$    |                                   |
|     Capacité thermique isochore  |                                   |
|     (J.K^-1^)                    |                                   |
|                                  |                                   |
| -   $dT$ différence de           |                                   |
|     température.                 |                                   |
+----------------------------------+-----------------------------------+

!!! note
    $\mathbf{PdV}$ et $\mathbf{VdP}$ sont nulles pour les formes de la matière autre que gazeux.

!!! note
    On a également $R = \mathbf{C}_{\mathbf{p}} - \mathbf{C}_{v}$

### Enthalpie

La plupart des réactions se font à pression constante (transformation isobare).

$$\mathbf{Q}_{\mathbf{p}}\mathbf{= \mathrm{\Delta}H}$$

Enthalpie chaleur échangée à pression constante ($P = 1\ atm$). Elle est notée $\mathrm{\Delta}H$.

Une réaction est :

* Endotherme ($\mathrm{\Delta}H > 0$) elle absorbe de la chaleur.
* Exotherme ($\mathrm{\Delta}H < 0$) elle libère de la chaleur.

# Calculer l'énergie de formation d'une réaction

Quatre méthodes pour déterminer l'enthalpie de réaction :

Méthodes                   | Principe
---------------------------|--------------------
Enthalpie de formation     | Énergie de formation des molécules
Énergie des liaisons       | Somme des liaisons créées et dissociées
Combinaison de réactions   | Combinaison linéaire de réactions intermédiaires.
Energie interne            | Uniquement pour les gaz

!!! note 
  Point méthode : lorsque l'on parle de réaction de formation sans préciser la formule de réaction, il s'agit de faire réagir des corps simples pour obtenir la molécule désirée.

## Enthalpie de formation

Loi de Hess : L'enthalpie de réactions est égale à l'énergie nécessaire
pour former les produits moins celles des réactifs.

+-----------------------------------------------------------------------+
| $$\math                                                               |
| bf{\mathrm{\Delta}}_{\mathbf{r}}\mathbf{H}_{\mathbf{T}}^{\mathbf{0}}\ |
| mathbf{=}\sum_{}^{}\mathbf{\nu}_{\mathbf{i}}{\mathbf{.}\mathbf{\mathr |
| m{\Delta}}_{\mathbf{f}}\mathbf{H}}_{\mathbf{T}}^{\mathbf{0}}\mathbf{( |
| }\mathbf{produits}\mathbf{) -}\sum_{}^{}\mathbf{\nu}_{\mathbf{i}}{\ma |
| thbf{.}\mathbf{\mathrm{\Delta}}_{\mathbf{f}}\mathbf{H}}_{\mathbf{T}}^ |
| {\mathbf{0}}\mathbf{(}\mathbf{r}\mathbf{é}\mathbf{actifs}\mathbf{)}$$ |
+=======================================================================+
| $\mathbf{\nu}$ coefficients stœchiométriques                          |
| ($\mathbf{2}\mathbf{H}_{\mathbf{2}}\mathbf{O}$)                       |
|                                                                       |
| $\mathbf{\mathr                                                       |
| m{\Delta}}_{\mathbf{r}}\mathbf{H}_{\mathbf{0}}^{\mathbf{T}}$enthalpie |
| de réaction                                                           |
|                                                                       |
| ${\mathb                                                              |
| f{\mathrm{\Delta}}_{\mathbf{f}}\mathbf{H}}_{\mathbf{0}}^{\mathbf{T}}$ |
| enthalpie de formation                                                |
+-----------------------------------------------------------------------+

!!! note
  L'enthalpie de formation des corps simples c'est-à-dire de molécules constituées d'un seul type d'atomes est nul ($0 KJ.mol^{-1}$).

Lorsqu'il y a un changement de température, il faut ajouter l'énergie nécessaire pour faire la transformation :

$$\mathbf{\mathrm{\Delta}}_{\mathbf{r}}\mathbf{H}_{\mathbf{0}}^{\mathbf{T}\mathbf{2}}\mathbf{=}{\mathbf{\mathrm{\Delta}}_{\mathbf{r}}\mathbf{H}}_{\mathbf{0}}^{\mathbf{T}} + \lbrack\sum_{}^{}\mathbf{\nu}_{\mathbf{i}}C_{p}\left( \mathbf{produits} \right)\mathbf{-}\sum_{}^{}{\mathbf{\nu}_{\mathbf{i}}C_{p}}\left( \mathbf{r}\mathbf{é}\mathbf{actifs} \right)\mathbf{\rbrack(}\mathbf{T}_{\mathbf{2}}\mathbf{-}\mathbf{T}_{\mathbf{1}}\mathbf{)}$$

$\mathbf{C}_{\mathbf{p}}$ Capacité calorifique en mol^-1^

## Énergie de liaisons

L'idée c'est de déterminer l'énergie de formation à partir de celle nécessaire pour créer ou détruire des liaisons moléculaires. Cette méthode nécessite de connaitre la structure des molécules c'est-à-dire les liaisons électroniques entre les atomes.

!!! note
  L'énergie de dissociations est positive $E_{d} > 0$ car on libère de l'énergie lorsque l'on brise une liaison. Elle est égale à l'opposé de l'énergie de formation de liaisons $E_{f} = {- E}_{d}$.

!!! warning 
  On a généralement l'enthalpie de dissociation des réactions pour les éléments gazeux. Il faut donc réaliser une étape supplémentaire. Le changement d'état pour les autres états de la matière (solide...). Dans ce cas, il faut ajouter l'énergie de la transformation chimique. Il  faudra donc additionner :

  * L'énergie à fournir pour atteindre à la température de changement d'état.
  * L'énergie de changement d'état.
  * L'énergie pour revenir à la température initiale.

## Combinaison de réactions

On peut calculer l'enthalpie en réalisant des combinaisons linéaires de réactions chimiques intermédiaires. L'idée est de sommer des réactions pour obtenir celle désirée.

Lorsqu'un élément est présent à la fois comme réactif et comme produit, il peut être supprimé.

!!! note 
    lorsque l'on inverse une réaction, l'enthalpie change de signe.

!!! note
    Point méthode faire un tableau une colonne « réactif » et une autre « produit ».

## Energie interne

Pour les gaz, à pression constante, on a :

* $$\mathbf{\mathrm{\Delta}H}_{\mathbf{r}}\mathbf{= \mathrm{\Delta}U + \mathrm{\Delta}n.R.T}$$
* $\mathbf{\mathrm{\Delta}n}$ différence de quantité de matière.

# 2ème principe de la thermodynamique : l'entropie

Sans apport d'énergie extérieur, la matière se tend vers un état de
désordre :

* La matière se désorganise
* L'énergie se disperse

On appelle ce désordre, l'entropie et on le note S.

L'entropie est une approche probabiliste du monde. Elle se définit comme l'état ayant la plus grande probabilité d'exister. Si un gaz contenu dans une bouteille est libéré, la probabilité qu'il rentre à nouveau dans la bouteille est nul par rapport à l'ensemble des positions que chaque molécule peut occuper dans l'espace.

!!! note Sur Terre, les rayons du soleil constituent un apport en énergie.

Une réaction est spontanée seulement si l'entropie augmente c'est-à-dire
$\mathbf{\mathrm{\Delta}S}_{\mathbf{tot}}\mathbf{> 0}$ :

$${\mathrm{\Delta}\mathbf{S}}_{\mathbf{tot}} = {\mathrm{\Delta}\mathbf{S}}_{\mathbf{sys}} + {\mathrm{\Delta}\mathbf{S}}_{\mathbf{ext}}$$   S entropie en $J.K^{-1}$

!!! warning
  L'entropie peut diminuer dans le système étudié mais augmenter à l'extérieur.

Une réaction réversible lorsque
$\mathbf{\mathrm{\Delta}S}_{\mathbf{tot}}\mathbf{= 0}$.

Si l'on considère le milieu externe est comme stable et qui n'échange pas de matière avec le système étudié alors :
$\mathbf{S}_{\mathbf{ext}} = \frac{\mathbf{Q}}{\mathbf{T}}$ pour connaitre la variation d'entropie entre un état initial et un final il faut : ${\mathrm{\Delta}\mathbf{S}}_{\mathbf{ext}} = \int_{}^{}{\frac{\mathbf{Q}}{\mathbf{T}}\ }$

**Déterminer l'entropie du système étudié**

On peut déterminer l'entropie à partir des entropies :

  -------------------------------- --------------------------------------
  Standards mesurées               De réactions intermédiaires

  -------------------------------- --------------------------------------

### Entropie standard

Pour une réaction à température et pression constante :

$$\mathbf{\mathrm{\Delta}}_{\mathbf{r}}\mathbf{S}_{T}^{\mathbf{0}}\mathbf{=}\sum_{}^{}\mathbf{\nu}_{\mathbf{i}}S_{T}^{0}\left( \mathbf{produits} \right)\mathbf{-}\sum_{}^{}\mathbf{\nu}_{\mathbf{i}}S_{T}^{0}\left( \mathbf{r}\mathbf{é}\mathbf{actifs} \right)$$

Lorsqu'il y a un changement de température, il faut ajouter une étape :

$$\mathrm{\Delta}_{r}S_{T2}^{0} = {\mathrm{\Delta}_{r}S}_{T1}^{0} + \left\lbrack \sum_{}^{}\nu_{i}C_{p}(produits) - \sum_{}^{}{\nu_{i}C_{p}}(réactifs) \right\rbrack.ln(\frac{T_{2}}{T_{1}})$$

### Réactions intermédiaires

Par la combinaison linéaire de réactions. Cela revient à passer par des
réactions intermédiaires.

## Enthalpie libre

À pression et à température constante, lorsqu'une réaction se déroule dans un milieu stable, la différence d'entropie du milieu extérieur égale à l'énergie reçu du système étudié c'est-à-dire ${\mathrm{\Delta}\mathbf{S}}_{\mathbf{ext}} = - \frac{\mathrm{\Delta}\mathbf{H}}{\mathbf{T}}$

Pour qu'une réaction soit spontanée, on aura :

$${\mathrm{\Delta}\mathbf{S}}_{\mathbf{tot}} = {\mathrm{\Delta}\mathbf{S}}_{\mathbf{sys}} - \frac{{\mathrm{\Delta}\mathbf{H}}_{\mathbf{sys}}}{\mathbf{T}} > 0$$

Ce qui revient à calculer l'enthalpie libre

$\mathbf{\mathrm{\Delta}G =}\mathbf{\mathrm{\Delta}H}_{\mathbf{sys}}\mathbf{- T}\mathbf{\mathrm{\Delta}S}_{\mathbf{sys}}\mathbf{< 0}$   
$\mathbf{\mathrm{\Delta}G}$

enthalpie libre en $J.mol^{-1}$

On a donc $\mathrm{\Delta}\mathbf{G} < \mathbf{0}$ alors la réaction est spontanée autrement dit l'énergie va se dissiper.

# Équilibre chimique

L'état d'équilibre (ou final) d'une réaction correspond à une enthalpie
minimale. L'évolution de l'enthalpie d'une réaction permet de connaitre
son avancement.

## Potentiel chimique

Le potentiel chimique d'un constituant permet d'étudier la stabilité
d'une espèce chimique :

$$\mu_{i} = \frac{dG}{{dn}_{i}}$$

La mesure du potentiel chimique de chaque composant a été déterminée à
T=298K et P=1Bar. Elle est notée $\mu_{i}^{0}$.

La différence d'enthalpie libre correspond à la différence de potentiel chimique entre les produits et les réactifs :

$$\Delta_{r}G = \sum_{}^{}\nu_{i}\mu_{i}(produits) - \sum_{}^{}\nu_{i}\mu_{i}(réactifs)$$

Il vari en cas de changement de la pression du milieu :
$\mu_{i} = \mu_{i}^{0} + RT.ln(a_{i})$

$a_{i}$ correspond à l'activité de l'espèce chimique. Il vaut si c'est :

+---------------+------------------------------+-----------------------+
| Solide        | Liquide                      | Gaz                   |
+===============+==============================+=======================+
| $$\mathbf{a}_ |   ----                       | $$a_{i} =             |
| {\mathbf{i}}\ | ---------------------------- | \frac{P_{i}}{P_{0}}$$ |
| mathbf{= 1}$$ | ---------------------------- |                       |
|               |   Solvant         Soluté     | $P_{i}$ la pression   |
|               |   ----                       | partielle             |
|               | ----------- ---------------- |                       |
|               | ---------------------------- | $P_{0}$ = 1 Bar       |
|               |   $$                         |                       |
|               | a_{i} = 1$$   $$a_{i} = \fra |                       |
|               | c{\lbrack i\rbrack}{C_{0}}$$ |                       |
|               |                              |                       |
|               |   ----                       |                       |
|               | ---------------------------- |                       |
|               | ---------------------------- |                       |
|               |                              |                       |
|               | $\lbrack i\rbrack$ la        |                       |
|               | concentration de l'espèce    |                       |
|               | active.                      |                       |
|               |                              |                       |
|               | $C_{0}$ = 1 mol/L            |                       |
+---------------+------------------------------+-----------------------+

[Rmq :]{.underline} $C_{0}$ et $P_{0}$ permettent d'obtenir une valeur
sans unité.

### La pression partielle

La pression partielle d'un gaz se calcule de la manière suivante :

+---------------+------------------------------------------------------+
| $             | $x_{i}$ fraction molaire =                           |
| $p_{i} = x_{i | $\frac{n_{i}}{n_{tot}}\ a$vec $n$ le nombre de mol   |
| }{.p}_{tot}$$ |                                                      |
|               | $P_{tot}$ est la pression totale du mélange          |
|               | (réactifs + inerte).                                 |
+---------------+------------------------------------------------------+

!!! note
  Pour calculer les pressions partielles en utilisant la relation des gaz parfaits ($\frac{P_{ini}V}{P_{eq}V}$) à t~0\ ou\ ini~ et t~final\ ou\ eq~. Pour cela, on a besoin de connaitre la quantité de matière à t~0~ et t~final~, on aura alors $P_{eq} = \frac{{(n_{tot})}_{ini}}{{(n_{tot})}_{eq}} \times P_{ini}$.

## Quotient réactionnel

Le quotient réactionnel permet de caractériser l'avancement de la réaction noté $Q_{r}$.

$$\Delta_{r}G = \sum_{}^{}\nu_{i}\mu_{i}(produits) - \sum_{}^{}\nu_{i}\mu_{i}(réactifs) = \Delta_{r}G^{0} + RT.ln(Q_{r})$$

C'est le rapport entre les produits et les réactifs.

$$Q_{r} = \frac{\prod_{}^{}{a_{i}(produits)}^{\nu_{i}}}{\prod_{}^{}{a_{i}(réactifs)}^{\nu_{i}}}$$

### Constante d'équilibre

L'équilibre d'une solution $\Delta_{r}G = 0$ lorsqu'il n'y a plus de
variation de l'enthalpie. Le quotient réactionnel est noté :
$K = Q_{r}\ $ .

$$\Delta_{r}G^{0} = - RT.ln(K)$$

!!! note
  La constante d'équilibre K peut s'obtenir en passant par des réactions intermédiaires. Attention, la somme et la différence deviennent des puissances.

!!! note 
  Le coefficient d'équilibre pour la réaction inverse est : $\frac{1}{K_{1}} = K_{2}$

Lorsque K :

* $K\>1$ les produits majoritaires.
* K\<1les réactifs majoritaires.

La réaction est totale pour $< 10^{- 3}$ ou ${> 10}^{3}$

## Modification des conditions de la réaction

L'équilibre est modifié lorsque l'on change :

* La température.
* La concentration des réactifs/produits.    
* La pression.

Il se déplacera de manière à compenser l'augmentation ou la diminution.

!!! example
  Pour une augmentation de la pression, il faudra déterminer la réaction qui produit le moins de matière.*

La modification de pression peut se faire par trois moyens :

* Ajout d'un gaz inerte.
* Compression de volume.
* Ajout d'un constituant de la réaction.

!!! warning 
  L'ajout d'un gaz inerte à pression constante modifie les pressions partielles.

### Tableau d'avancement

Pour suivre une réaction, on utilise généralement un tableau
d'avancement :

  -----------------------------------------------------------------------
  Temps                               Réactifs → Produits
  ----------------------------------- -----------------------------------
  $$= 0$$                             nbre de mol ou pression partielle

  $$t(x)$$                            

  $$t_{final}$$                       
  -----------------------------------------------------------------------

Le réactif limitant permet de déduire la quantité de matière obtenue.

Taux d'avancement = coefficient de dissociation

Effet de la température :

$$lnK - lnK^{'} = \frac{\Delta_{r}H^{0}}{R}(\frac{1}{T} - \frac{1}{T^{'}})$$

# Équilibre acido-basique

__Amphotère__ espèce chimique capable de réagir avec elle-même.

L'autoprotolyse de l'eau est une réaction spontanée de

$$2H_{2}O \rightleftharpoons H_{3}O^{+} + HO^{-}$$

Son
$K_{e} = \frac{\left\lbrack H^{3}O^{+} \right\rbrack\left\lbrack HO^{-} \right\rbrack}{{\lbrack H^{2}O\rbrack}^{2}} = 10^{- 14}$
comme H~2~O est le soluté alors $a_{H2O} = 1$.

## Acide Base

Dans l'eau,

  ---------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------
  Un acide libère un proton donc apparition de $H_{3}O^{+}$                                Une base capte un proton donc apparition de $HO^{-}$

  $$K_{a} = \frac{{\lbrack H}_{3}O^{+}\rbrack.\lbrack A^{-}\rbrack}{\lbrack AH\rbrack}$$   $$K_{b} = \frac{\lbrack HO^{-}\rbrack.\lbrack AH\rbrack}{\lbrack A^{-}\rbrack}$$
  ---------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------

[Rmq :]{.underline} $K_{e} = K_{a}.K_{b} = 10^{- 14}$

La fonction $p = - log$

On définit le pH :

$$pH = - log({\lbrack H}_{3}O^{+}\rbrack) = pK_{a} + log(\frac{\left\lbrack A^{-} \right\rbrack}{\lbrack AH\rbrack})$$

+-----------------------------------------------------------------------+
| *Exemple* classique pour déterminer le pH d'une solution auquel on    |
| ajoute C d'une base                                                   |
|                                                                       |
| $$A^{-} + H_{2}O \leftrightarrow AH + {HO}^{-}$$                      |
|                                                                       |
|   --------------- -----------                                         |
| --------------------------- --------------------------------------- - |
| ---------------------- ---------------------------------------------- |
|   Espèces         $$\left\l                                           |
| brack A^{-} \right\rbrack$$   $$\left\lbrack H_{2}O \right\rbrack$$   |
|  $$\lbrack AH\rbrack$$   $$\mathbf{\lbrack}{HO}^{-}\mathbf{\rbrack}$$ |
|                                                                       |
|   Concentration   $$\mathbf{c} - x$$                                  |
|                                         $$x$$                   $$x$$ |
|   --------------- -----------                                         |
| --------------------------- --------------------------------------- - |
| ---------------------- ---------------------------------------------- |
|                                                                       |
| $$K_{b} = \frac{\left\lbrack HO^{-} \right\rbrack.\lbr                |
| ack AH\rbrack}{\left\lbrack A^{-} \right\rbrack} = \frac{x²}{c - x}$$ |
|                                                                       |
| Calcul du pH avec autoprotolyse de l'eau                              |
|                                                                       |
| Dans le cas où l'autoprotolyse de l'eau n'est pas négligeable, il     |
| faut l'ajouter :                                                      |
|                                                                       |
| $$2H_{2}O \leftrightarrow {HO}^{-} + {H_{3}O}^{+}$$                   |
|                                                                       |
|   ----                                                                |
| --------------------------------------------------------------------- |
| --------------------------------------------------------------------- |
|   Es                                                                  |
| pèces          $$\mathbf{H}_{\mathbf{2}}\mathbf{O}$$   $$\mathbf{HO}^ |
| {\mathbf{-}}$$   $${\mathbf{H}_{\mathbf{3}}\mathbf{O}}^{\mathbf{+}}$$ |
|   ----                                                                |
| ------------ --------------------------------------- ---------------- |
| -------------- ------------------------------------------------------ |
|   Concentration                                                       |
|                                  $$y$$                          $$y$$ |
|                                                                       |
|   ----                                                                |
| --------------------------------------------------------------------- |
| --------------------------------------------------------------------- |
|                                                                       |
| Ainsi, on doit résoudre l'équation du second degré : $                |
| $$$K_{e} = \left\lbrack H_{3}O^{+}                                    |
| \right\rbrack\left\lbrack {HO}^{-} \right\rbrack = y \times (x + y)$$ |
|                                                                       |
| Dans le cas d'une base forte, on aurait :$                            |
| K_{e} = \left\lbrack H_{3}O^{+}                                       |
|  \right\rbrack\left\lbrack {HO}^{-} \right\rbrack = y \times (c + y)$ |
| ce qui équivaut un résoudre un polynôme du second degré.              |
+-----------------------------------------------------------------------+

!!! note
  Plus le pKa est élevé plus l'acide est fort.

En considérant que pour les acides et bases :

* Forts : ils réagissent à 100%.
* Faibles : la diminution de concentration de la base et de l'acide est négligeable.

L'autoprotolyse de l'eau est négligeable lorsque la concentration des
espèces est $C{> 10}^{- 6}$ mol/L, on a alors

  -----------------------------------------------------------------------------------------------------------------
            Fort $\mathbf{p}\mathbf{K}_{\mathbf{a}}\mathbf{< 0}$ ou    Faible
            $\mathbf{p}\mathbf{K}_{\mathbf{a}}\mathbf{>}\mathbf{14}$   
  --------- ---------------------------------------------------------- --------------------------------------------
  Acide     $$pH = {- log}c$$                                          $$\ pH = \frac{1}{2}(pK_{a} - \log c)$$

  Base      $$pH = 14 + \log c$$                                       $$pH = \frac{1}{2}(14 + pK_{a} + \log c)$$
  -----------------------------------------------------------------------------------------------------------------

!!! note
  $H = \lbrack{H_{3}O}^{+}\rbrack = \frac{K_{e}}{\lbrack{HO}^{-}\rbrack}$

!!! note
  Pour un acide ou une base forte, le coefficient réactionnel n'a pas de sens à l'équilibre car il faudrait diviser par 0.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            $$\mathbf{\lbrack AH\rbrack}$$   $$\mathbf{+}$$   $$\mathbf{H}_{\mathbf{2}}\mathbf{O}$$   $$\mathbf{\rightleftarrows}$$   $$\mathbf{\lbrack}\mathbf{A}^{\mathbf{-}}\mathbf{\rbrack}$$   $$\mathbf{+}$$   $${\mathbf{H}_{\mathbf{3}}\mathbf{O}}^{\mathbf{+}}$$
  --------- -------------------------------- ---------------- --------------------------------------- ------------------------------- ------------------------------------------------------------- ---------------- ------------------------------------------------------
  t~0~      $$c$$                                             $$\varepsilon$$                                                         $$0$$                                                                          $$0$$

  t=eq      $$c - x$$                                         $$\varepsilon$$                                                         $$x$$                                                                          $$x$$
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

A l'équilibre, il y a :

$$K = \frac{\left\lbrack {H_{3}O}^{+} \right\rbrack.\lbrack A^{-}\rbrack}{\lbrack AH\rbrack} = \frac{x²}{c - x}$$

On remarque que $K = K_{a}$ du couple acide base noté
${pK}_{a}(AH/A^{-})$.

On résout l'équation du second pour déterminer
$\left\lbrack {H_{3}O}^{+} \right\rbrack = x$.

En fonction du soluté que l'on ajoute, si celui-ci est

Généralement lorsque le pH n'appartient pas à
$\lbrack pKa \pm 1\rbrack$. On peut négliger $x \ll c$ ce qui évite de
calculer.

Pour les bases, il faudra utiliser en plus :

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  $$\mathbf{K}_{\mathbf{e}}\mathbf{=}\left\lbrack \mathbf{H}_{\mathbf{3}}\mathbf{O}^{\mathbf{+}} \right\rbrack\mathbf{\times}\left\lbrack \mathbf{H}\mathbf{O}^{\mathbf{-}} \right\rbrack$$   $$\mathbf{K}_{\mathbf{e}}\mathbf{=}\mathbf{K}_{\mathbf{a}}\mathbf{\times}\mathbf{K}_{\mathbf{b}}$$
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Diagramme de prédominance

$$K_{a} = \frac{\left\lbrack {H_{3}O}^{+} \right\rbrack.\left\lbrack A^{-} \right\rbrack}{\left\lbrack A^{-} \right\rbrack} \Leftrightarrow \left\lbrack {H_{3}O}^{+} \right\rbrack = K_{a}\frac{\lbrack AH\rbrack}{\left\lbrack A^{-} \right\rbrack} \Leftrightarrow - \log\left\lbrack {H_{3}O}^{+} \right\rbrack = - \log K_{a} + \log\frac{\left\lbrack A^{-} \right\rbrack}{\lbrack AH\rbrack}$$

Ainsi, on
a $pH = pK_{a} + \log\frac{\left\lbrack A^{-} \right\rbrack}{\lbrack AH\rbrack}$

On remarque que lorsque $\left\lbrack A^{-} \right\rbrack = \lbrack AH\rbrack$, on a $pH = pK_{a}$

## Solution avec deux acides ou deux bases

Pour calculer le pH d'une solution avec plusieurs acides ou plusieurs
bases :

1. On écrit les tableaux de réactions.
2. Il suffit de calculer le nombre de HO- ou H3O+ produit $x_{1} + x_{2}$
3. Pour chaque réaction on détermine respectivement la valeur $x_{1}$, $x_{2}$ puis on additionne le tout.

## Solution tampon

Une solution tampon est une solution avec un

## Déterminer la concentration de base ou d'acide d'une solution

La déterminer de la concentration inconnu en base ou d'acide.

Il s'agit de faire réagir toutes les molécules de la solution inconnue c'est-à-dire qu'il y aura la même quantité de matière : $n_{inconnu} = n_{ajouté}$ (où ecrit différement $c_{i}.v_{i} = c_{a}.v_{a}$).

Ce point est appelé équivalence.

La réaction doit être totale.

!!! note
  Pour que la réaction soit totale on utilise des acides et des bases fortes.

L'ajout du composé se fait progressivement.

1/, les est neutralisé par la substance inconnue.

2/ La

3/ en excédant

Représentation graphique

## Autoprotolyse

Dans une même molécule le transfert d'un proton d'une molécule a une
autre.

Pour l'eau, à 25 degrés :
$\left\lbrack H_{3}O^{+} \right\rbrack = \left\lbrack HO^{-} \right\rbrack = 10^{- 7}$mol/l

## pH acide base

![Une image contenant texte Description générée
automatiquement](media/image2.jpeg){width="3.3333333333333335in"
height="1.882159886264217in"}

NB acide/base n'ont rien à voir avec une solution acide/basique qui la
quantité de proton présent dans une solution :

* Un acide est dit dissocié
* Une base est dite associée

Un acide ou une base sont dits forts s'ils réagissent totalement avec
l'eau.

Autoprotolyse de l'eau

Constante d'équilibre                                                                                

  $$\left\lbrack H_{3}O^{+} \right\rbrack = \left\lbrack HO^{-} \right\rbrack = 10^{7}$$                              $$K_{a} = \frac{\left\lbrack {H_{3}O}^{+} \right\rbrack.\lbrack AH\rbrack}{\lbrack A^{-}\rbrack}$$   $$K_{b} = \frac{\left\lbrack {HO}^{-} \right\rbrack.\lbrack{AH_{2}}^{+}\rbrack}{\lbrack AH\rbrack}$$

  $$K_{e} = K_{a} \times K_{b} = \ \left\lbrack H_{3}O^{+} \right\rbrack \times \left\lbrack HO^{-} \right\rbrack$$                                                                                                        
