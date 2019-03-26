# Enkla bash-kommandon

## Kataloger och filer
* `cd <sökväg>` - gå till katalogen <sökväg>
* `cd ..` - gå till katalogen en nivå upp
* `cd ~` - gå till din "hemkatalog"
* `cd /` - gå till rot-kalalogen
* `pwd` - visa hela sökvägen till katalogen du står i
* `ls` - visa innehållet i katalogen du står i (tillägget `-l` ger detaljerad output, tillägget `-a` visar dolda filer)

## Visa och sök text/data
* `echo $VARIABEL` - visa innehållet i variabeln $VARIABEL
* `echo $PATH` - visa innehållet i variabeln $PATH (som innehåller listan med kataloger som i sin tur innehåller körbara filer)
* `cat <filnamn>` - visa innehållet i filen <filnamn>
* `less <filnamn>` - öppna en fil för läsning/sökning (du kan rulla fram och tillbaks i filen)
* `tail <filnamn>` - visa slutet av filen <filnamn> (det går att modifiera antalet rader, och det går att få den att fortsätta visa nytt innehåll i filen - bra om du vill se nytt innehåll i en logg)
* `head <filnamn>` - visa början av filen <filnamn> (som tail)
* `grep <sökfras> <filnamn/sökväg>` - visa rader som innehåller matchning för <sökfras> i <filnamn> eller <sökväg> (avändbart för att hitta filer som innehåller en sökfras, t ex namnet på en funktion som buggar)

Om du vill skicka utmatningen från ett kommando till nästa, så kan du använda pipe-tecknet (`|`) för att skicka det vidare. När du gör det måste du utelämna filenamnet vid det andra anropet. Så här kan det se ut:  
`tail -f /var/log/syslog | grep error` - följer utmatningen i änden av logg-filen `syslog` och filtrerar bort alla rader som inte innehåller frasen "error".

Om du vill skicka utmatningen till en fil istället för till skärmen, så avslutar du med `> <filnamn>` eller `>> <filnamn>` (beroende på om du vill skriva över filen, eller lägga till nytt data i slutet av filen). Ovanstående exempel blir då:  
`tail -f /var/log/syslog | grep error > errors.log` - filen `errors.log` kommer succesivt byggas på med nya fel allteftersom


