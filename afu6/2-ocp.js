/* global exports, fetch, handle, Adapter, Error */

/*
 * Övning 2 - Open/Closed Principle:
 * Klassen Adapter är definierad någon annanstans. Den är definierad så att den
 * har en constructor och en property "name"
 *
 * Skriv om koden nedan så att du lägger till funktionalitet i dina adapters
 * (utan att ändra hur grundfunktionaliteten i Adapter fungerar) som gör
 * HttpRequester lättare att förstå
 */

class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'ajaxAdapter';
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'nodeAdapter';
  }
}

function makeAjaxCall(url) {
  return fetch(url, { headers: 'Accept: application/json' });
}

function makeHttpCall(url) {
  return fetch(url, { headers: 'Accept: text/html' });
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    if (this.adapter.name === 'ajaxAdapter') {
      return makeAjaxCall(url).then((response) => {
        // Gör något spännande med response
        handle(response);
      });
    }
    if (this.adapter.name === 'nodeAdapter') {
      return makeHttpCall(url).then((response) => {
        // Gör något spännande med response
        handle(response);
      });
    }

    throw new Error('Unknown adapter');
  }
}

exports.HttpRequester = HttpRequester;
exports.AjaxAdapter = AjaxAdapter;
exports.NodeAdapter = NodeAdapter;
