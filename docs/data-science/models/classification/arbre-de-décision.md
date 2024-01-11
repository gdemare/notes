

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


Nombre de "questions" nécessaire pour connaitre la réponse : 
$2^{bits} = N$ Soit $bits = \log _2 (N)$ Ou encore $bits = - \log _2 (\frac{1}{N})$.
Entropie de Shannon : $H(P) = -\sum_i p_i \log_2(p_i)$
Plus petit quantité d'information nécessaire pour lever l'incertitude. Elle est maximale lorsque les possibilités sont équiprobables.

#### Méthode ID3

1. Calculer l'entropie sur l'ensemble des données  $H(S) = - \sum_{c_i \in C}{P(c_i) \cdot \log P(c_i)}$ avec $P(c_i)$ la fréquence pour chaque modalité.
2. Le gain d'information sur le sous ensemble en utilisant une variable $IG = H(S) - \sum_{S_j}{P(S) \cdot H(S_jk)}$. 
3. La varible avec le gain d'information maximum est gardé.

### Méthode C4.5

SI Split Information

GR  Gain Ratio

### CART


## Sélection des variables - Élagage de l'arbre

* Coefficient de complexité

## Forêt aléatoire

Une forêt aléatoire est un ensemble d'arbres de décision construit avec des variables et un échantillon selectionnés aléaloirement.


Avantages                           | Inconvénients
------------------------------------|---
Peu sensible aux valeurs manquantes | Sur-apprentissage
Peu sensible aux valeurs extrêmes   |

## Concept

Une forêt aléatoire est un ensemble d'arbres de décision construit avec des variables et un échantillon selectionnés aléaloirement.

## Type de variables

* qualitative
* quantitatives

## Utilité

* classification

## Attribut

| + | - |
|---|---|
| Peu sensible aux valeurs manquantes | sur-apprentissage |
| Peu sensible aux valeurs extrêmes | |

## Sélection des variables - Élagage de l'arbre



## Issue

* Abre de décision
