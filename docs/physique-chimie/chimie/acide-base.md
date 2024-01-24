## Ph Potentiel Hydrogène

### Notion acide/base

!!! warning
    La notion d'acide/base n'a rien à voir avec une solution acide/basique qui quantifie le nombre de protons présent dans une solution.

Un acide est une molécule capable de gagner un proton ($H^+$). Il est dit dissocié (par opposition à une base qui est dite associée).

!!! note
    Un acide ou une base sont dits forts s'ils réagissent totalement avec l'eau.

__Autoprotolyse__ capacité entre deux même molécules d'échanger un proton.

!!! example
    $2 H_2O \rightleftharpoons H_3 O^+ + HO^-$.

L'autoprotolyse de l'eau à $25°C$ est de $mol \cdot L^{-1}$.

### Potentiel hydrogène d'une solution

L'équilibre de dissociation :

$pH =  − \log [H^+]  = pK_a + \log [A]$ avec :

* $[A]$ est la concentration en $mol.L^{-1}$
* $pK_a$ est la constante d'équilibre.

!!! warning
    AH est l'acide au sens de Bronsted c'est-à-dire que la molécule capable de relâcher un proton.

Isoélectrique c'est le pH où la forme neutre est la plus abondante. Pour cela on calcule la moyenne pKa entre lesquelles l'espèce est neutre.

Autoprotolyse de l'eau  $K_e = K_a \cdot K_b$ avec $K_a$ et $K_b$ les constantes d'équilibre.

On obtient :

Cas             | Formule
----------------|-----------
Base forte      | $pH = 14 + \log C_0$
Base faible     | $pH = 7 + \frac{1}{2} ( pKa + \log C_0)$
Acide fort      | $pH = - \log C_0$
Acide faible    | $pH = \frac{1}{2} (pKa - \log C_0)$

### L'effet tampons

Le système oscille vers un état d'équilibre

-----------------
__Amphotère__ espèce chimique capable de réagir avec elle-même.

L'autoprotolyse de l'eau est une réaction spontanée de $2H_2O \rightleftharpoons H_3 O^+ + HO^-$

Son $K_e = \frac{[H^3O^+] \cdot [HO^-]}{[H^2O]^2} = 10^{-14}$ comme $H_2O$ est le soluté alors $a_{H_2O} = 1$.

### Acide Base

Dans l'eau,

* un acide libère un proton. Il y a apparition d'un $H_3O^+$.
* Une base capte un proton donc apparition de $HO^-$.

On a $K_a = \frac{[H_3O^+] \cdot [A^-]}{[AH]}$ et $K_b = \frac{[HO^-] \cdot [AH]}{[A^-]}$.

!!! note
    $K_e = K_a \cdot K_b = 10^{-14}$


!!! note
    La fonction $p = - \log$

On définit le pH :

$pH = - \log [H_3O^+] = pK_a + \log \frac{[A^-]}{[AH]}$

!!! example 
    Déterminer le pH d'une solution auquel on ajoute $c$ d'une base
    $A^- + H_2O \leftrightarrow AH + HO^-$
    Espèces $[A^-]$   $[H_2O]$
    $[AH]$ ; $[HO^-]$

Concentration $c - x$ $x$ $x$

$K_b = \frac{[HO^-]\cdot [AH]}{[A^-]} = \frac{x^2}{c - x}$

Calcul du pH avec autoprotolyse de l'eau

Dans le cas où l'autoprotolyse de l'eau n'est pas négligeable, il faut l'ajouter :

$2H_2O \leftrightarrow HO^- + H_3O^+$

Espèces

$H_2O$
$HO^-$ 
$H_3O+$

Concentration $y$ $y$

Ainsi, on doit résoudre l'équation du second degré : $K_e = [H_3O^+] \cdot [HO^-] = y \cdot (x + y)$

Dans le cas d'une base forte, on aurait :$K_e =  [H_3O^+] \cdot [HO^-] = y \cdot (c + y)$ ce qui équivaut à résoudre un polynôme du second degré.

!!! note
    Plus le $pK_a$ est élevé plus l'acide est fort.

En considérant que pour les acides et bases :

* Forts : ils réagissent à 100%.
* Faibles : la diminution de concentration de la base et de l'acide est négligeable.

L'autoprotolyse de l'eau est négligeable lorsque la concentration des
espèces est $C \gt 10^{-6} mol \cdot L^{-1}$, on a alors

