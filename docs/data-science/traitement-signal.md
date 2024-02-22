* Moyennes mobiles
* FFT
* Change point
* Tracking

### Moyenne mobile

Méthode de lissage du signal. 
Utiliser :

* pour diminuer le bruti du signal
* faire apparaitre une tendance

1. On définit une fenêtre
2. On répète :
    
    1. Calcul le point moyen (moyenne).
    2. La fenêtre est ensuite décalée.

!!! note
    Il faut éviter de réaliser plusieurs moyennes mobiles limiter le lissage du signal.

### Algorithme Largest-Triangle-Three-Buckets (LTTB)

1. Diviser les données en groupes.
2. Conserve le point qui maximise l'air du triangle. 

## Fonction d'Allan 

La fonction d'Allan permet de déterminer le bruit à un certain taux de moyennage (taille de la fenêtre).

### Signaux périodiques

__Amplitude__ force

__Fréquence__ nbre d’ondulations par seconde.

__Phase__ façon dont l’onde sinusoïdale est décalée dans le temps,

#### Transformation de Fourrier 

Le graphique est l'amplitude en fonction de la fréquence de chaque signau élémentaire.

Le graphique associé est l'amplitude (la valeur absolue de la valeur réélle de la transformation de Fourrier) en fonction de la fréquence.

### Changing points

Fenêtre décalé
