Les tests statistiques servent à vérifier si les données obtenues
sont compatibles avec une propriété (par exemple, une moyenne théorique)
et les différences observées dû au hasard de l\'échantillonnage.

* $H_{0}$ la différence vient de l'échantillonnage.
* $H_{1}$ différence entre l'échantillon et la population.


Choix/Réalité | $H_{0}$      | $H_{1}$
--------------|--------------|-------------- 
$H_{0}$       | $1 − \alpha$ | $\alpha$ 
$H_{1}$       | $\beta$      | $1-\beta$ (appelé puissance du test)


Interprétation : Au risque $\alpha$ est accepté $H_{1}$ alors que c'est
faux. Cela correspond au rejet à tort de l'hypothèse nulle.

!!! note
    Le risque $\alpha$ est généralement fixé à 5%.

Règle de décision :

* L'appartenance à intervalle de confiance.
* Par des statistiques du test soit car le seuil soit par la p-value
    (par comparaison du risque).

Deux types de tests :

* Unilatéral (example, à gauche), $H_{0}$ : µ = µ0, Ha : µ &lt; µ0
* Bilatéral H0 : µ = µ0,  Ha : µ ≠ µ0

### Intervalle de confiance

Exemple de comparaison d'une moyenne observée avec une moyenne de
référence :

$S = \left| \frac{x - \mu_{0}}{\sqrt{\frac{\sigma^{2}}{n}}} \right| < 1.96$
avec $\mu_{0}$ la moyenne théorique.

Intervalle de confiance $\lbrack\mu_{0} \pm 1,96\sqrt{\frac{\sigma^{2}}{n}}\rbrack$

Pour comparer la valeur de deux échantillons, il suffit de vérifier si les intervalles se chevauchent.

### Présentation des différents types de tests

<table>
<colgroup>
<col style="width: 55%" />
<col style="width: 19%" />
<col style="width: 24%" />
</colgroup>
<thead>
<tr class="header">
<th>Hypothèse</th>
<th>Seuil</th>
<th>P-value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>On ne peut pas rejeter H<sub>0</sub> au risque <em><br />
</em><span class="math inline"><em>β</em></span> inconnu</td>
<td><span
class="math display"><em>E</em><sub><em>o</em><em>b</em><em>s</em></sub> ≤ <em>E</em><sub><em>α</em></sub></span></td>
<td><span
class="math display"><em>p</em> − <em>v</em><em>a</em><em>l</em><em>u</em><em>e</em> &gt; <em>α</em></span></td>
</tr>
<tr class="even">
<td>On accepte H<sub>1</sub> au risque <span
class="math inline"><em>α</em></span></td>
<td><span
class="math display"><em>E</em><sub><em>o</em><em>b</em><em>s</em></sub> &gt; <em>E</em><sub><em>α</em></sub></span></td>
<td><span
class="math display"><em>p</em> − <em>v</em><em>a</em><em>l</em><em>u</em><em>e</em> ≤ <em>α</em></span></td>
</tr>
</tbody>
</table>

Par exemple, au risque alpha de 5%, $E_{\alpha} = 1,96$

p-valeur est la probabilité d'obtenir une valeur aussi extrême sous
l'hypothèse $H_{0}$. Énoncer de façon différente, elle indique dans quelle
mesure les données sont conformes à l'$H_{0}$.

!!! example
    On effectue des tirages de pile ou face. $H_{0}$ la pièce n'est pas biaisée.

    * 4 tirages et 4 piles : $\frac{1}{2^{4}} = 0,0625$% on ne rejette pas $H_{0}$.
    * 5 tirages et 5 piles : $\frac{1}{2^{5}} = 0,03125$% on rejette $H_{0}$.

!!! note
    Une valeur est significativement différente si l'hypothèse $H_{0}$ (les valeurs sont égales) est rejetée.

Les types de tests principaux :

* Indépendance, exemple : la couleur des cheveux est-elle indépendante du sexe ?
* Homogénéité : deux séries de données sont-elles identiquement distribuées.
* Adéquation à une loi ou une famille de lois définies à priori, par
    exemple : la taille d'une population suit-elle une loi normale ?

## Test d'homogénéité

Test                                             | Formule
-------------------------------------------------|------------------------------------
Moyenne observée et moyenne théorique            | $E_{obs} = \vert{\frac{\hat{x}-\mu}{\sqrt{\frac{s^{2}}{n}}}}\vert$
Distribution de deux échantillons (test Student) | $E_{obs} = \vert{\frac{\hat{x_{1}} - \hat{\hat{x_{2}}}}{\sqrt{\frac{{s_{1}}^{2}}{n}} + \sqrt{\frac{{s_{2}}^{2}}{n}}}}\vert$
Un échantillon et une loi de probabilité         | Test du Xhi2

#### Test pour comparer deux moyennes

Si n>30, loi normale.
Si n<30, loi de Student.

## Test indépendance (et corrélation) entre deux variables

* $H_{0}$ : les variables sont indépendantes
* $H_{1}$ : les variables sont liées.

### Une variable quantitative et une qualitative (ANOVA)

L'ANalysis Of Variance (ANOVA) sert à savoir si une variable qualitative
à une influence sur une variable quantitative.

* $H_{0}$ : La moyenne des groupes est issue d'une même population.
* $H_{1}$ : Les moyennes possèdent des différences significatives entre les groupes.

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
2. Tableau des effectifs théoriques : $p\left( A \middle| B \right)*p\left( B \middle| A \right)*eff\ tot$ ou directement $\frac{N_{ligne\ total} \times N_{colonne\ total}}{N_{total}}$.
3. Calcul du khi2 théorique pour chaque croissement de modalité : $\frac{{(n}_{obs} - n_{theo})²}{n_{theo}}$.
4. Somme des valeurs pour chaque modalité et calcul de la statistique :
    1. LOI.KHIDEUX.INVERSE.DROITE(proba; degré de liberté)
    2. P-value : LOI.KHIDEUX.DROITE(valeur; degré de liberté)

### Deux variables numériques (quantitatives)

Degré de liberté :

1. Calcul du coefficient de corrélation de Pearson PEARSON()
2. Calcul de la statistique

    1.  $\left| \frac{R \times \sqrt{Eff - 2}}{\sqrt{1 - R^{2}}} \right|$
    2.  P-value : LOI.STUDENT.BILATERALE()
