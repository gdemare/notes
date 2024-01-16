## Arbre de décision

Ensemble de règles simples et ordonnées pour séparer les individus.

Avantage                            | Inconvénients 
------------------------------------|---
Compréhensible                      | Instable
Rapide                              |
Volumétrie                          |
Flexible                            |
Peu sensible aux valeurs manquantes |
Peu sensible aux valeurs extrêmes   |

!!! note
    La forêt aléatoire permet de pallier les problèmes d'instabillité.

### Critère pour la création d'un embranchement

Gain d'information 

Les principaux critères pour la sélection des variables et la formation d'un embranchement sont :

* ID3
* C4.5
* CART

!!! note
    CART est une évolution de ID3 et C4.5

#### Méthode ID3

1. Calculer l'entropie sur l'ensemble des données  $H(S) = - \sum_{c_i \in C}{P(c_i) \cdot \log P(c_i)}$ avec $P(c_i)$ la fréquence pour chaque modalité.
2. Le gain d'information sur le sous ensemble en utilisant une variable $IG = H(S) - \sum_{S_j}{P(S) \cdot H(S_jk)}$. 
3. La varible avec le gain d'information maximum est gardé.

### Méthode C4.5

SI Split Information

GR  Gain Ratio

#### CART

Pour prédire généralement  :

* le critère de Gini pour prédire une variable qualitative.
* le MSE pour prédire une variable quantitative.

### Sélection des variables - Élagage de l'arbre

* Coefficient de complexité.

* Effetif minimum dans chaque noeud ou la hauteur maximale.
* p-valeur, jusqu'a obtenir des variables indépendantes.

#### Coefficient de complexité

$$C(T) = \sum_{|T|}{Q_w + \alpha \cdot |T|}$$ avec :
    
* $|T|$ nombre de noeud terminaux.
* $Q_w$ erreur quadratique moyenne.
* $\alpha$ paramètre de pénalisation.

## Forêt aléatoire

Une forêt aléatoire est un ensemble d'arbres de décision construit avec des variables et un échantillon selectionnés aléaloirement.


Avantages                           | Inconvénients
------------------------------------|---
Peu sensible aux valeurs manquantes | Sur-apprentissage
Peu sensible aux valeurs extrêmes   |