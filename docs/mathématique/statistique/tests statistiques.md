[[statistique]]
Notation :

* Moyenne $X$ barre ou $m$ , $\nu$ théorique
* écart type $s$, $\sigma$ théorique
## Résumé des tests

Calcul de p-value directement en ligne [BiostaTGV](https://biostatgv.sentiweb.fr/?module=tests)
[Tests](https://www.anastats.fr/telechargements/)

* $H_0$ : l'hypothèse la plus simple (ou contraignante). Par exemple, les moyennes sont égales.
* $H_1$ : la négation de $H_0$.

p-valeur probabilité d'obtenir une valeur aussi extrême sous l'hypohtèse $H_0$.
En fonction du seuil fixé, il n'est pas possible d'accepter $H_0$ car le risque béta n'est pas estimable càd le risque de rejeté $H_1$ sous l'hypothèse. Le résultat du test est alors :

* On ne peut pas rejeté $H_0$.
* On rejette $H_0$.

On parle de tests paramétriques lorsque les observations suivent une loi statistique et non paramètrique lorsque la loi de répartition n'est pas connue.

* **(1)** indépendance.
* **(2)** égalité des variances (homoscédasticité).
* **(3)** $n \gt 20$.
* **(4)** normalité.
* **(5)** effectifs théoriques $\gt 5$.

!!! note
		Il est possible d'estimer la p-valeur d'un test en générant un grand nombre (au moins 1000) d'expériences aléatoires.
  
## Une distribution

|  H0                        | Test		|
|--------------------------|--------------------|
| Normalité                 | Shapiro-Wilk	|
| Pas de valeurs extrêmes   | Dixon		|
| Pas de valeurs extrêmes   | Grubbs		|
## Un échantillon et une valeur théorique

| H0         | Condition | Test                          |
| ---------- | --------- | ----------------------------- |
| Moyenne    | 4         | student (appelé aussi test t) |
| Médiane    |           | Wilcoxon 			 |
| Proportion |           | Khi2                          |
| Variance   |           | Khi2                          |
## Paramètre de plusieurs échantillons

H0                      | Taille    | Condition     | Test
------------------------|-----------|---------------|---
Egalité des moyennes    | 2         | 1,2,3         | Test t
____________________    | 2         |               | Mann-Whitney
____________________    | n         | 1,2,4 ou 3    | ANOVA
____________________    | n         |               | Kruskal-Wallis
Egalité des proportions | k         | 4             | Khi2
Egalité des variances   | 2         |               | Fisher
_____________________   | k         | 4             | Bartlett
_____________________   | k         |               | Test de Levene
## Deux distributions

| H0                                                | Condition  | Test                  |
| ------------------------------------------------- | ---------- | --------------------- |
| Même distribution entre une loi et un échantillon |            | Kolmogorov-Smirnov    |
| __________________                                | 1,2,3 ou 4 | Test t                |
| __________________ entre deux échantillons        |            | Wilcoxon-Mann-Whitney |
| Egalités des positions (séries binaires)          |            | Q de Cochran          |
|                                                   |            |                       |
## Corrélation

h0 : indépendance des deux variables

| Type     | var                         | Condition | Test                   |
| -------- | --------------------------- | --------- | ---------------------- |
| Linéaire | 2 var quant                 |           | Pearson                |
| Rang     | 2 var quant                 | 3,4       | Spearman               |
|          | 2 var quali                 | 1,5       | d’association du Khi2  |
|          | 2 var quali                 |           | exact de Fisher        |
|          | 2 var quali                 |           | Méthode de Monte Carlo |
|          | 1 var quali et 1 var quanti |           | [[ANOVA]]              |
## Cours tests statistiques et interprétation

Les tests statistiques servent à vérifier si les données obtenues sont compatibles avec une propriété (par exemple, une moyenne théorique) et les différences observées dû au hasard de l'échantillonnage.

* $H_0$ la différence vient de l'échantillonnage.
* $H_1$ différence entre l'échantillon et la population.

| Choix/Réalité | $H_0$        | $H_1$    |
| ------------- | ------------ | -------- |
| $H_0$         | $1 − \alpha$ | $\alpha$ |
| $H_1$        	| $\beta$      | $1 - \beta$ (appelé puissance du test) |
Interprétation : Au risque $\alpha$ est accepté $H_1$ alors que c'est faux. Cela correspond au rejet à tort de l'hypothèse nulle.

!!! note
    Le risque $\alpha$ est généralement fixé à 5%.

Règle de décision :

* L'appartenance à intervalle de confiance.
* Par des statistiques du test soit car le seuil soit par la p-value (par comparaison du risque).

Deux types de tests :

* Unilatéral (example, à gauche), $H_0$ : $\mu = \mu_0$, $H_a$ : $\mu \lt µ_0$
* Bilatéral $H_0$ : $µ = µ_{0}$,  $H_a$ : $\mu \neq \mu_0$
### Intervalle de confiance

Exemple de comparaison d'une moyenne observée avec une moyenne de référence :

$S = \vert \frac{x - \mu _0}{\sqrt{\frac{\sigma ^2}{n}}} \vert \lt 1.96$
avec $\mu_0$ la moyenne théorique.

Intervalle de confiance $\lbrack\mu_{0} \pm 1,96\sqrt{\frac{\sigma^{2}}{n}}\rbrack$

Pour comparer la valeur de deux échantillons, il suffit de vérifier si les intervalles se chevauchent.

### Présentation des différents types de tests

| Hypothèse                                        | Seuil                     | P-value</th>          |
| ------------------------------------------------ | ------------------------- | --------------------- |
| On ne rejete pas $H_0$ au risque $\beta$ inconnu | $E_{obs} \leq E_{\alpha}$ | p-value $\gt \alpha$  |
| On accepte $H_1$ au risque $\alpha$              | $E_{obs} \gt E_{\alpha}$  | p-value $\leq \alpha$ |

Par exemple, au risque alpha de 5%, $E_{\alpha} = 1,96$

p-valeur est la probabilité d'obtenir une valeur aussi extrême sous l'hypothèse $H_0$. Énoncer de façon différente, elle indique dans quelle mesure les données sont conformes à l'$H_0$.

!!! example
    On effectue des tirages de pile ou face. $H_0$ la pièce n'est pas biaisée.

    * 4 tirages et 4 piles : $\frac{1}{2^4} = 0,0625$% on ne rejette pas $H_0$.
    * 5 tirages et 5 piles : $\frac{1}{2^5} = 0,03125$% on rejette $H_0$.

!!! note
    Une valeur est significativement différente si l'hypothèse $H_0$ (les valeurs sont égales) est rejetée.

Les types de tests principaux :

* Indépendance, exemple : la couleur des cheveux est-elle indépendante du sexe ?
* Homogénéité : deux séries de données sont-elles identiquement distribuées.
* Adéquation à une loi ou une famille de lois définies à priori, par exemple : la taille d'une population suit-elle une loi normale ?

## Test d'homogénéité

| Test                                             | Formule                                                                                          | Degré de liberté     |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------ | -------------------- |
| Moyenne observée et moyenne théorique            | $E_{obs} = \vert{\frac{\hat{x} - \mu}{\sqrt{\frac{s^2}{n}}}}\vert$                               |                      |
| Distribution de deux échantillons (test Student) | $E_{obs} = \vert \frac{\hat{x_1} - \hat{x_2} }{\sqrt{(\frac{s_1^2}{n} + \frac{s_2^2}{n})}}\vert$ | $df = n_A + n_B − 2$ |
| Un échantillon et une loi de probabilité         | Test du Xhi2                                                                                     |                      |
#### Test pour comparer deux moyennes

* Si $n \ge 30$, loi normale.
* Si $n \lt 30$, loi de Student.
## Test indépendance (et corrélation) entre deux variables

* $H_0$ : les variables sont indépendantes
* $H_1$ : les variables sont liées.
### Une variable quantitative et une qualitative (ANOVA)

L'ANalysis Of Variance (ANOVA) sert à savoir si une variable qualitative
à une influence sur une variable quantitative.

* $H_0$ : La moyenne des groupes est issue d'une même population.
* $H_1$ : Les moyennes possèdent des différences significatives entre les groupes.

Degré de liberté : $Effectif - 2$

MANOVA : dans le cas où il existe plusieurs variables quantitatives à expliquer on utilise MANOVA (Multivariate analysis of variance).

$y = \mu + f\left( x_{1},\ \ldots,x_{i} \right) + \varepsilon$

Avec :

*  $\mu$ une constante
*  $\varepsilon$ l'erreur qui suit une loi normale $N\left( 0,\sigma^{2} \right)$

!!! note
    Lorsqu'il n'y a que deux modalités, il est possible d'utiliser un test de student.
### Deux variables qualitatives

Degré de liberté : ${(modalité}_{ligne} - 1)({modalité}_{colonne} - 1)$

Il faut faire :

1. Tableau de contingence (appelé aussi effectif).
2. Tableau des effectifs théoriques : $p\left( A \middle| B \right) \cdot p\left( B \middle| A \right) \cdot eff\ tot$ ou directement $\frac{N_{ligne\ total} \times N_{colonne\ total}}{N_{total}}$.
3. Calcul du khi2 théorique pour chaque croissement de modalité : $\frac{{(n}_{obs} - n_{theo})^2}{n_{theo}}$.
4. Somme des valeurs pour chaque modalité et calcul de la statistique :
    1. LOI.KHIDEUX.INVERSE.DROITE(proba; degré de liberté)
    2. P-value : LOI.KHIDEUX.DROITE(valeur; degré de liberté)
### Deux variables numériques (quantitatives)

Degré de liberté :

1. Calcul du coefficient de corrélation de Pearson PEARSON()
2. Calcul de la statistique

    1.  $\left| \frac{R \times \sqrt{Eff - 2}}{\sqrt{1 - R^{2}}} \right|$
    2.  P-value : LOI.STUDENT.BILATERALE()
### Kolmogorov-Smirnov

Le test Kolmogorov-Smirnov est un test qui compare la fonction de répartition. Il permet :

* de comparer la distribution de deux échantillons.
* de comparer la distribution d'un échantillon avec celui d'une loi statistique.
### Correction

Lorsque plusieurs tests sont réalisés, il faut utiliser une correction l'erreur liée à la multication des erreurs. Les p valeur sont relevées pour éviter de se tromper lorsqu'il a de nombreux tests.

Le risque d'erreur augmente avec le nombre de tests. Le risque de faire une erreur est alors de  $1-\prod{1-\alpha}$. 

!!! example
	Le risque de se tromper pour 4 tests est de $1-(1-0,05)^6 = 26%$ de risque de se tromper au moins une fois.

Deux approches :

* Controle le risque alpha global de se tromper au moins une fois ; on l’appelle le “Family-wise error rate” (FEWR) en anglais.
* Controler le risque alpha global de se tromper au moins une fois, mais en ne considérant que les tests qui ont rejetté $H_0$ ; On l’apelle le “False discovery rate” (FDR) en anglais.

L'idée serait de modifier les p-valeurs pour que le risque global chute à 0.05% mais les modification dépendent du nombre de tests.
Ajuster les p-valeur en les augmentant.

Family wise error rate :

* méthode Bonferroni corrige toutes les p valeurs en une fois (méhtode très restrictive).
* méthode d’Holm qui corrige de façon séquentielle chaque p valeur.

