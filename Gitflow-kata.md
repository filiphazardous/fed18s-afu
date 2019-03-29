# Gitflow-kata

Här följer instruktioner för att skapa ett repo med ett
 enkelt javascript-projekt som är organiserat enligt 
 principerna i Gitflow.
 
Efter varje avsnitt (eller närsomhelst under tiden) är
 det en bra idé att köra `git status` och `git log`
 för att kolla läget. För att undersöka vilka grenar
 som finns kan du även kolla `git branch` då och då.
 
## Skapa repot
```sh
cd ~
mkdir gitflow-kata
cd gifflow-kata
git init
echo "Gitflow-kata" > Readme
git add Readme
git commit -m "Initial commit"
```

## Skapa vår POC
En POC ("proof of concept") är den initiala versionen 
 som vi utvecklar. Innan den finns är det ingen skillnad 
 mellan `master` och `develop`
 
```sh 
touch start.js
```

Öppna filen med en editor och följande kod:
```javascript
console.log('hej');
```

Provkör filen med `node` (om du har det installerat):
```sh 
node start.js
```

Commita den nya filen:
```sh 
git add start.js
git commit -m "POC up and running"
```

## Skapa gren för löpande utveckling
Grenen för löpande utveckling (`develop`) är förutom
 `master` den enda långlivade grenen i Gitflow.
 
 ```sh 
 git checkout -b develop
 ```

## Skapa en gren för utveckling av din första feature
Du ska stå i grenen `develop` när du börjar utföra
 följande kommandon.
 
 ```sh
 git checkout -b develop/goodbye
 touch goodby.js
 ```
 
 Öppna filen `goodbye.js` med en editor, och lägg in
  följande:
  ```javascript
module.exports = {
    bye: function () {
        console.log('hejdå');
    }
};
```

Redigera `start.js` så att den ser ut så här:
```javascript
var bye = require('./goodbye.js');
console.log('hej');
bye.bye();
```

Testa med `node` som ovan (om du vill och kan).

Och fortsätt i terminalen:
```sh 
git add start.js goodbye.js
git commit -m "Added goodbye feature"
```

Nu har vi skapat en feature i en feature-gren, om vi är
 nöjda med den så är det nu som vi skulle skicka en pull
 request (mer om det senare).
 
 ## Skapa en hotfix
 Kod-basen som vi har driftsatt ligger i master. I vårt
  nuvarande scenario har det uppstått en bugg.
  
```sh
git checkout master
git checkout -b hotfix/0.0.2 
```

Öppna filen `start.js` och redigera den så att den ser
 ut så här:
```javascript
"use strict";
console.log('hej');
```

Provkör filen med `node` (om du vill och kan).
Lägg till filen och commita (du vet hur).

Nu har du en gren med en buggfix som du är redo att
 driftsätta. När du har driftsatt den så mergas den
 till `master` _och_ till `develop`:
 
```sh 
git checkout master
git merge hotfix/0.0.2
git checkout develop
git merge hotfix/0.0.2 
```

## Gör en rebase i din feature-gren
Efter hotfixen i förra avsnittet så har en skillnad
 uppstått mellan `develop` och `feature/goodbye`. Vi
 vill skriva om historien, så att det ser ut som om
 vi skapade vår `feature`-gren efter att hotfixen
 mergades:
 
```sh 
git checkout feature/goodbye
git rebase develop
```

En konflikt har uppstått - lös den, och kör därefter
 `git status`. Följ instruktionerna som `git` ger.
