Les méthodes de génies génétiques permettent de :

* Faire synthétiser une enzyme par un autre organisme, par exemple, pour étudier ses effets.
* Réaliser des copies d'une séquence d'ADN.

Pour pouvoir étudier les effets d'une séquence d'ADN, il faut :

1. Isoler la séquence d'intérêt.
2. Créer un vecteur de clonage avec la séquence d'intérêt.
3. L'insérer dans un autre organisme.
4. Vérifier la présence de la séquence et sa réplication.

L'objectif du cours étant d'être capable d'élaborer un protocole pour étudier une séquence d'ADN particulière.

__Banque__ introduction d'une multitude de fragments pour déterminer ultérieurement le gène d'intérêt.

__Protéine de fusion__ combinaison de séquences de gènes pour former une protéine chimérique.

Les OGN sont interdits car il existe des risques probables pour la santé. Leur culture est interdite car les gènes d'OGN peuvent contaminer lors de fécondation avec des espèces non modifiées, par exemple lorsque les champs sont proches.

!!! warning
    Les modifications post-traductionnelles des protéines eucaryotes ne sont pas réalisables dans les Bactéries.

### Type de vecteurs

Il existe des vecteurs différents optimisés en fonction du type de :

* Vecteur de clonage pour multiplier un vecteur dans des bactéries par exemple. (-T) optimisé pour un taq.
* Vecteur d'expression. Site

Taq laisse des adénines débordantes. Pas d'activité de vérification de la base incorporée.

## Fabrication d'un vecteur de clonage

Un vecteur (ou véhicule) de clonage est plasmide qui possède :

* un site d'origine de réplication qui permet la réplication autonome du vecteur càd indépendamment de la cellule.
* Un site de multiclonage (appelé aussi poly-linker ou MCS) est la zone d'intégration de la séquence d'intérêt. Elle contient plusieurs sites de restriction uniques. Une seule ouverture est possible par enzyme de restriction.

Très souvent, on ajoute :

* Un agent de sélection càd un caractère sélectif.
* Un promoteur en amont de MCS si on cherche à faire exprimer le gène.

__Vecteur de clonage__ plasmide ayant reçu une séquence d'ADN extérieure.

__Vecteur recombinant__ vecteur qui possède l'insert.

Caractère sélectif caractère exprimé par la cellule servant à identifier son génotype. Il s'agit souvent d'une résistance à un antibiotique.

!!! note
    Chez les Bactéries, les plasmides confèrent un avantage mais ne sont pas indispensables à la survie.

!!! note
    Le cours se limite à la présentation des plasmides. Ils sont capables d'accueillir des insertions ayant de maximum 10Kb

### Carte de restriction

Une carte de restriction permet de connaitre la structure du vecteur de clonage. Elle se présente sous la forme d'une cercle avec la position par rapport à une origine relative :

* Des sites de restriction des principales enzymes.
* De la séquence d'intérêt.

Pour la réaliser, il faut mesurer la taille et le nombre de fragments générés par chaque enzyme de restriction. Ces informations sont déterminées par électrophorèse.

L'analyse de l'hydrolyse du plasmide se fait par l'utilisation d'un contrôle par un plasmide non hydrolysé.

### Lier l'ADN

Une liaison entre deux extrémités d'ADN soit liée, il faut :

* Elles soient complémentaires.
* Utiliser une ligase, une enzyme qui fonctionne avec de l'ATP.

Pour que l'ADN ne se lie qu'entre les séquences désirées, il peut être
utile de modifier les groupements phosphodiesters avec :

* Supprimer (phosphatase)
* Ajouter (polynucléotide kinase) |

### Modifier les extrémités de l'ADN

L'extrémité cohésive de brins d'ADN peut être modifié par l'utilisation de :

| Type d'ADN polymérase | Présence de dNTP | Absence de dNTP         |
| --------------------- | ---------------- | ----------------------- |
| I                     | Complète 5’-3’   | Supprime 3’-5’ et 5’-3’ |
| Enzyme Klenow ou T4   | Complète 5’-3’   | Supprime 5’-3’          |
### Sens de l'insert dans le cas d'un clonage non orienté

Dans le cas de la ligation d'un insert non orienté. Il est possible de déterminer le sens d'insertion comparaison de résultats d'électrophorèse avec les tailles théoriques :

* Utilisant trois amorces dont deux s'hybridant avec l'insert à des endroits différents et une avec le vecteur pour réaliser une [[PCR]] En fonction du sens d'insertion, l'analyse des résultats de PCR donneront. Sinon les deux amorces se situent sur le même brin et l'amplification ne peut pas avoir lieu.
* L'analyse de la taille des fragments d'une digestion avec des enzymes de restriction.

## Insérer le vecteur de clonage dans une cellule

__Insert__ séquence d'ADN d'intérêt.

__Transfection__ introduction d'un plasmide dans une cellule eucaryote.

