ECHO OFF
set racine=%cd%
cd %cd%\campbell
for /r "%cd%" %%x in (*.docx) do (
	echo %%x
	officeToPdf	"%%x" %racine%\pdf\
)