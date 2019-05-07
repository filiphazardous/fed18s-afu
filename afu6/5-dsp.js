/* global httpFetch, wsFetch */

/*
 * Övning 5 - Dependency Inversion Principle:
 * I koden nedan har vi en InventoryRequester som hämtar frukter över Http. Nu
 * behöver vi lägga till stöd för WebSockets (WS), men InventoryTracker är
 * beroende av en specifik sorts InventoryRequester.
 *
 * Skriv om koden så att du använder Dependency Injection (skicka in beroendet
 * via contstructorn), och lägg till en klass med WS-stöd.
 *
 * Skriv om sista anropet så att det använder klassen med WS-stöd.
 *
 * (Den påhittade funktionen wsFetch tar samma parametrar som httpFetch)
 */

class InventoryRequester {
  constructor(url) {
    this.sourceUrl = url;
  }

  requestItem(item) {
    return httpFetch(this.sourceUrl, { parameters: { item } });
  }
}

class InventoryTracker {
  constructor(items) {
    this.items = items;

    this.requester = new InventoryRequester();
  }

  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}

const inventoryTracker = new InventoryTracker(['apples', 'bananas']);
inventoryTracker.requestItems();
