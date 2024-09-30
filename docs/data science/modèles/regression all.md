Les méthodes de régression permettent de prédire une variable quantitative continue.

* [[régression]].
* [[réseau de neurones]].

!!! note
	Il existe des adaptaion des modèles de classification supervisée de variables qualitative à des variables quantitatives par exemple, les arbre de régression.

__Résidus__ (ou biais) différence entre la valeur réelle et celle prédite ($y - \hat{y}$).
## Evaluer le modèle

Plusieurs outils peuvent servir à évaluer les performances des modèles de régression :

* graphique :

	* boxplot des erreurs de prédiction.
	* nuage de points (prédiction et réel) avec la fonction linéaire $f(x) = x$

* les indicateurs et les critères :

	* Le coefficient de déterminantion $R^2$ qui est la proportion de la variance expliquée par le modèle Plus il est élevé et moins l'erreur explique la variance. La valeur ajustée correspond à une correction par l'effectif des observations.
	* les [[indicateurs et fonctions de coût]].
	* les critères comme AIC et BIC.