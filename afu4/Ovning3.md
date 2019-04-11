# Övning 3
## Sök fel i historien och rätta till dem

Skapa ett repo med en README på github  
Klona repot och cd:a in i katalogen
```sh
echo hej > file
git add file
git commit -m "Added file"
touch 1
git add 1
git commit -m "added 1"
touch 2
echo hejdå > file
git add 2 file
git commit -m "added 2"
touch 3
git add 3
git commit -m "added 3
touch 4
git add 4
git commit -m "added 4"
touch 5
git add 5
git commit -m "added 5"
touch 6
git add 6
git commit -m "added 6"
touch 7
git add 7
git commit -m "added 7"
git push
```

Nu ska vi leta upp commiten som introducerade "Hejdå"
```sh
git bisect start
git bisect bad
git bisect good HEAD~6
git status
```
Finns felet här? Kör `git bisect good` eller `git bisect bad` tills git talar
 om att den har hittat commiten som intruducerade felet.
 
Lägg på minnet vilket commit-meddelande som commiten har

```sh
git bisect reset
```
Ok, nu vet vi var felet ligger - kan vi göra något för att skriva om historien?

git rebase -i HEAD~6  
1. Ändra den aktuella commiten till "edit" (istället för "pick") och spara  
1. Redigera filen med felet så den blir som vi vill ha den  
1. Adda den
1. `commit --amend`
1. `git rebase --continue`

```sh
cat file
git log
git reflog
```

Vad ser du?

```sh
git push
```

Vad händer? Varför?

```sh
git push -f
```

Vad händer? Varför?

Vad händer om någon gör en `git pull` på en gren som blivit
 force-pushad?
