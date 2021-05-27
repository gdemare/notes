ECHO OFF
for /r "%cd%" %%x in (*.docx) do (
	echo %%x
	officeToPdf	"%%x" pdf/
)