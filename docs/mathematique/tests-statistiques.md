Les tests statistiques servent à vérifier si les données obtenues
sont compatibles avec une propriété (par exemple, une moyenne théorique)
et les différences observées dû au hasard de l\'échantillonnage.

-   H~0~ la différence vient de l\'échantillonnage.

-   H~1~ différence entre l\'échantillon et la population.

<table>
<colgroup>
<col style="width: 40%" />
<col style="width: 23%" />
<col style="width: 36%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Choix Réalité</td>
<td>H0</td>
<td>H1</td>
</tr>
<tr class="even">
<td>H0</td>
<td><em><br />
</em><span class="math display">1 − <em>α</em></span></td>
<td><span class="math display"><em>β</em></span></td>
</tr>
<tr class="odd">
<td>H1</td>
<td><span class="math display"><em>α</em></span></td>
<td><span class="math inline">1 − <em>β</em></span> (puissance du
test)</td>
</tr>
</tbody>
</table>

Interprétation : Au risque $\alpha$ est accepté H~1~ alors que c'est
faux. Cela correspond au rejet à tort de l'hypothèse nulle.

[Rmq :]{.underline} le risque $\alpha$ est généralement fixé à 5%.

Règle de décision :

-   L'appartenance à intervalle de confiance.

-   Par des statistiques du test soit car le seuil soit par la p-value
    (par comparaison du risque).

Deux types de tests :

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Unilatéral (à gauche)</th>
<th>Bilatéral</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>H0 : µ = µ0</p>
<p>Ha : µ &lt; µ0</p></td>
<td><p>H0 : µ = µ0</p>
<p>Ha : µ ≠ µ0</p></td>
</tr>
</tbody>
</table>

## Intervalle de confiance

Exemple de comparaison d'une moyenne observée avec une moyenne de
référence :

$S = \left| \frac{x - \mu_{0}}{\sqrt{\frac{\sigma^{2}}{n}}} \right| < 1.96$
avec $\mu_{0}$ la moyenne théorique.

Intervalle de
confiance $\lbrack\mu_{0} \pm 1,96\sqrt{\frac{\sigma^{2}}{n}}\rbrack$

Pour comparer la valeur de deux échantillons, il suffit de vérifier si
les intervalles se chevauchent.

## Les tests

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
l'hypothèse H~0~. Énoncer de façon différente, elle indique dans quelle
mesure les données sont conformes à l'H~0~.

[Exemple :]{.underline} on effectue des tirages de pile ou face. H~0~ la
pièce n'est pas biaisée.

-   4 tirages et 4 piles : $\frac{1}{2^{4}} = 0,0625$% on ne rejette pas
    H~0~.

-   5 tirages et 5 piles : $\frac{1}{2^{5}} = 0,03125$% on rejette H~0~.

[Rmq :]{.underline} une valeur est significativement différente si
l'hypothèse H~0~ (les valeurs sont égales) est rejetée.

Les types de tests principaux :

-   Indépendance, exemple : la couleur des cheveux est-elle indépendante
    du sexe ?

-   Homogénéité : deux séries de données sont-elles identiquement
    distribuées.

-   Adéquation à une loi ou une famille de lois définies à priori, par
    exemple : la taille d'une population suit-elle une loi normale ?

# Test d'homogénéité

| Test                                             | Formule                                                                                           |
|------------------------------------|------------------------------------|
| Moyenne observée et moyenne théorique            | $$E_{obs} = |\frac{\hat{}x - \mu}{\sqrt{\frac{s^{2}}{n}}}|$$                                      |
| Distribution de deux échantillons (test Student) | $$E_{obs} = |\frac{\hat{}x1 - \hat{}x2}{\sqrt{\frac{{s1}^{2}}{n}} + \sqrt{\frac{{s2}^{2}}{n}}}|$$ |
| Un échantillon et une loi de probabilité         | Test du Xhi2                                                                                      |

# Corrélation entre deux variables

-   H~0~ : les variables sont indépendantes

-   H~1~ : les variables sont liées.

## Une variable quantitative et une qualitative (ANOVA)

L'ANalysis Of Variance (ANOVA) sert à savoir si une variable qualitative
à une influence sur une variable quantitative.

-   H~0~ : La moyenne des groupes est issue d'une même population.

-   H~1~ : Les moyennes possèdent des différences significatives entre
    les groupes.

Degré de liberté : $Effectif - 2$

MANOVA : dans le cas où il existe plusieurs variables quantitatives à
expliquer on utilise MANOVA (Multivariate analysis of variance).

$$y = \mu + f\left( x_{1},\ \ldots,x_{i} \right) + \varepsilon$$

Avec :

-   $\mu$ une constante

-   $\varepsilon$ l'erreur qui suit une loi normale
    $N\left( 0,\sigma^{2} \right)$

[Rmq :]{.underline} Lorsqu'il n'y a que deux modalités, il est possible
d'utiliser un test de student.

## Deux variables qualitatives

Degré de liberté : ${(modalité}_{ligne} - 1)({modalité}_{colonne} - 1)$

Il faut faire :

1.  Tableau de contingence (appelé aussi effectif)

2.  Tableau des effectifs théoriques :
    $p\left( A \middle| B \right)*p\left( B \middle| A \right)*eff\ tot$
    ou directement
    $\frac{N_{ligne\ total} \times N_{colonne\ total}}{N_{total}}$

3.   Calcul du khi2 théorique pour chaque croissement de modalité :
    $\frac{{(n}_{obs} - n_{theo})²}{n_{theo}}$.

4.  Somme des valeurs pour chaque modalité et calcul de la statistique :

    a.  LOI.KHIDEUX.INVERSE.DROITE(proba; degré de liberté)

    b.  P-value : LOI.KHIDEUX.DROITE(valeur; degré de liberté)

## Deux variables quantitatives

Degré de liberté :

1.  Calcul du coefficient de corrélation de Pearson PEARSON()

2.  Calcul de la statistique

    a.  :
        $\left| \frac{R \times \sqrt{Eff - 2}}{\sqrt{1 - R^{2}}} \right|$

    b.  P-value : LOI.STUDENT.BILATERALE()


