ECHO OFF
for /r "%cd%" %%x in (S3*.docx) do (
	echo %%x
	officeToPdf	"%%x" pdf/
)