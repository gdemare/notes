### Fonction exponentielle

La fonction exponentielle est une fonction qui associe un nombre à son
doublement (taux d'accroissement). C'est exactement comment le taux
d'intérêt d'un livret. L'intérêt dépend de l'argent du compte : plus il
y a d'argent plus la valeur de l'accroissement du compte sera élevé.

Pour une valeur qui 1 qui double à

$1 + 1 = 2$

$$\left( 1 + 1 \times \frac{1}{2} \right) + (1 + 1 \times \frac{1}{2}) \times \frac{1}{2} = {(1 + \frac{1}{2})}^{2}$$

$$\left( 1 + 1 \times \frac{1}{3} \right) + \left( 1 + 1 \times \frac{1}{3} \right) \times \frac{1}{3} + \lbrack\left( 1 + 1 \times \frac{1}{3} \right) + \left( 1 + 1 \times \frac{1}{3} \right) \times \frac{1}{3}\rbrack \times \frac{1}{3} = {(1 + \frac{1}{3})}^{3}$$

La généralisation des calculs précédent conduit à :
${(1 + \frac{1}{n})}^{n}$

La fonction exponentielle est$\lim_{n \rightarrow \infty}{\ {(1 + \frac{1}{n})}^{n}} = e( \approx 2,718\ldots)$

!!! note
  L'exponentiel et le logaritme sont systmétrique par rapport à $f(x) = x$.

### Logarithme

Le logarithme népérien a été inventé pour simplifier le produit lors q. Il donne une correspondance entre deux opérations élémentaires : le produit et la somme.

Axe multiplicatif | Puissance | Axe additif
---|---|---
1 | $2^{0}$ | 0
2 | $2^{1}$ | 1
4 | $2^{2}$ | 2
8 | $2^{3}$ | 3
16 | $2^{4}$ | 4
32 | $2^{5}$ | 5
64 | $2^{6}$ | 6
128 | $2^{7}$ | 7
256 | $2^{8}$ | 8
512 | $2^{9}$ | 9

_Exemple_ On cherche à calculer 8x2

1. On 2 correspond à 1 et 8 correspond à 3
2.  1+3=4
3.  4 correspond 16

!!! note
  Les valeurs du log étaient regroupées dans des tables. Elles permirent de gagner un temps considérable dans les calculs avant l\'invention des calculateurs.

## Équation différentielle

Equation différentielle | Solution | Description
---|---|---
$y^{'} + Ay = 0$ | $y = ke^{- ax}$ | equation différentielle d'ordre 2

## Arithmétique

### Sommes remarquables

* Somme des premiers entiers $\sum_{\mathbf{k = 1}}^{\mathbf{n}}{\mathbf{k =}\frac{\mathbf{n\  \times \ (n - 1)}}{\mathbf{2}}}$
* Somme des q puissances $\sum_{k = 0}^{n}{q^{n} = \frac{1 - q^{n + 1}}{1 - q}}$ 
* Nbre d'éléments $\sum_{k = 1}^{n}{} = (n - k + 1)$

##  Les suites

* Suite arithmétique
* Suite géométrique
+----------------------------------+-----------------------------------+
|  |  |  |    |  |  |  |  |  |
+==================================+===================================+
| $$\mathbf{u}_{\math |  |  |   | $ |  |  |  |  |  |  |  |  |
| bf{n + 1}}\mathbf{= \ }\mathbf{u | $u_{n + 1} = \ {q \times u}_{n}$$ |
| }_{\mathbf{n + 1}}\mathbf{+ a}$$ | |  |  |  |  |  |  |  |    |
| |  |  |  |  |  |  |  |   | $$u_{n} = |  |  |  |  |  |  |
| $$\ma |  |  |  |  |  |  | |  u_{n_{0}} \times q^{n - n_{0}}$$ |
| thbf{u}_{\mathbf{n}}\mathbf{= \  | |  |  |  |  |  |  |  |    |
| }\mathbf{u}_{\mathbf{n}_{\mathbf | |  |  |  |  |  |  |  |    |
| {0}}}\mathbf{+ a \times (n -}\ma | |  |  |  |  |  |  |  |    |
| thbf{n}_{\mathbf{0}}\mathbf{)}$$ | |  |  |  |  |  |  |  |    |
+----------------------------------+-----------------------------------+

### Raisonnement par récurrence

1. Initialisation 
2. Hérédité $\mathbf{P(u}\_{\mathbf{0}}\mathbf{)}$

1. Démontrer $u_{n + 1}$ (l'écrire)
2. Partir $u_{n}$ en ajoutant des termes.

## Symboles mathématiques 

### Les connecteurs logiques

+------------------+---------------------------------------------------+
| $$\mathbf{A}\ov  | -   $A$ est une condition suffisante de $B$. |   |
| erset{}{\Rightar | |  |  |  |  |  |  |  |  |  |  |  |    |
| row}\mathbf{B}$$ | -   B \_\_\_\_\_\_\_\_\_\_\_\_\_\_ nécessaire |  |
| |  |  |  |   | |  \_\_ $A$. |  |  |  |  |  |  |  |  |  |
+------------------+---------------------------------------------------+
| $$\mathbf{A}\ov  | FAUX seulement si $A\ $est Vraie implique $B$ est |
| erset{}{\Rightar | Faux. |  |  |  |  |  |  |  |  |  |  |  |
| row}\mathbf{B}$$ | |  |  |  |  |  |  |  |  |  |  |  |    |
+------------------+---------------------------------------------------+
| $$\mathbf{ |    | Négation |  |  |  |  |  |  |  |  |  |   |
| A\ et\ non(B)}$$ | |  |  |  |  |  |  |  |  |  |  |  |    |
+------------------+---------------------------------------------------+
| $$\mathbf{ |    | Contraposée est vrai seulement si |  |  |  |  |
| non}\left( \math | $A\overset{}{\Rightarrow}B$ l'est aussi |  |    |
| bf{B} \right)\ma | |  |  |  |  |  |  |  |  |  |  |  |    |
| thbf{\ }\overset | |  |  |  |  |  |  |  |  |  |  |  |    |
| {}{\Rightarrow}\ | |  |  |  |  |  |  |  |  |  |  |  |    |
| mathbf{non(A)}$$ | |  |  |  |  |  |  |  |  |  |  |  |    |
+------------------+---------------------------------------------------+
| $$\ov |  |  | | Réciproque |  |  |  |  |  |  |  |  |  | |
| erset{}{\Rightar | |  |  |  |  |  |  |  |  |  |  |  |    |
| row}\mathbf{A}$$ | |  |  |  |  |  |  |  |  |  |  |  |    |
+------------------+---------------------------------------------------+

## Lettres grecques

  --------------------------------------------------------------------------
  Α |  | Α |    Alpha |  |  |  |  | Ξ |  |   ξ |  | Xi
  -------- ------- --------------- -------- ---------- -------- ------------
  Β |  | β |    Bêta |  |  |  |  |  **Π** |   π |  | Pi

  Γ |  | γ |    Gamma |  |  |  |  | **Ρ** |   ρ |  | Rhô

  Δ |  | δ |    Delta |  |  |  |  | **Σ** |   σ/ς |   Sigma

  Ε |  | ε |    Epsilon |  |  |  |   **Τ** |   τ |  | Tau

  Θ |  | θ |    Thêta |  |  |  |  | **Υ** |   υ |  | Upsilon

  Κ |  | κ |    Kappa |  |  |  |  | **Φ** |   φ |  | Phi

  Λ |  | λ |    Lambda |  |  |  |    **Χ** |   χ |  | Xi

  Μ |  | μ |    Mu |  |  |  |  |    **Ψ** |   ψ |  | Psi

  Ν |  | ν |    Nu |  |  |  |  |    **Ω** |   ω |  | Oméga
  --------------------------------------------------------------------------

## Unité et conversion

+-----------------------------------+----------------------------------+
|   ------------------------------  | Relation surface : |  |  |    |
| --------------------------------- | 1${ |  |  |  |  |  |  |   |
|   kilo |    k |  |  |  |  | | km}^{2} = {{(10}^{3})}^{2}m^{2}$ |
| | $$\mathbf{10}^{\mathbf{- 3}}$$ | |  |  |  |  |  |  |  |   |
|   ---------- --------- ---------  | Relation volume : |  |  |  | |
| --------------------------------- | $1{ |  |  |  |  |  |  |   |
|   Hecto |   h |  |  |  |  | | km}^{3} = {{(10}^{3})}^{3}m^{3}$ |
| | $$\mathbf{10}^{\mathbf{- 2}}$$ | |  |  |  |  |  |  |  |   |
| |  |  |  |  |  |  |  |    | Relation avec le litre  |  |   |
|   Déca |    da |  |  |  |    | |  |  |  |  |  |  |  |   |
| | $$\mathbf{10}^{\mathbf{- 1}}$$ | -   $1L = 1{dm}^{3}$ |  |  |  |
| |  |  |  |  |  |  |  |    | |  |  |  |  |  |  |  |   |
|   Unité |  |  |  | $$\math | | -   1L = 1 kg d'eau |  |  |   |
| bf{10}^{\mathbf{0}}\mathbf{= 1}$$ | |  |  |  |  |  |  |  |   |
| |  |  |  |  |  |  |  |    | |  |  |  |  |  |  |  |   |
|   Déci |    d |  |  |  |  | | |  |  |  |  |  |  |  |   |
| |   $$\mathbf{10}^{\mathbf{1}}$$ | |  |  |  |  |  |  |  |   |
| |  |  |  |  |  |  |  |    | |  |  |  |  |  |  |  |   |
|   Centi |   c |  |  |  |  | | |  |  |  |  |  |  |  |   |
| |   $$\mathbf{10}^{\mathbf{2}}$$ | |  |  |  |  |  |  |  |   |
| |  |  |  |  |  |  |  |    | |  |  |  |  |  |  |  |   |
|   Milli |   m |  |  |  |  | | |  |  |  |  |  |  |  |   |
| |   $$\mathbf{10}^{\mathbf{3}}$$ | |  |  |  |  |  |  |  |   |
| |  |  |  |  |  |  |  |    | |  |  |  |  |  |  |  |   |
|   Micro |   μ |  |  |  |  | | |  |  |  |  |  |  |  |   |
| |   $$\mathbf{10}^{\mathbf{6}}$$ | |  |  |  |  |  |  |  |   |
| |  |  |  |  |  |  |  |    | |  |  |  |  |  |  |  |   |
|   Nano |    n |  |  |  |  | | |  |  |  |  |  |  |  |   |
| |   $$\mathbf{10}^{\mathbf{9}}$$ | |  |  |  |  |  |  |  |   |
|   ------------------------------  | |  |  |  |  |  |  |  |   |
| --------------------------------- | |  |  |  |  |  |  |  |   |
+-----------------------------------+----------------------------------+

## Géométrie

### Trigonométrie

$\tan\alpha = \frac{adjacent}{opposé}$
$\sin\alpha = \frac{adjacent}{hypothénuse}$
$\cos\alpha = \frac{adjacent}{hypothénuse}$

### Équation de forme remarquable

  -----------------------------------------------------------------------------------------------
  Cercle de rayon $\mathbf{r}$ et de | $\left( \mathbf{x - a} \right)\mathbf{² + (y - b)²}$=r²
  centre $\mathbf{(a;b)}$ |  |  |    
  ------------------------------------- ---------------------------------------------------------

  -----------------------------------------------------------------------------------------------

+------------------------------+---------------------+----------------+
| Coefficient directeur d'une  | Formule de la |    | Vecteur |  | |
| droite |  |  |  |  |    | droite |  |  |   | directeur |   |
+==============================+=====================+================+
| $$m = \frac{y_{B} |  |  | | $$ax + by + c = 0$$ | $$\overse |   |
|  - y_{A}}{\ x_{B} - x_{A}}$$ | |  |  |  |  |  | t{\rightarrow} |
| |  |  |  |  |  |  |   | |  |  |  |  |  | {vd}( - b;a)$$ |
| $( = - a$ pour $b = 1$). |  | |  |  |  |  |  | |  |  |  | |
+------------------------------+---------------------+----------------+

## Volume

  -----------------------------------------------------------------------
  Forme |  |  |  |  |  |  |    Volume
  ----------------------------------- -----------------------------------
  Sphère |  |  |  |  |  |  |   $$\frac{3}{4}\pi R^{3}$$

  -----------------------------------------------------------------------

## Trigonométrie

+---------------------+------------------------------------------------+
|   ----------- |    | ![](m |  |  |  |  |  |  |  |  |  |   |
| ------------------- | edia/image1.jpeg){width="3.1047615923009624in" |
| ------------------- | height="2.3300185914260716in"} |  |  |  |  |
| ------------------- | |  |  |  |  |  |  |  |  |  |  |  | |
| ------------------- | |  |  |  |  |  |  |  |  |  |  |  | |
| |  |  |  |  |  | |  |  |  |  |  |  |  |  |  |  |  | |
| |  |  |  |  |  | |  |  |  |  |  |  |  |  |  |  |  | |
| |  |    Cos |    | |  |  |  |  |  |  |  |  |  |  |  | |
| |  |  |  |  Sin | |  |  |  |  |  |  |  |  |  |  |  | |
|   ----------- |    | |  |  |  |  |  |  |  |  |  |  |  | |
| ------------------- | |  |  |  |  |  |  |  |  |  |  |  | |
| ------- ----------- | |  |  |  |  |  |  |  |  |  |  |  | |
| ------------- ----- | |  |  |  |  |  |  |  |  |  |  |  | |
| ------------------- | |  |  |  |  |  |  |  |  |  |  |  | |
|   $$ |  |  |  | | |  |  |  |  |  |  |  |  |  |  |  | |
| \frac{\mathbf{\pi}} | |  |  |  |  |  |  |  |  |  |  |  | |
| {\mathbf{6}}$$   $$ | |  |  |  |  |  |  |  |  |  |  |  | |
| \frac{\sqrt{}3}{2}$ | |  |  |  |  |  |  |  |  |  |  |  | |
| $   $$\frac{1}{2}$$ | |  |  |  |  |  |  |  |  |  |  |  | |
| |  |  |  |  |  | |  |  |  |  |  |  |  |  |  |  |  | |
|   $$\frac{\ |  |  | |  |  |  |  |  |  |  |  |  |  |  | |
| mathbf{\pi}}{\mathb | |  |  |  |  |  |  |  |  |  |  |  | |
| f{4}}$$   $$\frac{\ | |  |  |  |  |  |  |  |  |  |  |  | |
| sqrt{}2}{2}$$   $$\ | |  |  |  |  |  |  |  |  |  |  |  | |
| frac{\sqrt{}2}{2}$$ | |  |  |  |  |  |  |  |  |  |  |  | |
| |  |  |  |  |  | |  |  |  |  |  |  |  |  |  |  |  | |
|   $$\frac{\ |  |  | |  |  |  |  |  |  |  |  |  |  |  | |
| mathbf{\pi}}{\mathb | |  |  |  |  |  |  |  |  |  |  |  | |
| f{6}}$$   $$\frac{1 | |  |  |  |  |  |  |  |  |  |  |  | |
| }{2}$$ |  |   $$\ | |  |  |  |  |  |  |  |  |  |  |  | |
| frac{\sqrt{}3}{2}$$ | |  |  |  |  |  |  |  |  |  |  |  | |
|   ----------- |    | |  |  |  |  |  |  |  |  |  |  |  | |
| ------------------- | |  |  |  |  |  |  |  |  |  |  |  | |
| ------------------- | |  |  |  |  |  |  |  |  |  |  |  | |
| ------------------- | |  |  |  |  |  |  |  |  |  |  |  | |
| ------------------- | |  |  |  |  |  |  |  |  |  |  |  | |
+---------------------+------------------------------------------------+

-   Pythagore : ${\cos x}^{2} + {\sin x}^{2} = 1$

  -----------------------------------------------------------------------------------------------------------------------------------------------------
  Cosinus |  |  |  |  |  |  |  |  |  |  |  Sinus |  |  |  |  |  |  |  |  |  |  |  Tangente
  --------------------------------------------------- ------------------------------------------------- -----------------------------------------------
  $$\frac{\mathbf{adjacent}}{\mathbf{hypoténuse}}$$   $$\frac{\mathbf{opposé}}{\mathbf{hypoténuse}}$$   $$\frac{\mathbf{opposé}}{\mathbf{adjacent}}$$

  -----------------------------------------------------------------------------------------------------------------------------------------------------

-   Pour un $\theta + \frac{\mathbf{\pi}}{2}$,
 | $\cos(\theta) = \sin\left( \theta + \frac{\mathbf{\pi}}{2} \right)$
 | et $\sin(\theta) = - \cos(\theta + \frac{\mathbf{\pi}}{2})$

-   $\cos(a + b) = \cos(a).cos(b) - sin(a).sin(b)$

Formule d'Euler (pas compris à quoi elle sert) :

$$e^{xi} = \cos(x) + i.cos(x)$$

$$\cos(x) = \frac{e^{ix} + e^{- ix}}{2}$$

$$sin(x) = \frac{e^{ix} - e^{- ix}}{2i}$$

# Probabilité et statistique

### Les combinaisons

Soit un ensemble E de n éléments. On souhaite connaitre le nombre de
combinaison de k éléments possible. On ne tient pas compte de l'ordre
des éléments.

  ----------------------- ------------------------------------------------------ -----------------------------------------
  Répétition |  |  |   Avec (gamma) |  |  |  |  |  |  |  |  |  |    Sans

  Formule |  |  |  |  $$\Gamma_{n}^{k} = \frac{(n + k - 1)!}{k!(n - 1)!}$$   $$C_{n}^{k} = \begin{pmatrix}
 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  n \\
 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  k \\
 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  \end{pmatrix} = \frac{n!}{k!(n - k)!}$$
  ----------------------- ------------------------------------------------------ -----------------------------------------

### Modèle stochastiques (tirage aléatoire)

Modélisé par la loi Binomiale de paramètre p et 2N

Bernoulli probabilité d'obtenir le nombre de succès k pour une
expérience à deux issues (gagné et perdu) répété n fois de manière
identique et indépendante.

$$P(x = i) = C_{n}^{k}p^{k}{(1 - p)}^{n - k}$$

## Statistique descriptive

  ---------------------------------------------------------------------------------
  Ind. de tendance centrale   Moyenne/Médiane |  |  |  |   
  --------------------------- -------------------------------- --------------------
  Ind. de dispersion |  |   Écart-type ($\sqrt{}variance)$   Moyenne des écarts à
 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |    la moyenne

  ---------------------------------------------------------------------------------

# Ajustement

  -----------------------------------------------------------------------
  Nom |  |  |  |  |  |  |  |  Formule
  ----------------------------------- -----------------------------------
  Exponentiel |  |  |  |  |  |  $${ae}^{- b.x}$$

  -----------------------------------------------------------------------

# Fonctions

## Limites

  -----------------------------------------------------------------------
  4 formes indéterminées |  $\mathbf{- \infty + \infty}$,
 |  |  |  |  |  |  |  $\frac{\mathbf{\infty}}{\mathbf{\infty}}$,
 |  |  |  |  |  |  |  $\frac{\mathbf{0}}{\mathbf{0}}$,
 |  |  |  |  |  |  |  $\mathbf{\infty \times 0}$.
  -------------------------- --------------------------------------------
  ... factoriser |  |  |  

  ... avec des racines |    Multiplié par le conjugué
 |  |  |  |  |  |  |  $(a + \sqrt{}b)(a - \sqrt{b})$

  Limite polynômes en |  | Terme de plus haut degré.
  $\mathbf{\  \pm \infty}$   
  -----------------------------------------------------------------------

## Exponentielle et logarithme

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Exponentielle |  |    $$\mathbf{e}^{\mathbf{a + b}}\mathbf{=}\mathbf{e}^{\mathbf{a}}\mathbf{\times}\mathbf{e}^{\mathbf{b}}\mathbf{\ }$$   $$\mathbf{e}^{\mathbf{a}^{\mathbf{n}}}\mathbf{=}\mathbf{e}^{\mathbf{n \times a}}$$
  ----------------------- ------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------
  Logarithme népérien |  $$\ln\left( \frac{a}{b} \right) = \ln(a) - ln(b)$$ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   $$\ln\left( a^{n} \right) = n \times ln(a)$$

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Les polynômes

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------
  Trouver |  |  |  |  |  |  |  |  |  |  |  0 solution |  |  |  | 1 racine |  |  |  |  |  |  |  |  |  |  |  | 2 racines
  $\mathbf{f}\left( \mathbf{x} \right)\mathbf{= 0}$ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  
  --------------------------------------------------- ------------------------- ------------------------------------------------------- -------------------------
  $$\mathrm{\Delta} = b^{2} - 4ac$$ |  |  |  |    $$\mathrm{\Delta} < 0$$   $$\mathrm{\Delta} = 0$$ |  |  |  |  |  |  |  |  $$\mathrm{\Delta} > 0$$

 |  |  |  |  |  |  |  |  |  |  |  |  |   Racine : |  |  |  |   $$x_{i} = \frac{- b \pm \sqrt{}\mathrm{\Delta}}{2a}$$   
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------

+---------------------------------------+------------------------------+
| ## Identités remarquables |  |  |  | Factoriser et développer |  |
+---------------------------------------+------------------------------+
| ...pour les polyn. (appelé forme |   | Connaitre les variations de  |
| canonique) |  |  |  |  |  |  | | $f(x)$. |  |  |  |  |   |
+---------------------------------------+------------------------------+

## Dérivé et primitive

  ------------ ----------------------------------------------------------
  Dérivée |   Connaitre les variations
 |  |  |    de$\mathbf{\ f}\left( \mathbf{x} \right)$ grâce au signe
 |  |  |    de la dérivée.

Tangente :   $$f^{'}(a)(x - a) + f(a)$$

  Primitive | Calculer l'aire sous la courbe :
 |  |  |    $\int_{}^{}{f(x)\ dx} = \ F(x) + C$
  ------------ ----------------------------------------------------------

  ------------------------------------------------------------------------------------------------------------------------------------------
  $$\mathbf{f(x)}$$ | $$\mathbf{u + v}$$   $$\mathbf{u}^{\mathbf{n}}$$ |  | $$\mathbf{u \times v}$$   $$\frac{\mathbf{u}}{\mathbf{v}}$$
  -------------------- -------------------- ---------------------------------- ------------------------- -----------------------------------
  $$\mathbf{f'(x)}$$   $$u' + v'$$ |  |   $$n \times u' \times u^{n - 1}$$   $$u^{'}v + uv'$$ |  |   $$\frac{u^{'}v - uv'}{v^{2}}$$

  ------------------------------------------------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  $$\mathbf{f(x)}$$ | $$\mathbf{e}^{\mathbf{u}}$$   $$\mathbf{ln}\mathbf{(u)}$$   $$\mathbf{\cos}\mathbf{u}$$   $$\mathbf{\sin}\mathbf{u}$$   $$\mathbf{\tan}\mathbf{u}$$
  -------------------- ----------------------------- ----------------------------- ----------------------------- ----------------------------- -----------------------------------
  $$\mathbf{f'(x)}$$   $$u'e^{u}$$ |  |  |  |    $$\frac{u'}{u}$$ |  |  |   $$- u' \times \sin u$$ |  | $$u' \times \cos u$$ |  |   $$u' \times (1{{+ (tan}u)}^{2})$$

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

+----------------------------------+-----------------------------------+
| Trouver une primitive |  |  | | $$\int_{}^{}\mathbf{u' |  |  | |
| |  |  |  |  |  |  |  |   | \times v}\mathbf{=}\left\lbrack \ |
| Intégration par partie |  |    | mathbf{uv} \right\rbrack\mathbf{- |
| |  |  |  |  |  |  |  |   | }\int_{}^{}\mathbf{u \times v'}$$ |
+==================================+===================================+
+----------------------------------+-----------------------------------+
