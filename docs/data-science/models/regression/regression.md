Les méthodes de régression permettent de prédire une variable quantitative continue.

* Régression linéaire.
* Réseau de neurones.

!!! note
  Il existe des adaptaion des modèles de classification supervisée de variables qualitative à des variables quantitatives par exemple, les arbre de régression.

__Résidus__ différence entre la valeur réelle et celle prédite ($y - \hat{y}$).

## Evaluer le modèle

Plusieurs outils peuvent servir à évaluer les performances des modèles de régression :

* graphique :

	* boxplot des erreurs de prédiction.
	* nuage de points (prédiction et réel) avec la fonction linéaire $f(x) = x$

* indicateur :
	
	* le coefficient de corrélation.
	* Moyenne de la valeur absolue des erreurs (MAE) $\frac{1}{n}\Sigma \vert y_{pred} - y_{reel}\vert$.

## Evaluer les performances 

Indicateur 						| Définition
--------------------------------|---
`KLD` 							| Kullback-Leibler divergence loss between y_true and y_pred.
`MAE` 							| the mean absolute error between labels and predictions.
`MAPE` 							| the mean absolute percentage error between y_true and y_pred.
`MSLE`                    		| the mean squared logarithmic error between y_true and y_pred.
`kl_divergence`					| Kullback-Leibler divergence loss between y_true and y_pred.
`kld` 							| Kullback-Leibler divergence loss between y_true and y_pred.
`kullback_leibler_divergence` 	| Kullback-Leibler divergence loss between y_true and y_pred.
`MSE`                          	| the mean squared error between labels and predictions.
`hinge` 						| the hinge loss between y_true and y_pred.
`mape` 							| the mean absolute percentage error between y_true and y_pred.
`mean_absolute_percentage_error`| the mean absolute percentage error between y_true and y_pred.
`mean_squared_logarithmic_error`| the mean squared logarithmic error between y_true and y_pred.
`msle` 							| the mean squared logarithmic error between y_true and y_pred.
`poisson` 						| the Poisson loss between y_true and y_pred.
`squared_hinge` 				| the squared hinge loss between y_true and y_pred.
