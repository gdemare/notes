* Moyennes mobiles
* FFT.
* Change point
* Tracking

### Moyenne mobile

Méthode qui permet de lisser un signal. Cette méthode est Utiliser :

* pour diminuer le bruit du signal.
* faire apparaitre une tendance

1. On définit une fenêtre
2. On répète :
    
    1. Calcul le point moyen (moyenne).
    2. La fenêtre est ensuite décalée.

!!! note
    Il faut éviter de réaliser plusieurs moyennes mobiles limiter le lissage du signal.
    
### Algorithme Largest-Triangle-Three-Buckets (LTTB)

1. Diviser les données en groupes.
2. Conserver le point qui maximise l'air du triangle. 

`import lttbc`

`lttbc.downsample(x_data, data, nb_points)` lisser les données avec l'agorithme LTTBC.

`%pip install tensorflow`

Fonction d'Allan permet de déterminer le bruit à un certain taux de moyennage (taille de la fenêtre).

astype(np.float64)

`%matplotlib inline` affihce rles graphiques dans le code.

from scipy.fft import fft

`fft(noisy_signal)` transformation rapide de Fourrier.

`numpy.argmax()` indice de la valeur la plus élevée.

### Transformation de Fourrier 

* `np.fft.fft(noisy_signal)` transformer les données avec Fourrier.
* `np.fft.fftfreq(signal, d=freq)` déterminer les fréquences élémentaires des signaux périodiques avec d d'acquisition des points.

* `scipy.fft.fft(signal)` transformer les données avec Fourrier.
* `scipy.fft.fftfreq(n, d=freq)` déterminer les fréquences élémentaires des signaux périodiques  avec d d'acquisition des points.


Le graphique est l'amplitude en fonction de la fréquence de chaque signau élémentaire.

``` python
plt.plot(freq, abs(fft))
```

!!! note
    `abs` renvoie la valeur absolue de la partie entière.

`scipy.ifft(fourrier)` transformation inverse de Fourrier.

Filtre introduise un déphasage.


Afficher une image en noir et blanc à partir d'une matrice avec les valeurs de gris.
```
import matplotlib.pyplot as plt

# Afficher l'image en noir et blanc
plt.imshow(image, cmap='gray')
plt.axis('off')  # Masquer les axes
plt.show()
```

### Changing points
