Les indicateurs servent comme :

* des indicateurs pour comparer les modèles.
* des fonctions coûts à  minimiser pour ajuster le modèle.
## Entropie 

Nombre de "questions" de type oui/non nécessaire pour connaitre la réponse. Chaque question porte sur une des modalités de la variable à prédire.

$2^{bits} = N \Leftrightarrow bits = \log _2 (N) \Leftrightarrow bits = - \log _2 (\frac{1}{N})$.

Plus petite quantité d'information nécessaire pour lever l'incertitude. Elle est maximale lorsque les possibilités sont équiprobables.

Entropie de Shannon : $H(P) = -\sum_i p_i \cdot \log _2 (p_i)$

avec $P$ le nœud.
### Critère de Gini

Le critère de Gini est un indice qui mesure l’impureté. 

Critère de GINI $G(P) = 1 - \sum^{K}{p_k \cdot (1 - p_k)}$
avec :

* $K$ le nombre de modalité.
* $p_k$ la proportion d'observation de la classe $k$.

Il est $G \in [0;0.5]$. Il est égal à 0 si tous les individus sont de la même classe et égale à 0.5 si les observations sont réparties de façon équiprobable.
## Indicateurs

Pred quanti | Pred quali | Critère de mesure de l'erreur           | Formule      
------------|------------|-----------------------------------------|---
_           | X          | Entropie croisée pour les catégories    | $- \sum y \cdot \log(p) + (1−y) \cdot \log (1−p)$
X           | _          | Erreur quadratique moyenne (MSE)        | $E[(y_i - \hat{y}_i)^2]$
X           | _          | Racine carré de l'erreur moyenne (RMSE) | $\sqrt{E[(y_i - \hat{y}_i)^2]}$
X           | _          | Erreur absolue moyenne (MAE)            | $E[ \vert{y_i - \hat{y}_i} ]$

### Qualitatif

Indicateur 						| Définition | Formule
--------------------------------|---|---
`binary_accuracy`      			| Calculates how often predictions match binary labels. |
`binary_crossentropy` 			| the binary crossentropy loss. |
`binary_focal_crossentropy`		| the binary focal crossentropy loss. |
`categorical_accuracy` 			| Calculates how often predictions match one-hot labels. |
`deserialize` 					| Deserializes a serialized metric class/function instance. |
`get` 							| Retrieves a Keras metric as a function/Metric class instance. |
`logcosh` 						| Logarithm of the hyperbolic cosine of the prediction error. | 
`mae` 							| the mean absolute error between labels and predictions. |
`MSE`                          	| the mean squared error between labels  | 
`mean_absolute_error` 			| the mean absolute error between labels and predictions. |
`mean_squared_error`			| the mean squared error between labels and predictions. |
`serialize` 					| Serializes metric function or Metric instance. |
`sparse_categorical_accuracy` 	| Calculates how often predictions match integer labels. |
`sparse_categorical_crossentropy` 	| the sparse categorical crossentropy loss. |
`sparse_top_k_categorical_accuracy` | how often integer targets are in the top K predictions. |
`top_k_categorical_accuracy` 		| how often targets are in the top K predictions |

### Quantitatifs

Indicateur 						| Définition
--------------------------------|---
`KLD` 							| Kullback-Leibler divergence loss between y_true and y_pred.
`MAE` 							| the mean absolute error between labels and predictions.
`MAPE` 							| the mean absolute percentage error between y_true and y_pred.
`MSLE`                    		| the mean squared logarithmic error between y_true and y_pred.
`kl_divergence`					| Kullback-Leibler divergence loss between y_true and y_pred.
`kld` 							| Kullback-Leibler divergence loss between y_true and y_pred.
`kullback_leibler_divergence` 	| Kullback-Leibler divergence loss between y_true and y_pred.and predictions.
`hinge` 						| the hinge loss between y_true and y_pred.
`mape` 							| the mean absolute percentage error between y_true and y_pred.
`mean_absolute_percentage_error`| the mean absolute percentage error between y_true and y_pred.
`mean_squared_logarithmic_error`| the mean squared logarithmic error between y_true and y_pred.
`msle` 							| the mean squared logarithmic error between y_true and y_pred.
`poisson` 						| the Poisson loss between y_true and y_pred.
`squared_hinge` 				| the squared hinge loss between y_true and y_pred.

## Critères 

Liste de paramètres à minimiser :

* AIC : $-2 \cdot L + 2 \cdot p$
* BIC (pénalise plus le nombre de paramètre que l'AIC) : $-2 \cdot L + p \cdot \log n$

Avec : 

* $p$ le nombre de paramètres du modèles.
* $n$ le nombre d'observations.
* $L$ le log de vraissemblance.
