/* global writeXY */

/*
 * Övning 2:
 * Skriv om den enda funktionen till flera, mer överskådliga funktioner.
 *
 * Utgångspunkten är att vi har en globalt definierad funktion "writeXY" som
 * låter oss skriva text på kordinaterna {X,Y}
 *
 * Funktionen innehåller flera koncept, dels splittandet av en sträng till en
 * array, dels konverterandet av orden i arrayen, och dels de nästlade looparna
 * som skriver ut orden. Vilka koncept är lämpliga att bryta ut till egna
 * funktioner?
 */

function allOurStuffInOneFunction(sentence, width, height, stepX, stepY) {
  const words = sentence.split(/\s/);

  const lowercaseWords = [];
  for (let i = 0; i < words.length; i += 1) {
    lowercaseWords.push(words[i].toLowerCase());
  }

  let count = 0;
  for (let wordY = 0; wordY < height; wordY += 1) {
    const offsetY = wordY * stepY;

    for (let wordX = 0; wordX < width; wordX += 1) {
      const offsetX = wordX * stepX;
      writeXY(offsetX, offsetY, lowercaseWords[count]);
      count += 1;
    }
  }
}

allOurStuffInOneFunction(
  'This is a stupid long sentence that we will split and turn into a square, ok?',
  4, 4, 200, 50,
);
