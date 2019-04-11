# Övning 2
## Övningar för att söka i repot

```sh 
mkdir demo2
cd demo2
git init
echo demo2 > README
git add README
git commit -m "Initial commit"
git checkout -b new_branch
git config user.name "Other user"
echo foo > branch
git add branch
git commit -m "Added file 1 to branch"
git config --unset user.name
echo bar >> branch
git add branch
git commit -m "Updated file in branch"
git checkout master
touch master_1
git add master_1
git commit -m "Added file 1 to master"
touch master_2
git add master_2
git commit -m "Added file 2 to master"
```
Nu testar vi lite:
```sh
git log master..new_branch
git log new_branch..master
```
Vad visas? Varför?
```sh
git log ..new_branch
git log ..master
```
Vad visas? Varför?
```sh
git checkout new_branch

git log ..new_branch
git log ..master
```
Vad visas? Varför?
```sh
git log new_branch...master
git log master...new_branch
git log ...master
git log ...new_branch
```
Vad visas? Varför?
```sh

git grep foo

echo foo >> README
git grep foo

echo foo > foo
git grep foo

git add foo
git grep foo

git reset
git grep foo

grep foo
```

I vilka situationer ser vi träffar på olika filer?

Vad är skillnaden mellan `git grep foo` och `grep foo`?


```sh
git blame branch
```

Vad kan det här kommandot användas till?
