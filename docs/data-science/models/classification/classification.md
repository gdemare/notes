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

## Evaluer et comparer les  performances de modèles de classification

### Matrice de confusion

Tab         | Vrai | Faux
------------|------|---
**Positif** | $a$  | $b$
**Négatif** | $c$  | $d$

On note n le nombre d'individus du jeu de test : $n = a + b + c + d$.

* **Taux d'erreur** ou **taux de mal classé** proportion d'individus mal classés : $\frac{c+b}{n}$.

### Classification binaire (deux classes)

Pour un classificateur binaire, les critères principaux sont utilisés pour évaluer le modèle dépendent de la matrice de confusion. Ils sont :

* la sensibilité qui est la capacité a trouver tous les individus vrai (bien classé) parmi ce qui le sont (vrai mal classé). La sensibilité est également appelé ou la sélectivité ou taux de vrai positif. 
* la spécificité est qui est la capacité a trouver tous les individus faux parmi ce qui le sont.
* la précision qui la proportion d'individus bien classée.

la performance du modèle en faisant varier le seuil de sensibilité du modèle. Plus le taux de faux postif augmente plus, on diminue la probabilité d'acceptation.

#### Courbe de Receiver Operating Characteristic (ROC)

La courbe de ROC permet d'évaluer la performance de modèles à classification binaire. On ne s'intéresse qu'aux individus classées comme vraies. Elle représente la sensibilité en fonction de 1 - la sélectivité.

_Area Under the Curve (AUC)_ aire sous la courbe de ROC.

### Courbe de Lift (courbe de gain)



### Critères 

Liste de paramètres à minimiser :

* AIC : $-2 \cdot L + 2 \ cdot p$
* BIC (pénalise plus le nombre de paramètre que l'AIC) : $-2 \cdot L + p \codt \log n $

Avec : 

* $p$ le nombre de paramètres du modèles.
* $n$ le nombre d'observation.
* $L$ le log de vraissemblance.
 
## Fonctions cout

Indicateur 						| Définition | Formule
--------------------------------|---|---
`binary_accuracy`      			| Calculates how often predictions match binary labels.
`binary_crossentropy` 			| the binary crossentropy loss.
`binary_focal_crossentropy`		| the binary focal crossentropy loss.
`categorical_accuracy` 			| Calculates how often predictions match one-hot labels.
`categorical_crossentropy` 		| the categorical crossentropy loss. | $- \sum y \cdot \log(p) + (1−y) \cdot \log(1−p)$
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

