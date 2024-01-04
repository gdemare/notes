# Système d'Information Décisionnel (SID)

Les quatres fonctions d'un SID :

* Collecter
* Intégrer
* Diffuser
* Présenter

Deux types de bdd de données sont utilisés, celle: 

* Ecrite, peu lue > normaliser le + possible.
* Peu ecrite, lu > améliorer l'accés aux données.

## Organisation d'un SID

```sequence
Machines
                        _________________           _________________           ______________________
                       | - Fichiers      |         | Operating Data  |         | Entrepôt de Données  |          
Utilisateurs <--OLTP-->| - Bases métiers |--ETL--->| Store (ODS)     |--ETL--->|  Décisionnel (EDD)   |<--OLAP-- Utilisateurs du 
                       |_________________|         |_________________|         |______________________|          Décisionnel

```

Type de bdd           | Objectif                                                                                  | Spécificités
----------------------|-------------------------------------------------------------------------------------------|---------------
bdd métiers, fichiers | Bdd de l'applications qui doit être réactive                                              | Uniquement les dernières données et les informations utiles pour la saisie.
ODS                   | Bdd historisée et complète                                                            | Toutes les données brutes 
EDD                   | Bdd optimisée pour l'analyse (source d’information commune, homogène, normalisée et fiable) | Données agréées grâce à des indicateurs précalculées.

Les spécifités des données stockés en fonction du type de bases :

Bdd métiers, fichiers  | ODS          | EDD ou DWH
-----------------------|--------------|-----------
Hétérogènes            | Hétérogènes  | Homogènes
Redondantes            | Redondantes  | Non redondantes
Volatiles              | Historisées  | Historisées
Non agrégées           | Non agrégées | Agrégées

Les spécificités des types de bases données :

Type de bases de données  | Type de données stockées          | Optimiser pour
--------------------------|-----------------------------------|---------
Datamarts et Entrepôt     | Spécifique à un métier, un usage  | écriture et les modifications (OLTP)
Données Décisionnel       | Transversale                      | analyse (OLAP)

* __Extract Transform Load (ETL)__
* __OnLine Transactional Processiong (OLTP)__
* __OnLine Analytical Processing (OLAP)__ les deux principaux types d'OLAP sont :
    * Multidimensional OLAP Modèle multidimensionnel (MOLAP) une table de fait avec les indicateurs entourée de cubes (dimensions) d'un seul niveau.
    * ROLAP.
* __Système de Gestion de Base de Données Relationnelle (SGBDR)__ 

!!! note
    Les machines utilisées sont adaptées à leur rôle. Par exemple, pour le passage de l'ODS au DWH, il est préférable de charger puis transformer pour utiliser la puissance de traitement de l'EDD.

## Les bases de donnés et leurs types associés 

* __Datamart__ entrepôt de données décisionnel spécialisé dans un domaine.
* __Data lake__ Entrepôt de données brutes non structurées accessible en lecture seule.

Type de données | Exemples
----------------|--------------------
Structurées     | Texte, nombre, date/heure
Non structurées | Image, son, vidéo

## Les tables d'un EDD

Les types de tables :

* De dimensions, table qui contient les informations décrivent l'enregistrement de la table de fait. Elles servent notamment à filtrer les données de la table de fait.
* De fait, table qui contient les indicateurs et les données mesurables sur les faits et les événements.

!!! note
  Généralemenent, une table de fait est associés à plusieurs tables de dimensions.

### Forme normale (bases de données relationnelles)

Objectif : Normaliser les données pour éviter les anomalies de lecture, la redondance et la contre performance et, permettre d'avoir une bdd robuste et cohérente.

Cela s'effectue en : 

* Limitant les redondances
* Diminuant la volumétrie
* Interdisant les incohé

Un modèle Conceptuel de Données est constitué de : 

* Entité : objet à modéliser
* Entité est caractérisée par des propriétés.
  * Si une des propriété est unique et discriminante, elle est nommée identifiant
  * Un individu d'une entité s'appelle une occurence
  * L'association est le lien entre les entités.

### Termes du domaine intéressants non définis

* Framework comme Hadoop Distributed File System (HDFS) un système de fichiers distribué
* Calcul paralléle distribué
* Map Reduce
* Réglémentation Générale pour la Protection des Données (RGPD)
* [Schema Spy](http://schemaspy.org/), outils libre pour documenter le schéma relationnel.
* Méthode Merice, méthode de gestion de projet dédiée à la conception de la structure informatique.
