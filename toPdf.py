#!/usr/bin/env python
# coding: utf-8

# In[12]:


import os
from docx2pdf import convert
from glob import glob

chemin = os.getcwd()

dossiers = ['biologie','L1 et L2 SV', 'LP', 'mathématique', 'physique'] #, "/L1/", "/L2/", "/communication/", "/méthodologie/", "/non classé/")

for i in dossiers:
    dossier = chemin +  "/" + i  + "/"
    fichiers = glob( dossier + "*.docx")
    
    # créer un dossier pdf s'il n'existe pas
    folderPdf = dossier + "pdf/"
    if not os.path.exists( folderPdf ):
        os.mkdir(folderPdf)
        print( "Dossier créé : " + folderPdf)
    
    # vérfier pour chaque fichier si la date de modif du pdf précéde celle de la modif du fichier
    for j in fichiers:
        if '~$_' not in j:
            fichierPdf = folderPdf + os.path.basename(j).replace("docx", "pdf")
            # date de modif du word > date de création du pdf ou existence
            if os.path.isfile(fichierPdf): 
                if os.path.getmtime(j) > os.path.getmtime(fichierPdf):
                    convert(j, fichierPdf)
                    print(fichierPdf + "..................MàJ")

            else :
                print( j )
                convert(j, fichierPdf)
                print( fichierPdf + "..................Créé" )


# In[9]:




