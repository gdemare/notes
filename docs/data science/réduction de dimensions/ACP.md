Les étapes pour réaliser une ACP :

Avec $X = [ X_1 |...| X_n ]$

1. Calcul les coordonées des points dans le repère avec comme origine le centre de gravité (ou baricentre) $X - m$ avec $m$ la matrice ligne des moyennes.
2. Calcul de la matrice de covariance $\frac{1}{n} \cdot X^T \cdot X$.

!!! warning
    Le calcul de la covariance avec cette formule ne fonctionne que parce qu'on a $moy( X_1 |...| X_n ) = [0, ..., 0]$

!!! note
    La variance se retrouvent en diagonale.

3. Calcul du nouveau repère qui maximise la variance càd déterminer les vecteurs propres de la matrice de covariance.
4. Projection des valeurs sur les nouveaux axes.