__Transformation__ introduction d'un plasmide dans une cellule procaryote
notamment dans les bactéries.

Pour qu'un vecteur de clonage puisse entrer dans une cellule, il faut
que cette dernière soit dans un état particulier, appelé état de
compétence. Il peut être obtenu :

* Par électroporation càd par l'application d'un champs électrique.
* En le bombardant avec le vecteur de clonage.
* Par l'utilisation d'un autre organisme (virus).
* En l'insérant par une aiguille.
* Un choc thermique.
* Des produits chimiques.
* L'utilisation d'un complexe qui permet l'endocytose.

!!! note
    Dans le cas d'un choc thermique ou de l'utilisation de produits chimique un seul plasmide peut entrer par bactérie. Le mécanisme qui permet cela est encore inconnu.

Après une transfection d'ADN dans des cellules eucaryotes, plusieurs destins sont possibles selon la méthode de tranfectuon et le type d'ADN introduit :

- Dégradation : Une partie de l'ADN peut être dégradée par les nucléases présentes dans la cellule, notamment si l'ADN est nu et non protégé.
- Expression transitoire : Si l'ADN est sous forme de plasmide et reste dans le cytoplasme ou le noyau sans intégration, il peut être transcrit et traduit temporairement. Cependant, il sera progressivement perdu au fil des divisions cellulaires ou dégradé.
- Intégration dans le génome : Dans certains cas, notamment avec des plasmides contenant des séquences favorisant la recombinaison ou avec des méthodes spécifiques (comme la transfection avec CRISPR/Cas9 ou des vecteurs viraux), l'ADN peut s'intégrer dans le génome de la cellule. Cela permet une expression stable et durable du gène d'intérêt.
- Épisome : Certains plasmides possédant des origines de réplication spécifiques peuvent persister sous forme d'épisomes (petites molécules d'ADN circulaires indépendantes du génome) dans le noyau, permettant une expression prolongée sans intégration.

Deux contrôles sont à réaliser :

* Positif uniquement le vecteur recombinant.
* Négatif uniquement avec le vecteur vide.

__Transmutation__ application d'un choc thermique ou électrique pour rendre instable la membrane et permettre l'entrée du vecteur dans la bactérie.

__Transduction__ processus de transfert de gènes dans une cellule eucaryotes en utilisant un virus. Par opposition à la transfection qui s'effectue sans.
# Déterminer les cellules ayant reçu le vecteur

À l'issue de l'insertion du vecteur de clonage, toutes les cellules ne possèdent pas le vecteur recombinant. Pour détecter celles qui l'ont reçu, on peut :

* Utiliser des anticorps dirigés contre la protéine synthétisée par l'insert.
* En vérifiant la présence de la séquence avec une sonde qui possède des atomes radioactifs ou fluorescents.
## Déterminer les Bactéries ayant reçues la vecteur de clonage

Pour faciliter, l'identification des Bactéries qui ont reçu le
vecteur recombinant, on peut ajouter au vecteur :

* Un gène de résistance qui confère à la bactérie la capacité de résister à une molécule normalement délétères (par exemple, à la pénicilline).
* Un caractère sélectif sous contrôle du promoteur de clonage. Le MCS se trouve à l'intérieur du caractère. Si le vecteur est recombinant, la protéine produite est alors non fonctionnelle.

Les bactéries transformées sont diluées suffisamment pour que lorsque la solution est étalée sur le gel milieu de gélose, les bactéries forment des colonies distinctes. Elles sont ensuite cultivées dans une boîte de pétrie.

!!! note
    Une fois la transfection réalisée, il est nécessaire d'incuber les bactéries un certain temps après une transfection pour permettre au gène de résistance de s'exprimer avant la mise en présence du milieu de sélection. L'expression du gène de résistance empêche la réplication du plasmide.

Les contrôles à réaliser sont :

* négatifs. Une culture de la souche bactérienne sans vecteur pour vérifier qu'elles ne sont pas résistantes.
* positifs. Une culture avec des bactéries avec le vecteur vide (dont la présence du plasmide est certifiée et qui sont résistantes.

!!! example
    Un vecteur qui possède :
    
    * Un inducteur Lacz qui produit une protéine qui transforme le galactose en un produit de couleur bleu. Le caractère sélectif est sous contrôle du promoteur de clonage.
    * Un caractère sélectif de résistance à la pénicilline.

    Si les Bactéries sont :*

    * sans plasmide, elle meure car elle ne possède pas le gène de résistance.
    * blanches si elles possèdent le vecteur recombinant.
    * Bleues si elles possèdent le vecteur vide.

### Caractère sélectif X-Gal

Dans le cas de la présence du caractère sélectif X-gal, l'expression de la protéine de l'insert en même temps que l'ADN codant pour la protéine de sélection (x-Gal). Le substrat agissant comme facteur de transcription càd que la transcription de n'a lieu qu'en présence de X-Gal.

Le fait que l'ARN soit polycistronique (régulation génétique)
