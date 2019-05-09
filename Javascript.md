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

```javascript 1.8
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

## Promise

När en funktion inte kan svara direkt så låser den inte koden, utan returnerar
 istället ett Promise. När uppgiften är klar så ser Promiset till att köra den
 funktion du önskar. Exempel på funktioner som returnerar ett Promise är fetch
 och databasanrop.

Kodklippet nedan visar en funktion som returnerar ett Promise som återkommer
 efter önskad tid (i sekunder).

```javascript 1.8
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

```javascript 1.8
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
