## Concept

On regroupe les individus 

## Type de variables

* qualitatives
* quantitatives

## Utilité

* Traiter les valeurs manquantes.
* Clustering.

## Attribut

| + | - |
|---|---|
| | couteux |
| | instable |

## Issue

Centres mobiles
Nuées dynamique (k-means)

``` 
ODS GRAPHICS ON;
PROC KDE;
RUN;
ODS GRAPHICS OFF;
```

## Paramètres

* `UNIVAR var_quant <length(var_quant=valeur)>` lisser plus ou moins la courbe.
* `BIVAR (var_1 var_2)` 
