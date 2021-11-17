$sortie = Split-Path -Parent $PSCommandPath
$sortie = $sortie+'\pdf\'
 
$fichiers = gci -File *.docx -Recurse
$fichiersNb = $fichier.Count

$compteur = 0
foreach ( $fichierWord in $fichiers) {
	$word = $fichierWord.Name
	$nom = $word.Substring(0, $word.Length-5)
	$pdf = ( $nom + ".pdf")
	if ([System.IO.File]::Exists(($sortie+$pdf))) {
		$fichierPdf = gci -File $pdf -Recurse
		if ([datetime]($fichierPdf.LastWriteTime) -lt [datetime]($fichierWord.LastWriteTime)) {
	    	$compteur = $compteur + 1
		echo "MàJ.........................$nom"
	    	officeToPdf.exe $fichierWord $sortie
		}
	} else {
		$compteur = $compteur + 1
		echo "New.........................$nom"
		officeToPdf.exe $fichierWord $sortie
	}
	
}
echo "=====> $compteur fichiers traités."

pause