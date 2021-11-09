$sortie = Split-Path -Parent $PSCommandPath
$sortie = $sortie+'\pdf\'

$saisie = read-host "Nom du dossier"
#cd $saisie

$fichier = gci -File *.docx -Recurse
$fichierNb = $fichier.Count
$compteur = 0

foreach( $i in $fichier ) {
	$compteur = $compteur+1
	Write-Progress -Activity "Processing Files" -status "Processing File $compteur / $fichierNb echo $i" -PercentComplete ($compteur / $fichierNb * 100)
	officeToPdf.exe $i $sortie
}#>
pause

