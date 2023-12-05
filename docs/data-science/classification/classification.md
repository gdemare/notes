## Objectif

Il existe deux types de classification càd de groupes de méthode pour générer un prévision :

* Générer une classe càd une probabilité d'appartenance à une classe (appelé classificaiton).
* Générer une valeur quantitative (appelé regression).

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

<mark>Attention aux variables fortement corrélées !</mark> car elles peuvent surpondérer de l'information. Pour palier ce problème, il est conseillé de réaliser la modélisation sur de nouvelles variables obtenues à la suite d'une réduction de dimensions.

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

### Matrice de confusion

            | Vrai | Faux
------------|------|---
**Positif** | a    | b
**Négatif** | c    | d

On note n le nombre d'individus du jeu de test : n = a+b+c+d.

* **Taux d'erreur** ou **taux de mal classé** proportion d'individus mal classé = c+b/n


### Classification binaire (deux classes)

#### Courbe de Receiver Operating Characteristic (ROC)

La courbe de ROC permet d'évaluer la performance de modèles à classification binaire. On ne s'intéresse qu'aux individus classées comme vraies.
Elle représente : 
* le taux de vrai positif (vrai bien classé) en fonction taux de faux positif (vrai mal classé). 
* La performance du modèle en faisant varier le seuil de sensibilité du modèle. Plus le taux de faux postif augmente plus, on diminue la probabilité d'acceptation.

_Area Under the Curve (AUC)_ aire sous la courbe de ROC.

### Courbe de Lift (courbe de gain)


## Indicateur de qualité du modèle 

Indicateur | Définition |
---|---|
`KLD` 								| Kullback-Leibler divergence loss between y_true and y_pred.
`MAE` 								| the mean absolute error between labels and predictions.
`MAPE` 								| the mean absolute percentage error between y_true and y_pred.
`MSE`                             	| the mean squared error between labels and predictions.
`MSLE`                       		| the mean squared logarithmic error between y_true and y_pred.
`binary_accuracy`                 	| Calculates how often predictions match binary labels.
`binary_crossentropy`             	| the binary crossentropy loss. |
`binary_focal_crossentropy`       	| the binary focal crossentropy loss.
`categorical_accuracy` | Calculates how often predictions match one-hot labels. |
`categorical_crossentropy` | the categorical crossentropy loss. |
`deserialize` | Deserializes a serialized metric class/function instance. |
`get` | Retrieves a Keras metric as a function/Metric class instance. |
`hinge` | the hinge loss between y_true and y_pred. |
`kl_divergence` | Kullback-Leibler divergence loss between y_true and y_pred. |
`kld` | Kullback-Leibler divergence loss between y_true and y_pred. |
`kullback_leibler_divergence` | Kullback-Leibler divergence loss between y_true and y_pred.
`logcosh` | Logarithm of the hyperbolic cosine of the prediction error. |
`mae` | the mean absolute error between labels and predictions. |
`mape` | the mean absolute percentage error between y_true and y_pred. |
`mean_absolute_error` | the mean absolute error between labels and predictions. |
`mean_absolute_percentage_error`  | the mean absolute percentage error between y_true and y_pred. |
`mean_squared_error` | the mean squared error between labels and predictions. |
`mean_squared_logarithmic_error`  | the mean squared logarithmic error between y_true and y_pred. |
`mse` | the mean squared error between labels and predictions. |
`msle` | the mean squared logarithmic error between y_true and y_pred. |
`poisson` | the Poisson loss between y_true and y_pred. |
`serialize` | Serializes metric function or Metric instance. |
`sparse_categorical_accuracy` | Calculates how often predictions match integer labels. |
`sparse_categorical_crossentropy` | the sparse categorical crossentropy loss. |
`sparse_top_k_categorical_accuracy` | how often integer targets are in the top K predictions. |
`squared_hinge` | the squared hinge loss between y_true and y_pred. |
`top_k_categorical_accuracy` | how often targets are in the top K predictions |
