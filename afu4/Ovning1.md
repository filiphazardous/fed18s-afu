# Övning 1
## Övningar med hooks, clean, stash, squash mm

```sh
mkdir demo1
cd demo1
git init
echo "demo1" > README
git add README
git commit -m "Initial commit"
cd .git/hooks
```

---

### Om du har Mac:
```sh
touch pre-commit
chmod +x pre-commit
```

### Om du har Windows:
```sh
cp pre-commit.sample pre-commit
```
Öppna filen `pre-commit` med din editor och ta bort
 hela innehållet i filen.

---

### Här fortsätter instruktionerna för alla:

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
git clean -i
```

Följ instruktionerna för att välja den fil du vill radera. (Om du vet i
 förväg att du vill radera alla ospårade filer kan du köra `git clean -f`)

```sh
git commit -m foo
```
Vad händer? Varför?

Vad ska jag göra om jag har untracked files som jag vill behålla? (Tips: Testa `.gitignore`)

```sh
echo foo >> foo
git clean -i
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
6
7
8
9
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
