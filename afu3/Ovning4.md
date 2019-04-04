# Övning 4
## Mera remotes och Github

Det här är en version av Övning 1, men där du använder Github som upstream.

Det första steget är att du skapar ett nytt repo på Github (låt Github skapa README åt dig).

URL:en till ditt nya repo hittar du om du klickar på "Clone or download" på Github.

Sedan skapar vi vår lokala klon, och lägger till våra första commit:s
```sh
git clone <url-från-github> test1
cd test1
echo "Skorpan" > Contributors
git add Contributors
git commit -m "Added contributors file"
git push
git remote
git remote -v
git log
git reflog
```
Nu testar vi att klona en gång till
```sh
cd ..
git clone <url-från-github> test2
cd test2
git remote -v
ls
git log
git reflog
```
Hur skiljer sig "test2" från "test1"? Varför?  

Åter till "test1", vi lägger till lite mer
```sh
cd ../test1
git reflog
echo "New file" > test
git add test
git commit -m "Added test"
```
Och nu över till "test2" för att dra ned ändringarna
```sh
cd ../test2
git pull
git status
git log
git reflog
```
Ser det ut som du väntade dig?  

Härnäst gör vi lokala ändringar i "test2"
```sh
echo "Madicken" >> Contributors
git add Contributors
git commit -m "Added Madicken to contributors file"
git push
```
Går allt som väntat den här gången? 

Nu provar vi att skapa konflikt:
```sh
cd ../test1
git pull
echo "Emil i Lönneberga" >> Contributors
git add Contributors
git commit -m "Added Emil to contributors file"
git push
cd ../test2
echo "Nils Karlsson Pyssling" >> Contributors
git add Contributors
git commit -m "Added Nils to contributors file"
git push
```
Varför funkar det inte?

```sh
git pull
```
Vad händer?
```sh
git push
```
Och vad händer nu? Har du löst problemet?

Ett annat sätt att lösa problemet:
```sh
cd ../test1
git pull
git log
echo "Pippi Långstrump" >> Contributors
git add Contributors
git commit -m "Added Pippi to contributors file"
git push
cd ../test2
echo "Ronja Rövardotter" >> Contributors
git add Contributors
git commit -m "Added Ronja to contributors file"
git fetch
```
Vad har vi gjort hittills?
```sh
git pull -r
```
Vad gjorde vi nu?
```sh
git push
cd ../test1
git pull
git log
```
Hur blev slutresultatet?

Den här gången gjorde vi övningen mot ett "riktigt" remote-repo.
Som du märkte så funkar konflikter och hantering av dessa likadant
som när du gjorde första övningen.
