/* global printArea */

/*
 * Övning 3 - Liskov Substitution Principle:
 * I koden nedan betraktas kvadrater som ett specialfall av rektanglar. Det är
 * visserligen sant, men eftersom rektangeln definierar setWidth och setHeight
 * så måste även kvadraten göra det...
 *
 * Skriv om koden nedan så att klasserna har en gemensam förälder, och låt dem
 * initiera sina properties via constructorn
 */

class Rectangle {
  constructor() {
    this.width = 0;
    this.height = 0;
  }

  setColor(color) {
    this.color = color;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width; // Kan du se problemet här?
  }

  setHeight(height) {
    this.width = height; // Kan du se problemet här?
    this.height = height;
  }
}

function renderLargeRectangles(rectangles) {
  rectangles.forEach((rectangle) => {
    rectangle.setWidth(4);
    rectangle.setHeight(5);
    const area = rectangle.getArea(); // Kan du se problemet här?
    printArea(area);
  });
}

const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);
