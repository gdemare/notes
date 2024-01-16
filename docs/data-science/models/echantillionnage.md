L'échantillionage des données est une étape essentielle pour entrainer de façon efficace un modèle càd pour éviter le sur-apprentissage et obtenir le meilleur modèle (le plus généralisable).

Les données sont divisés en deux sous-ensembles qui servent soient :

* à l'apprentissag (train).
* à la validation (test).

Les princiaples méthodes d'échantillonnage sont : 

* Validation non-croisée. Les données sont divisées en deux sous ensembles. Le modèle est constuit sur l'échantillon d'apprentissage et validé sur celui de test.
* k-fold. Les données sont divisées en k sous-ensembles (ou "plis"). L'échantillon (ou pli) de validation varie et à chaque itération un nouveau modèle est entrainé sur les k-1 échantillons restant. Les performances du modèle sont moyennées pour obtenir une mesure globale de la performance.
    
    *  leave-one-out cross-validation (LOOCV) est un cas extrême de k-fold où l'échantillon est de taille d'apprentissage est de taille $n-1$ avec $n$ le nombre d'individus.

* boostrap ou rééchantillionnage. A creser.

__Induire__ inférence partir de cas particulier pour en déduire une généralité.

__Boosting__ ensemble d'algorithmes qui sur-pondérent les obsevations erronées différents algorithmes de base, tels que AdaBoost (Adaptive Boosting), Gradient Boostin.
