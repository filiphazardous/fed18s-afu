# Övning 1
## Övningar med hooks, clean, stash, squash mm

```sh
mkdir demo1
git init
echo "demo1" > README
git add README
git commit -m "Initial commit"
cd .git/hooks
touch pre-commit
chmod +x pre-commit
```
Klistra in i filen:
```sh
#!/bin/sh

untracked_files=$(git status --porcelain --no-column | grep \?\?)
if [ "${untracked_files}" = "" ]; then
  exit 0
fi

echo
echo "ERROR: Untracked files when commiting. Please add or ignore files"
echo "$untracked_files"
echo
exit 1
```

---

Nu går vi tillbaks till rotkatalogen i repot och försöker trigga vår hook

```sh 
touch foo bar
git add foo
git commit -m foo
```
Vad händer? Varför?

```sh
git clean
git commit -m foo
```
Vad händer? Varför?

Vad ska jag göra om jag har untracked files som jag vill behålla? (Tips: Testa `.gitignore`)

```sh
echo foo >> foo
git clean
```
Vad händer?
```sh
git stash
git checkout -b new_branch
git stash pop
```
Vad händer?
```sh
git add foo
git commit -m "added content to foo"
echo bar >> foo
git add foo
git commit -m "added event more content to foo"

git checkout master
git merge new_branch --squash
git status
git commit
```
Vad hände? Varför?

---

Skapa filen "lines" med innehållet:
```
1
2
3
4
5
```
Adda och commita filen.

Lägg till en rad med texten "hej" före första raden  
Lägg till en rad med texten "hejdå" efter sista raden

Kör:
```sh
git add lines -p
```
Godkänn första ändringen, och neka andra ändringen  
Commita 

Vad har det här arbetssättet för användningsområden?