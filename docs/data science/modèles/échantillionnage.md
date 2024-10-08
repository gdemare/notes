L'échantillionage des données est une étape essentielle pour entrainer de façon efficace un modèle càd pour éviter le sur-apprentissage et obtenir le meilleur modèle (le plus généralisable).

Les données sont divisés en deux sous-ensembles qui servent soient :

* à l'apprentissag (train).
* à la validation (test).

Les principales méthodes d'échantillonnage sont : 

* validation non-croisée. Les données sont divisées en deux sous ensembles. Le modèle est constuit sur l'échantillon d'apprentissage et validé sur celui de test.
* k-fold. Les données sont divisées en k sous-ensembles (ou "plis"). L'échantillon (ou pli) de validation varie et à chaque itération un nouveau modèle est entrainé sur les k-1 échantillons restant. Les performances du modèle sont moyennées pour obtenir une mesure globale de la performance.
    
    *  leave-one-out cross-validation (LOOCV) est un cas extrême de k-fold où l'échantillon est de taille d'apprentissage est de taille $n-1$ avec $n$ le nombre d'individus.

* bootstrap ou rééchantillonnage. A creuser.

__Induire__ inférence partir de cas particulier pour en déduire une généralité.

* bagging  (pour bootstrap aggregating)
* boosting ensemble d'algorithmes qui sur-pondérent les obsevations erronées différents algorithmes de base, tels que AdaBoost (Adaptive Boosting), Gradient Boostin.

### Boosting 

1. Un poids est attribué à chaque observation $w_i = \frac{1}{N}$
2. Ce poids est modifié à chaque itération en $w_i = \frac{1 + (\hat{y} - y)^4}{\sum{1 + (\hat{y} - y)^4}}$