# Några Javascript-koncept

## Klasser och objekt

En klass definierar hur objekt fungerar på ungefär samma sätt som ett recept
 definierar en maträtt. Klassen är inte objektet, utan objektet är
 resultatet när klassen anropas med nyckelordet "new". Det kan finnas många
 objekt som tillhör en klass. I Angular behöver ni inte instansiera era
 klasser med "new" - det beror på att Angular gör det åt er (men det måste
 ändå ske).

Kodklippet nedan definierar en klass, skapar sedan ett objekt av klassen,
 och anropar till sist metoder på objektet.

```javascript
class Dog {
  constructor({size, greeting}) {
    this.size = size;
    this.greeting = greeting;
  }
  
  greet() {
    console.log(this.greeting);
  }
  
  getSize() {
    return this.size;
  }
}

const spot = new Dog({size: 'medium', greeting: 'Bark!'});

spot.greet();
```

### Objekt, del 2

Utöver att objekt är en instans av en klass, så kan objekt också användas som
 maps, dvs som key-value store. Om du har namnet på en key i en sträng-variabel
 så kan du komma åt värdet genom att indexera objektet med hakparenteser.

På motsvarande sätt kan du också skapa ett objekt med keys i variabelnamn genom
 att sätta dem i hakparentes.

```javascript
const parameter = 'age';

const cat = {
  name: 'Kitty',
  age: 2,
};

console.log(`Kitty's age is ${cat[parameter]}`);

const cat2 = {
  name: 'Aslan',
  [parameter]: 11,
};

console.log(`Aslan's age is ${cat.age}`);
```

## Arrow functions

Funktioner kan i javascript alltid lagras i variabler och skickas som
 parametrar till andra funktioner. Ett nytt sätt att skriva en funktion som
 är lite smidigare är med pildefinitionen. Den har dessutom bieffektion att
 den kommer ihåg sitt `this` - objektet som den hör till (men det är överkurs
 för våra övningar). Nedan följer två funktioner som gör samma sak på samma
 sätt, en skriven på det gamla sättet och en med arrow-syntax.

```javascript
const oldFunction = function (parameter1, parameter2) {
  if  (parameter1) {
    return doStuff(parameter2);
  }
  return null;
};

const arrowFunction = (parameter1, parameter2) => {
  if (parameter1) {
    return doStuff(parameter2);
    return null;
  }
  return null;
};
```

Om en funktion bara ska göra en enkel sak och returnera ett värde, så behöver
 en arrow-funktion inte ha en funktions-kropp och ett return-statement. Då kan
 koden skrivas ännu tajtare.

```javascript
const parseDecimalStrOld = function (stringInput) {
  return parseInt(stringInput, 10);
};

const parseDecimalStrArw = stringInput => parseInt(stringInput, 10);
```

Om en funktion ska göra en enkel sak och returnera ett objekt, så kan parsern
 inte veta om `{ }` avser att definiera ett kodblock eller ett objekt. Då måste
 vi sätta `( )` runt objektet för att göra det tydligt.
 
 ```javascript
const parseId = idString => ({ id: parseInt(idString, 10) });
```

## Promise

När en funktion inte kan svara direkt så låser den inte koden, utan returnerar
 istället ett Promise. När uppgiften är klar så ser Promiset till att köra den
 funktion du önskar. Exempel på funktioner som returnerar ett Promise är fetch
 och databasanrop.

Kodklippet nedan visar en funktion som returnerar ett Promise som återkommer
 efter önskad tid (i sekunder).

```javascript
function wait(milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, milliseconds);
  });
}

console.log('This is without waiting');

wait(1000)
  .then(() => {
    console.log('This one waited 1 second');
  });

console.log('But this one did not wait');
```

## Exceptions/undantag

När en funktion/metod helt saknar möjligheterna att göra sitt jobb pga yttre
 faktorer (datorn kanske tappade uppkopplingen) så kan den kasta ett undantag
 (throw an exception). Ett exempel skulle kunna vara när du vill skicka ett
 epostmeddelande, men har tappat kontakten med wifi. Den anropande funktionen
 kan då fånga undantaget (catch the exception) och visa ett meddelande om att
 det tyvärr inte går att skicka epost för tillfället.
 
Kodexemplet nedan försöker hämta data från en url, och om den misslyckas för
 att vi inte har någon uppkoppling så kommer den kasta ett Exception. Detta
 fångas av try/catch som visar en dialogruta om felet.

```javascript
try { // Try samlar upp exceptions som kastas i det här kodblocket
  fetch('/api/resource/1')
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      throw new Error('No network connection!'); // Här kastar vi vårt exception
    })
} catch (error) { // Catch fångar våra exceptions 
  alert('Fetch failed with the following message\n' + error.msg);
}
```

# String literals

I äldre versioner av Javascript slår vi ihop strängar med variabler genom att
 helt enkelt använd `+`. I nyare versioner använder vi en metod där vi kan
 lägga in variablerna direkt i strängen istället, detta kallas "string
 literals."

För att definiera en string literal så använder ni backticks (`) istället för
 enkla eller dubbla citattecken, och för att använda en variabel i strängen
 använder ni $-tecken och omger variabeln med krullparenteser ( { } )

Om ni vill kan ni också göra funktionsanrop och göra matematiska operationer
 innanför krullparenteserna.  

Exempel:  
```javascript
var kittens = 5;
var dogs = 2;
var oldStyle = 'I have ' + kittens + ' kittens'; // "I have 5 kittens"
var stringLiteral = `I have ${kittens} kittens`; // "I have 5 kittens"
var stringLiteral2 = `I have ${getKittens()} kittens`; // "I have 5 kittens"
var stringLiteral3 = `I have ${kittens + dogs} pets`; // "I have 7 pets"
```
