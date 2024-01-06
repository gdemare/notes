La "classification" (anglais) est un ensemble de méthodes qui permet de prédire une variable qualitative appelée classe.



## Méthodes

* Classificateur binaire :

  * Perceptron.
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

!!! warning
	Attention aux variables fortement corrélées ! elles peuvent surpondérer de l'information. Pour palier ce problème, il est conseillé de réaliser la modélisation sur de nouvelles variables obtenues à la suite d'une réduction de dimensions.

## Classification

Obj : générer une probabilité d'appartenance à une classe. 

* Classificateur binaire et multi-classes.
* Perceptron.
* Régression logistique.
* Analyse discrimante.
* Arbre de décision et forêt aléatoire.
* Classificateur naïve bayésien
* Espérance-maximisation (EM).
* k-plus proches voisins.
* Support Vector Machine (SVM).
* Perceptron et réseau de neurones.

* Boosting.

## Evaluer et comparer les  performances de modèles de classification

### Matrice de confusion

Tab         | Vrai | Faux
------------|------|---
**Positif** | $a$  | $b$
**Négatif** | $c$  | $d$

On note n le nombre d'individus du jeu de test : $n = a + b + c + d$.

* **Taux d'erreur** ou **taux de mal classé** proportion d'individus mal classés : $\frac{c+b}{n}$.

### Classification binaire (deux classes)

Les différents indiciateurs pour évaluer 

#### Courbe de Receiver Operating Characteristic (ROC)

La courbe de ROC permet d'évaluer la performance de modèles à classification binaire. On ne s'intéresse qu'aux individus classées comme vraies. Elle représente : 

* le taux de vrai positif (vrai bien classé) en fonction taux de faux positif (vrai mal classé). 
* La performance du modèle en faisant varier le seuil de sensibilité du modèle. Plus le taux de faux postif augmente plus, on diminue la probabilité d'acceptation.

_Area Under the Curve (AUC)_ aire sous la courbe de ROC.

### Courbe de Lift (courbe de gain)


## Indicateur de qualité du modèle 

Indicateur 						| Définition | Formule
--------------------------------|---|---
`binary_accuracy`      			| Calculates how often predictions match binary labels.
`binary_crossentropy` 			| the binary crossentropy loss.
`binary_focal_crossentropy`		| the binary focal crossentropy loss.
`categorical_accuracy` 			| Calculates how often predictions match one-hot labels.
`categorical_crossentropy` 		| the categorical crossentropy loss. | $- \sum y \times \log(p) + (1−y) \times \log(1−p)$
`deserialize` 					| Deserializes a serialized metric class/function instance.
`get` 							| Retrieves a Keras metric as a function/Metric class instance.
`logcosh` 						| Logarithm of the hyperbolic cosine of the prediction error.
`mae` 							| the mean absolute error between labels and predictions.
`mean_absolute_error` 			| the mean absolute error between labels and predictions.
`mean_squared_error`			| the mean squared error between labels and predictions.
`mse` 							| the mean squared error between labels and predictions
`serialize` 					| Serializes metric function or Metric instance.
`sparse_categorical_accuracy` 	| Calculates how often predictions match integer labels.
`sparse_categorical_crossentropy` 	| the sparse categorical crossentropy loss.
`sparse_top_k_categorical_accuracy` | how often integer targets are in the top K predictions.
`top_k_categorical_accuracy` 		| how often targets are in the top K predictions

