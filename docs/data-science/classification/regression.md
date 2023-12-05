## Objectif

Prédire la classe (variable qualitative).

## Méthodes

* Classificateur binaire : 
  * Perceptron
  * Régression logistique
  
* Classificateur multi-classes :
  * Analyse discriminante
  * Arbre de décision
  * Boosting
  * Classificateur naïve bayésien
  * Espérance-maximisation (EM)
  * Forêt aléatoire
  * k-plus proches voisins
  * Support Vector Machine (SVM)
  * Réseau de neurones

# Classification supervisée ou modèliser

!!! warning
	Attention aux variables fortement corrélées ! elles peuvent surpondérer de l'information. Pour palier ce problème, il est conseillé de réaliser la modélisation sur de nouvelles variables obtenues à la suite d'une réduction de dimensions.

## Classification

Obj : générer une probabilité d'appartenance à une classe. 

* Classificateur binaire 
* Perceptron
* Régression logistique
* Classificateur multi-classes 
* Analyse discrimante 
* Arbre de décision
* Boosting
* Classificateur naïve bayésien
* Espérance-maximisation (EM) 
* Forêt aléatoire 
* k-plus proches voisins 
* Support Vector Machine (SVM)
* Réseau de neurones

## Régression

Obj : modéliser une variable quantitative continue. 

* Régression linéaire
* Arbre de régression
* ANalysis Of VAriance (ANOVA) 
* Forêt aléatoire
* Série temporelle
* AutoRegressive Moving Average (ARMA)
* Lissage exponentionel
* Série temporelle simple

## Evalutation des performances d'un modèle

Plusieurs outils peuvent servir à évaluer les performances des modèles de régression :

* graphique :

	* boxplot des erreurs de prédiction.
	* nuage de points (prédiction et réel) avec la fonction linéaire $f(x) = x$

* indicateur :
	
	* le coefficient de corrélation.
	* Moyenne de la valeur absolue des erreurs (MAE) $\frac{1}{n}\Sigma \vert y_{pred} - y_{reel}\vert$.

## Les méthodes

Obj : modéliser une variable quantitative continue. 

* Régression linéaire
* Arbre de régression
* ANalysis Of VAriance (ANOVA) 
* Forêt aléatoire
* Série temporelle
* AutoRegressive Moving Average (ARMA)
* Lissage exponentionel
* Série temporelle simple

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
