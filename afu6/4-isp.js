/* global exports */

/*
 * Övning 4 - Interface Segregation Principle:
 * I koden nedan bygger vi vår egen version av jQuery, och vi är väldigt stolta
 * över vårt stöd för animationer.
 *
 * Problemet är att väldigt få av våra användare använder stödet för
 * animationer, och trots det tvingar vi dem att definiera "animationModule"
 *
 * Skriv om klassen så att "animationModule" blir ett tillval (option)
 */

class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.animationModule.setup();
  }

  traverse() {
    this.rootNode.children.forEach((child) => {
      this.animationModule.animate(child);
      child.traverse();
    });
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  animationModule: { // Empty mandatory animationModule
    setup() {},
    animate() {},
  },
});

exports.$ = $;
