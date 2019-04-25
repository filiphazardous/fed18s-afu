/* global render */

/*
 * Övning 1:
 * Fixa namngivningen så att det går att förstå vad som händer
 *
 * (Det som händer är att fp hämtar data om en Pokémon, gp anropar fp och
 * returnerar ett Promise, p innehåller detta Promise.)
 */

function fp(n) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
}

function gp(n) {
  return fp(n).then(r => r.json);
}

const p = gp('1');

p.then((r) => {
  render(r);
});
