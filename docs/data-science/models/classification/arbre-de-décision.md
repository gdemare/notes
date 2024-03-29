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

Gain d'information : 

Les principaux critères pour la sélection des variables et la formation d'un embranchement sont :

* ID3
* C4.5
* CART

!!! note
    CART est une évolution de ID3 et C4.5

#### Méthode ID3

1. Calculer l'entropie sur l'ensemble des données  $H(S) = - \sum_{c_i \in C}{P(c_i) \cdot \log P(c_i)}$ avec $P(c_i)$ la fréquence pour chaque modalité.
2. Le gain d'information sur le sous ensemble en utilisant une variable $IG = H(S) - \sum_{S_j}{P(S) \cdot H(S_jk)}$ avec :
    
    * $H(S)$ l'entropie ou le gain de Gini.
    * $P(S)$ la proportion d'individus pour chaque feuille par rapport à l'effectif de celle parent.
    
4. La variable utilisée est celle avec le gain d'information maximum.

### Méthode C4.5

* SI Split Information
* GR  Gain Ratio

#### CART

Pour prédire généralement  :

* le critère de Gini pour prédire une variable qualitative.
* le MSE pour prédire une variable quantitative.

### Sélection des variables - Élagage de l'arbre

Il existe plusieurs critères pour déterminer qunand élaguer notre arbre :

* le coefficient de complexité.
* un effetif minimum dans chaque noeud ou la hauteur maximale.
* en utilisant un p-valeur, jusqu'a obtenir des variables indépendantes.

#### Coefficient de complexité

$$C(T) = \sum_{|T|}{Q_w + \alpha \cdot | T | }$$

Avec :
    
* $|T|$ nombre de noeud terminaux.
* $Q_w$ erreur quadratique moyenne.
* $\alpha$ paramètre de pénalisation.

## Forêt aléatoire

Une forêt aléatoire est un ensemble d'arbres de décision construit avec une selection aléaloire :

* des variables.
* des échantillons .

Avantages                           | Inconvénients
------------------------------------|---
Peu sensible aux valeurs manquantes | Sur-apprentissage
Peu sensible aux valeurs extrêmes   |