Type  | Fort $pK_a \lt 0$                        | Faible $pK_a \gt 14$   
------|------------------------------------------|--
Acide | $pH = - \log c$                          | $pH = \frac{1}{2} \cdot (pK_a - \log c)$
Base  | $pH = 14 + \log c$                       | $pH = \frac{1}{2} \cdot (14 + pK_a + \log c)$

!!! note
    $H = [H_3O^+] = \frac{K_e}{[HO^-]}$

!!! note
    Pour un acide ou une base forte, le coefficient réactionnel n'a pas de sens à l'équilibre car il faudrait diviser par 0.
    $$[AH] + [H_2O] \rightleftarrows [A^-] + [H_3O^+]$$
    
    Temps | $[AH]$    | $[H_2O]$        | $[A^-]$ | $[H_3O^+]$
    ------|-----------|-----------------|---------|-----
    $0$   | $c$       | $\varepsilon$   | $0$     | $0$
    $x$   | $c - x$   | $\varepsilon$   | $x$     | $x$           
    $équi$| $0$       | $\varepsilon$   | $x$     | $x$                             

A l'équilibre, il y a :

$K = \frac{[H_3O^+] \cdot [A^-]}{[AH]} = \frac{x^2}{c - x}$

On remarque que $K = K_a$ du couple acide base noté $pK_a = \frac{[AH]}{[A^-]}$.

On résout l'équation du second pour déterminer $[H_3O^+] = x$.

En fonction du soluté que l'on ajoute, si celui-ci est

Généralement lorsque le pH n'appartient pas à $[pKa \pm 1 ]$. On peut négliger $x \ll c$ ce qui évite de calculer.

Pour les bases, il faudra utiliser en plus : $K_e = [H_3O^+] \cdot [HO^-]$, $K_e = K_a \cdot K_b$

### Diagramme de prédominance

$K_a = \frac{[H_3O^+] \cdot [A^-]}{[A^-]} \Leftrightarrow [H_3O^+]  = K_a \cdot \frac{[AH]}{[A^-]} \Leftrightarrow - \log [H_3O^+] = - \log K_a + \log \frac{[A^-]}{[AH]}$

Ainsi, on a $pH = pK_a + \log \frac{[A^-]}{[AH]}$

On remarque que lorsque $[A^-] = [AH]$, on a $pH = pK_a$

### Solution avec deux acides ou deux bases

Pour calculer le pH d'une solution avec plusieurs acides ou plusieurs bases :

1. On écrit les tableaux de réactions.
2. Il suffit de calculer le nombre de HO- ou $H_3O^+$ produit $x_1 + x_2$
3. Pour chaque réaction on détermine respectivement la valeur $x_1$, $x_2$ puis on additionne le tout.

### Solution tampon

Une solution tampon est une solution avec un

### Déterminer la concentration de base ou d'acide d'une solution

La déterminer de la concentration inconnu en base ou d'acide.

Il s'agit de faire réagir toutes les molécules de la solution inconnue c'est-à-dire qu'il y aura la même quantité de matière : $n_{inconnu} = n_{ajouté}$ (où ecrit différement $c_i \cdot v_i = c_a \cdot v_a$).

Ce point est appelé équivalence.

La réaction doit être totale.

!!! note
    Pour que la réaction soit totale on utilise des acides et des bases fortes.

L'ajout du composé se fait progressivement.

1. les est neutralisé par la substance inconnue.
2. La
3. en excédant

Représentation graphique

### Autoprotolyse

Dans une même molécule le transfert d'un proton d'une molécule a une autre.

Pour l'eau, à 25 degrés : $[H_3O^+] = [HO^-] = 10^{- 7} mol \cdot L^{-1}$ 

### pH acide base

!!! warning 
    Acide/base n'ont rien à voir avec une solution acide/basique qui correspond à la quantité de proton présent dans une solution :

    * Un acide est dit dissocié.
    * Une base est dite associée.

!!! note
    Un acide ou une base sont dits forts s'ils réagissent totalement avec l'eau.

Autoprotolyse de l'eau

Constante d'équilibre                                                                                

$[H_3O^+] = [HO^-] = 10^7$

$K_a = \frac{[H_3O^+] \cdot [AH]}{[A^-]}$   $K_b = \frac{[HO^-] \cdot [AH_2^+]}{[AH]}$

$K_e = K_a \cdot K_b = [H_3O^+] \cdot [HO^-]$