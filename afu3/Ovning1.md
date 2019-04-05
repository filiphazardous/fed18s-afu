# Övning 1:
## Övningar med remots
Först skapar vi en upstream, fast lokalt:
```sh
mkdir test-upstream
cd test-upstream
git init --bare
ls
```
Sedan skapar vi vår "lokala" klon, och lägger till våra
första commit:s
```sh
cd ..
git clone test-upstream test1
cd test1
echo "Remotes: Övning 1" > Readme
git add Readme
git commit -m "Initial commit"
git push origin master
echo "Skorpan" > Contributors
git add Contributors
git commit -m "Added contributors file"
git push
git remote
git remote -v
git log
git reflog
```
Gå tillbaks till "upstream" kolla hur det ser ut:
```sh
cd ..
cd test-upstream
ls
git log
git reflog
```
Nu testar vi att klona "test1", dvs vår lokala downstream
```sh
cd ..
git clone test1 test2
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
Vad hände? Varför?  

Nu sätter vi _rätt_ upstream:
```sh
git remote rm origin
git remote add origin ../test-upstream
git remote -v
git push
```
Vad hände?
```sh
git push --set-upstream origin master
```
Varför gick det inte först? Vad ändrades?

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
